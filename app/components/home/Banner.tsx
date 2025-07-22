import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#72B778] z-[1] flex flex-col md:flex-row items-center justify-between py-6 md:py-10 relative overflow-hidden px-4 md:px-10">
      {/* Left Text Content - Order changes on mobile */}
      <div className="flex flex-col md:pl-10 order-2 md:order-1 mt-6 md:mt-0">
        <h2 className="text-white text-4xl md:text-7xl font-extrabold font-anton">
          RETRO LOW
        </h2>
        <h2 className="text-black text-4xl md:text-7xl font-extrabold font-anton bg-[#E5BE67] px-3 md:px-4 py-2 md:py-3 mt-1 md:mt-2 w-max">
          VOODOO
        </h2>
        <p className="text-white mt-2 md:mt-4 text-xs md:text-sm font-inter max-w-md">
          The Nike Dunk Low SE Jackpot GS is a low-cut sneaker with hints of
          grey, white, blue, and red.
        </p>
        <button className="mt-4 md:mt-9 font-anton bg-white text-black px-4 md:px-6 py-1 md:py-2 w-max text-2xl md:text-5xl hover:bg-black hover:text-white transition">
          SHOP NOW!
        </button>
      </div>

      {/* Right section - Order changes on mobile */}
      <div className="relative w-full md:w-[600px] h-[250px] md:h-[380px] order-1 md:order-2">
        {/* Yellow circle background */}
        <div
          className="absolute bg-[#E5BE67] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full 
          top-1/2 left-1/2 md:left-[400px] -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 z-0"
        />

        {/* Shoe Image */}
        <div className="relative w-full h-full z-10 flex items-center justify-center">
          <Image
            src="/images/shoeBanner.png"
            alt="Nike Retro Low Voodoo"
            width={600}
            height={500}
            className="object-contain w-auto h-full"
            priority
          />
        </div>

        {/* Limited Edition Badge */}
        <div className="absolute top-2 md:top-4 left-2 md:left-4 text-white text-xs font-bold px-2 md:px-4 py-1 md:py-2 rounded-full z-20">
          <Image
            src="/images/limitedEdition.png"
            alt="Limited Edition"
            width={80}
            height={80}
            className="w-16 md:w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
