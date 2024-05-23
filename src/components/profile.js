import React from "react";
import "../components_css/profile.css";
import ToggleBox from "./togglebox";

const UserProfile = () => {
  const user = {
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErfyI52uVf588MUrznMA2NCbfFdqicJiWsw&s",
    username: "mantraj23",
    fullName: "Mantra Jain",
    email: "example@gmail.com",
    mobile: "+1234567890",
    address: "Hall-3 G202 IITK",
  };

  return (
    <>
      <div className="belownavOnprofile"></div>
      <div className="fullp">
      <div className="user-profile">
        <div className="profile-header">
          <img
            src={user.profileImage}
            alt={`${user.fullName}'s profile`}
            className="profile-image"
          />
          <h1 className="full-name">{user.fullName}</h1>
        </div>
        <div className="profile-details">
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Mobile Number:</strong> {user.mobile}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
          <div className="editdetails">
            <button className="btn"> Edit user details.</button>
          </div>
        </div>
      </div>
      <div className="rightp"><ToggleBox/></div>
      </div>
    </>
  );
};

export default UserProfile;
