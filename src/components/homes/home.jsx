import React from "react";

import './home.css';
import HeroName from "../HeroName/HeroName";
import { Photos } from "./photos";
import Footer from "./footer";

export default function HomePage() {
  return (
    <div>
      <HeroName/>
      <Photos/>
      <Footer />
    </div>
  );
}
