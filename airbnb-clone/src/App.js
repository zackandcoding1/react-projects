import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item} // Usando "spread syntax" para passar os dados para o componente
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card">
        {cards}
      </section>
    </div>
  );
}