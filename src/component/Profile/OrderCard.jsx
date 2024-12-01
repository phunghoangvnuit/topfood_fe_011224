import { Button, Card } from "@mui/material";
import React from "react";

export const OrderCard = ({item,order}) => {
  return (
    <Card className="flex justify-between items-center p-5" sx={{ backgroundColor: "white" }}>
      <div className="flex items-center space-x-5 text-black">
        <img
          className="h-16 w-16 object-cover"
          src={item.food.images[0]}
          alt=""
        />
        <div>
          <p>{item.food.name}</p>
          <p>{item.totalPrice} VND</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed"> {order.orderStatus} </Button>
      </div>
    </Card>
  );
};
