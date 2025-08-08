"use client";
import React from "react";

export function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative"
      style={{ 
        backgroundImage: `url('/hero_bg.png')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="text-center px-4 z-10 relative max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
          Welcome to Our Project
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl drop-shadow-lg opacity-90">
          Empowering the future with Next.js
        </p>
      </div>
    </section>
  );
}
