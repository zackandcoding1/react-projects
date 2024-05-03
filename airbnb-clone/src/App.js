import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        title={item.title}
        price={item.price}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card">
        {cards}
      </div>
    </div>
  );
}