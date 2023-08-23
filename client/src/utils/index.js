// Import the axios library for making HTTP requests
import axios from "axios";
const API_URL = "http://localhost:8800/api-v1"; // Define the base URL for the API

// Create an instance of axios for API requests
export const API = axios.create({
    baseURL: API_URL,
    responseType: "json",
});

// Function to make API requests with necessary headers and error handling
export const apiRequest = async({url, token, data,
method}) => {
    try {
        // Make the API request
        const result = await API(url, {
            method: method || "GET",
            data: data,
            headers:{
                "content-type": "application/json",
        Authorization: token ? `Bearer ${token}` :
        "",
            }
        });

        return result?.data;
    } catch (error) {
        // Handle errors by logging and returning a formatted error object
        const err = error.response.data;
        console.log(err);
        return { status: err.sucess, message: err.
        message };
    }
};
// Function to handle file uploads using Cloudinary
export const handleFileUpload = async (uploadFile)=> 
{
const formData = new FormData();
formData.append("file", uploadFile);
formData.append("upload_preset", "GetJob");

try {
    // Upload the file to Cloudinary
    const response = await axios.post(
        "http://api.cloudinary.com/v1_1/dr3fnldwx/image/upload/",
        formData
    );
    return response.data.secure_url;
}   catch (error) {
    console.log(error);
}
};
// Function to update the URL with query parameters
export const updateURL = ({
    pageNum,
    query,
    cmpLoc,
    sort,
    navigate,
    location,
    jType,
    exp,
}) => {
    const params = new URLSearchParams();

    if (pageNum && pageNum > 1) {
        params.set("page", pageNum);
    }

    if (query) {
        params.set("search", query);
    }
    
    if (cmpLoc) {
        params.set("location", cmpLoc);
    }

    if (sort) {
        params.set("sort", sort);
    }

    if (jType) {
        params.set("jtype", jType);
    }

    if (exp) {
        params.set("exp", exp);
    }
    // Construct the new URL with query parameters
    const newURL = `${location.pathname}?${params.toString()}`;
    navigate(newURL, { replace: true }); // Use the navigate function to update the URL and replace the current entry

    return newURL;
};