import React from "react";

export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Soft gradient blob 1 */}
      <div 
        className="absolute top-[15%] -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-orange-200/10 blur-[80px] md:blur-[120px] animate-float-slow"
        style={{ animationDuration: "16s" }}
      />
      {/* Soft gradient blob 2 */}
      <div 
        className="absolute top-[50%] -right-20 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-amber-200/10 blur-[100px] md:blur-[150px] animate-float-slow"
        style={{ animationDuration: "20s", animationDelay: "2s" }}
      />
      {/* Soft gradient blob 3 */}
      <div 
        className="absolute top-[80%] left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-orange-100/5 blur-[90px] md:blur-[130px] animate-float-slow"
        style={{ animationDuration: "18s", animationDelay: "1s" }}
      />
      {/* Light dot grid background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(rgba(249,115,22,0.015)_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-80"
      />
    </div>
  );
}
