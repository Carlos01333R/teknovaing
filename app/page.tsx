'use client'
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import SectionDesarrollo from "@/components/sectionDesarrollo";
import SectionRedes from "@/components/sectionRedes";

export default function Home() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <main className={`transition-all duration-500 ${isScroll ? "bg-[#FAF8F0]" : "bg-white"} h-[3000px] max-w-380 mx-auto`}>
      <Header />
      <Hero />
      <SectionDesarrollo />
      <SectionRedes />
    </main>
  );
}
