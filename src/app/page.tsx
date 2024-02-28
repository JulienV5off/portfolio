"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { projects } from "../constants/index";
import Works from "./components/Works";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

type Props = {};
const Page = () => {
  return (
    <div style={{ fontFamily: "Coastgane, sans-serif" }}>
      {/* https://bg.ibelick.com */}
      <div className="absolute inset-0 -z-10 h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* https://www.shapefest.com */}
      <div className="absolute top-4 left-0 w-96 h-96 md:block hidden opacity-50 animate-float">
        <Image src={"/img/atom_hexa.png"} width={600} height={600} alt="atom" />
      </div>
      <div className="absolute top-10 right-20 w-44 h-44 opacity-50 animate-floatReverse">
        <Image
          src={"/img/block_cage.png"}
          width={600}
          height={600}
          alt="block-cage"
        />
      </div>
      <div className="absolute bottom-0 md:left-1/2 left-20 w-96 h-96 opacity-50 animate-floatReverse2">
        <Image
          src={"/img/atom_tetra.png"}
          width={600}
          height={600}
          alt="tetra"
        />
      </div>
      <Navbar />

      <Home />
      <Works />
    </div>
  );
};

export default Page;
