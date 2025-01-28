import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null); // Start with null instead of an empty object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token"); // Assuming token is stored in localStorage after login
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        // Check the full response object
        console.log(response.data);
  
        // Assuming `response.data` contains the user object directly:
        setUserData(response.data.user || response.data);
        
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };
  
    if (token) {
      fetchUserData();
    }
  }, [token]);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      
      {/* Conditionally render if userData exists */}
      {userData ? (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <p className="mt-1 text-lg">{userData.name}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <p className="mt-1 text-lg">{userData.email}</p>
          </div>
          <button
            onClick={() => handleUpdate()}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Update Profile
          </button>
        </>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default ProfilePage;
