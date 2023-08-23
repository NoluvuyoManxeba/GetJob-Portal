import mongoose from "mongoose";
import Users from "../models/userModel.js";

// Update user information
export const updateUser = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    contact,
    location,
    profileUrl,
    jobTitle,
    about,
  } = req.body;

  try {
     // Check if all required fields are provided
    if (!firstName || !lastName || !email || !contact || !jobTitle || !about) {
      next("Please provide all required fields");
    }
// Extract the user's ID from the request
    const id = req.body.user.userId;
// Check if the user ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No User with id: ${id}`);
    }
// Create an updated user object
    const updateUser = {
      firstName,
      lastName,
      email,
      contact,
      location,
      profileUrl,
      jobTitle,
      about,
      _id: id,
    };
// Update the user information in the database
    const user = await Users.findByIdAndUpdate(id, updateUser, { new: true });
// Generate a new JWT token for the updated user
    const token = user.createJWT();
// Remove the password from the user object before sending the response
    user.password = undefined;
 // Send the response
    res.status(200).json({
      sucess: true,
      message: "User updated successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

// Get user information by ID
export const getUser = async (req, res, next) => {
  try {
    // Extract the user's ID from the request
    const id = req.body.user.userId;

    const user = await Users.findById({ _id: id });

    if (!user) {
      return res.status(200).send({
        message: "User Not Found",
        success: false,
      });
    }
// Remove the password from the user object before sending the response
    user.password = undefined;

    res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "auth error",
      success: false,
      error: error.message,
    });
  }
};
