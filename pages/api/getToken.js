import axios from "axios";

// This function retrieves the bearer token
export async function getBearerToken() {
  const credentials = {
    username: process.env.ELKO_USERNAME,
    password: process.env.ELKO_PASSWORD,
  };

  try {
    const response = await axios.post(
      "https://api.elko.cloud/v3.0/api/Token",
      credentials
    );

    return response.data; // Assuming the token is the entire response data
  } catch (error) {
    console.error("Error in getBearerToken:", error);
    throw error;
  }
}
