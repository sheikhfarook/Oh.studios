// import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import aire from "../images/aire.jpg";
import box from '../images/box.jpg';
import iphone from '../images/iphone.jpg';
import iphone14 from '../images/iphone14.jpg';
import laptop from '../images/laptop.jpg';
import lock from '../images/lock.jpg';
import macbook from '../images/macbook.jpg';
import movies from '../images/movies.jpg';
import phone from '../images/phone.jpg';
import tab from '../images/tab.jpg';
import tabs from '../images/tabs.jpg';
// import logo from '../images/logo.png';

export const Photos = () => {
  const photos = [
    {
      name: aire,
      id: 1,
    },
    {
        name:box,
        id:2,
    },
    {
        name: iphone14,
        id: 3,
      },
      {
          name:iphone,
          id:4,
      },
      {
        name: laptop,
        id: 5,
      },
      {
          name:lock,
          id:6,
      },
      {
        name: macbook,
        id: 7,
      },
      {
          name:movies,
          id:8,
      },
      {
          name: phone,
          id: 9,
        },
        {
            name:tab,
            id:10,
        },
        {
          name: tabs,
          id: 11,
        },
        {
          name:iphone,
          id:12,
      },
       
  ];
  return (
    
    <div className="grid mt-40 grid-cols-2 gap-y-10 
    justify-items-center px-[16.5rem]">
  {photos?.map((pho) => (
    <div key={pho.id}>
      <img src={pho.name} alt="df" className="w-[40rem] hover:transition-colors hover:bg-red-400 hover:ease-in-out		 hover:delay-300		 hover:blur-[6px]  rounded-2xl h-[30rem]" />
    </div>
  ))}
</div>

  );
};
