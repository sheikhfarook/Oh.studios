import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "../components/homes/home";
import ProfilePick from "../components/profile/profile";
import Con from "../components/contentpage/contact";

export const Router = () => {
  return (
    <div>
    
      <div className="flex justify-center items-center 
      gap-2  mt-[30px] bg-[rgba(232,229,228,0.5)] 
      backdrop-blur-[16px] m-auto w-[301px] rounded-3xl
      text-sm sticky top-5 z-10
      ">
        <Link to="/" className="hover:bg-white 
            rounded-3xl px-6 py-3 my-0.5">Home</Link>
        <Link to="/profile" className="hover:bg-white 
        rounded-3xl  px-6 py-3 mx-2 my-0.5 ">Profile</Link>
        <Link to="/contact" className="hover:bg-white 
        rounded-3xl  px-6 py-3 pr-2 my-0.5">Contact</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePick />} />
        <Route path="/contact" element={<Con />} />
      </Routes>
    </div>
  );
};
