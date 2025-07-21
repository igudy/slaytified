import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#72B778] z-[1] flex items-center justify-between py-10 relative overflow-hidden">
      {/* Left Text Content */}
      <div className="flex flex-col pl-10">
        <h2 className="text-white text-7xl font-extrabold font-anton">
          RETRO LOW
        </h2>
        <h2 className="text-black text-7xl font-extrabold font-anton bg-[#E5BE67] px-4 py-3 mt-2 w-max">
          VOODOO
        </h2>
        <p className="text-white mt-4 text-sm font-inter max-w-lg">
          The Nike Dunk Low SE Jackpot GS is a low-cut sneaker with hints of
          grey, white, blue, and red.
        </p>
        <button className="mt-9 font-anton bg-white text-black px-6 py-2 w-max text-5xl hover:bg-black hover:text-white transition">
          SHOP NOW!
        </button>
      </div>

      {/* Right section */}
      <div className="relative w-[600px] h-[380px]">
        {/* Yellow circle background */}
        <div className="absolute bg-[#E5BE67] w-[500px] h-[500px] rounded-full 
        top-1/2 left-[400px] -translate-x-1/2 -translate-y-1/2 z-0" />

        {/* Shoe Image */}
        <Image
          src="/images/shoeBanner.png"
          alt="Nike Retro Low Voodoo"
          width={600}
          height={500}
          className="relative z-10"
        />

        {/* Limited Edition Badge */}
        <div className="absolute top-4 left-4 text-white text-xs font-bold px-4 py-2 rounded-full z-20">
          <Image
            src="/images/limitedEdition.png"
            alt="Nike Retro Low Voodoo"
            width={100}
            height={100}
            className="relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
