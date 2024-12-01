import React, { useEffect } from 'react';
import "./Home.css";
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCard from '../Restaurant/RestaurantCard';
import { Auth } from 'component/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurantsAction } from 'component/State/Restaurant/Action';
import { useNavigate } from 'react-router-dom';
import { findCart } from 'component/State/Cart/Action';
import logo from "../../assets/Logo-Foody-w.webp";

const restaurants = [1,1,1,1,1,1,1,1]
const Home = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const {restaurant} = useSelector(store=>store);
  const navigate = useNavigate();

  console.log("restaurant",restaurant);

  useEffect(() => {
    dispatch(getAllRestaurantsAction(jwt))
    
  },[])



  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">

        <div className='w-[50vw] z-10 text-center' style={{display: "flex", flexDirection: "column",justifyContent:"center", alignItems: "center"}}>
          {/* <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>TopFood</p>
          <p className='z-10 text-gray-300 text-xl lg:text-4xl'>i'm lovin'it. </p> */}
          <img src={logo} alt="logo" style={{width: "300px"}}/>
          <h1 style={{fontSize: "28px", marginTop: "-15px", fontFamily: "Ubuntu"}}>Món gì cũng có, Foody ngay!</h1>

        </div>
        <div className='cover absolute top-0 left-0 right-0'>


        </div>
        <div className='fadout'>

        </div>

      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-black py-3 pb-10" style={{fontWeight: 300}}>What for today?</p>
        <MultiItemCarousel/>
      </section>
      <section className="px-5 lg:px-20 pt-10">
        <h1 className="text-2xl font-semibold text-black pb-8" style={{fontWeight: 300}}>Checkout our partner</h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {
            restaurant.restaurants.map((item) => <RestaurantCard item={item}/>)
          }
        </div>
      </section>
    </div>
  )
}

export default Home