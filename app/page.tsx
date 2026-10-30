import type { JSX } from "react";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { Intro } from "@/components/sections/Intro/Intro";
import { Services } from "@/components/sections/Services/Services";
import { Portfolio } from "@/components/sections/Portfolio/Portfolio";
import { Artist } from "@/components/sections/Artist/Artist";
import { Experience } from "@/components/sections/Experience/Experience";
import { Academy } from "@/components/sections/Academy/Academy";
import { Booking } from "@/components/sections/Booking/Booking";
import { Contact } from "@/components/sections/Contact/Contact";

export default function Home(): JSX.Element {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Intro />
        <Services />
        <Portfolio />
        <Artist />
        <Experience />
        <Academy />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
