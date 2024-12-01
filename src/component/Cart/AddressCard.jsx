import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Card } from "@mui/material";

export const AddressCard = ({ item, showButton, handleSelectAddress }) => {

  return (
    <Card className="flex gap-5 w-64 p-5" sx={{backgroundColor:"white"}}>
      <HomeIcon />
      <div className="space-y-3 text-black">
        <h1 className="font-semibold text-lg">Home</h1>
        <p>
          Detech Building 8th, Ton That Thuyet street , Nam Tu Liem District ,
          Hanoi City, Vietnam
        </p>
        {showButton && (
          <Button variant="outlined" fullWidth onClick={() => handleSelectAddress(item)} sx={{color: "#ed1b24", borderColor: "#ed1b24"}}>Select</Button>
        )}
      </div>
    </Card>
  );
};
