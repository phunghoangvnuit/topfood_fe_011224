import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

const UserProfile = () => {
  const handleLogout = () => {};
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center" style={{color: "#000000"}}>
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-2 text-2xl font-semibold">Phung Hoang</h1>
        <p>Email: phunghoangvnuit@gmail.com</p>
        <Button variant="contained" onClick={handleLogout} sx={{ margin: "2rem 0rem", backgroundColor: "#ed1b24"}}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
