// import axios from "axios";

// export default async function handler(req, res) {
//   const credentials = {
//     username: "avoit21", // replace with your username
//     password: "Avoit2015", // replace with your password
//   };

//   try {
//     const response = await axios.post(
//       "https://api.elko.cloud/v3.0/api/Token",
//       credentials
//     );

//     // Return the entire response data
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error(error); // Log the error for more details
//     res.status(500).json({ error: "Error fetching token" });
//   }
// }

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
