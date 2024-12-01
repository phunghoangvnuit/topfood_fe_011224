import { Avatar, Badge, Box, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/Logo-Foody.webp";

export const Navbar = () => {
  const { auth,cart } = useSelector(store => store);
  const navigate = useNavigate();

  const handleAvatarClick=() => {
    if(auth.user?.role === "ROLE_CUSTOMER"){
      navigate("/my-profile")
    }
    else {
      navigate("/admin/restaurants")
    }
  }
  return (
    <Box className="navbar px-5 sticky top-0 z-50 py-[.2rem] bg-[#FFFFFF] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li onClick={()=>navigate("/")} className="logo font-semibold text-white text-2xl">
          <img src={logo} alt="logo" style={{width: "120px"}}/>
        </li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem", color: "#ed1b24" }} />
          </IconButton>
        </div>
        <div className="">
          {auth.user ? (
            <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "#ed1b24", color: "#FFFFFF" }}>
              {auth.user?.fullName[0].toUpperCase()}
            </Avatar>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <Person />
            </IconButton>
          )}
        </div>

        <div className="">
          <IconButton onClick={()=>navigate("/cart")}>
            <Badge sx={{ "& .MuiBadge-badge": { backgroundColor: "#000", color: "white" } }} badgeContent={cart.cart?.items.length}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "#ed1b24" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};
