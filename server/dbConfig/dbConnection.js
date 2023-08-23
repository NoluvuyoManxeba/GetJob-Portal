import mongoose from "mongoose";
// Define a function to establish a database connection
const dbConnection = async () => {
  try {
    // Attempt to connect to the MongoDB database using the provided URL from environment variables
    const dbConnection = await mongoose.connect(process.env.MONGODB_URL);
// If the connection is successful, log a success message
    console.log("DB Connected Successfully");
  } catch (error) {
    // If there's an error during the connection attempt, log an error message
    console.log("DB Error: " + error);
  }
};
// Export the dbConnection function for use in other parts of your application
export default dbConnection;
