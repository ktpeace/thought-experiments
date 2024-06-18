"use client";
import { useState } from "react";
import OptionExtra from "@/components/home/OptionExtra";
import OptionWhat from "@/components/home/OptionWhat";
import Welcome from "@/components/home/Welcome";

const Home = () => {
  const [isWhat, setIsWhat] = useState(false);
  const [isExtra, setIsExtra] = useState(false);

  return (
    <div className="main-container justify-center">
      {/* Welcome - what / extra / to experiments */}
      <Welcome setIsWhat={setIsWhat} setIsExtra={setIsExtra} />

      <section className="w-full text-2xl">
        {/* What's a thought experiment? - yes / no */}
        {isWhat && <OptionWhat isExtraPicked={isExtra} />}

        {/* Anything extra? - to experiments */}
        {isExtra && <OptionExtra isWhatPicked={isWhat} />}
      </section>
    </div>
  );
};

export default Home;
