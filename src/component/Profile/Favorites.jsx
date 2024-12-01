import RestaurantCard from 'component/Restaurant/RestaurantCard'
import React from 'react'
import { useSelector } from 'react-redux'

export const Favorites = () => {
  const {auth} = useSelector(store=>store)
  return (
    <div style={{padding: "20px 100px", fontWeight: 500}}>
      <h1 className="py-5 text-xl text-left text-black">Favorites Restaurants</h1>

      <div className="flex flex-wrap gap-3 justify-left">

        {auth.favourites.map((item)=><RestaurantCard item={item}/>)}

      </div>

      <h1 className="py-5 text-xl text-left text-black">Favorites Foods</h1>
    </div>
  )
}
