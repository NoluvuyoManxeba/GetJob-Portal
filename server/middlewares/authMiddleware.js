import JWT from "jsonwebtoken";

// Define a middleware function for user authentication
const userAuth = async (req, res, next) => {
  // Get the "Authorization" header from the request
  const authHeader = req?.headers?.authorization;

  // Check if the header exists and if it starts with "Bearer"
  if (!authHeader || !authHeader?.startsWith("Bearer")) {
    next("Authentication failed"); // Call the next middleware with an error message
  }

  // Extract the token from the "Authorization" header
  const token = authHeader?.split(" ")[1];

  try {
    // Verify the token using the provided JWT secret key
    const userToken = JWT.verify(token, process.env.JWT_SECRET_KEY);

    // Attach the authenticated user's ID to the request body
    req.body.user = {
      userId: userToken.userId,
    };

    next(); // Call the next middleware
  } catch (error) {
    console.log(error);
    next("Authentication failed"); // Call the next middleware with an error message
  }
};

// Export the userAuth middleware function for use in other parts of your application
export default userAuth;
