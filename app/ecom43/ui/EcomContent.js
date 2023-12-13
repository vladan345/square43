"use client";
import { useEffect } from "react";
import { useLoading } from "@/utils/hooks/LoadingContext";
import Hero from "./Hero";
import Why from "./Why";
import Fan from "./Fan";
import Techs from "./Techs";

export default function EcomContent() {
  const { setLoading } = useLoading();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <main>
      <Hero />
      <Why />
      <Fan />
      <Techs />
    </main>
  );
}
