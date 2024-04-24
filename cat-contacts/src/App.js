import cat1 from "./images/mr-valentine.jpg";
import cat2 from "./images/pumpkin.jpg";
import cat3 from "./images/fluffykins.jpg";
import cat4 from "./images/simba.jpg";
import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact
        img={cat1}
        name="Mr. Valentine"
        phone="(91) 9876-1234"
        email="meowmail@cat.com"
      />
      <Contact
        img={cat2}
        name="Mrs. Pumpkin"
        phone="(91) 9485-7542"
        email="kittenwhiskers@cat.com"
      />
      <Contact
        img={cat3}
        name="Fluffykins"
        phone="(91) 9813-6321"
        email="fluff@me.com"
      />
      <Contact
        img={cat4}
        name="Simba"
        phone="(91) 9751-4785"
        email="thecat@meow.com"
      />
    </div>
  );
}

export default App;
