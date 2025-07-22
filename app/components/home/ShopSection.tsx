import Image from "next/image";
import React from "react";

const products = [
  {
    name: "Air Jordan 1 Retro Low Voodoo",
    category: "Men's shoes",
    price: "₦379,99",
    image: "/images/shoe1.png",
  },
  {
    name: "Dunk Low Active Fuchsia",
    category: "Women's shoes",
    price: "₦169,99",
    image: "/images/shoe2.png",
  },
  {
    name: "Dunk Low Black White",
    category: "Unisex shoes",
    price: "₦144,99",
    image: "/images/shoe3.png",
  },
  {
    name: "Package Lightweight Jacket",
    category: "Unisex jacket",
    price: "₦104,99",
    image: "/images/shoe4.png",
  },
];

const collections = [
  {
    title: "WOMENS",
    image: "/images/women.png",
  },
  {
    title: "MENS",
    image: "/images/men.png",
  },
  {
    title: "KIDS",
    image: "/images/kids.png",
  },
];

const newCollections = [
  {
    title: "NIKE X SPACE JAM: A NEW LEGACY",
    description:
      "To celebrate the release of Space Jam: A New Legacy, Nike and Converse have joined forces to create an apparel and footwear collection worthy of Bugs Bunny and LeBron.",
    image: "/images/collection1.png",
  },
  {
    title: "NIKE BLACK HISTORY MONTH",
    description:
      "Nike is celebrating Black History Month with a new collection highlighted by customizable Air Force 1 sneakers.",
    image: "/images/collection2.png",
  },
];

const sports = [
  {
    title: "FOOTBALL",
    items: 1904,
    image: "/images/sport1.png",
  },
  {
    title: "BASKETBALL",
    items: 1106,
    image: "/images/sport2.png",
  },
  {
    title: "TENNIS",
    items: 1629,
    image: "/images/sport3.png",
  },
];

const ShopSection = () => {
  return (
    <>
      {/* New Arrivals */}
      <div className="px-4 md:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="font-anton text-3xl">NEW ARRIVALS</div>
          <a href="#" className="underline text-sm font-medium">
            See all items
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div key={index} className="bg-white shadow rounded-md p-2">
              <div className="w-full aspect-[1/1] overflow-hidden rounded-md relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <div className="mt-3 font-medium text-sm">{item.name}</div>
              <div className="text-xs text-gray-500">{item.category}</div>
              <div className="mt-1 font-semibold">{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop by collection */}
      <div className="px-4 md:px-8 py-12">
        {/* Section Title */}
        <h2 className="font-anton text-3xl mb-6">SHOP BY COLLECTION</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {collections.map((col, index) => (
            <div
              key={index}
              className="relative w-full h-[400px] group overflow-hidden"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 font-anton text-black font-bold text-xl">
                {col.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our new collection */}
      <div className="px-4 md:px-8 py-12">
        {/* Section Title */}
        <h2 className="font-anton text-3xl mb-6">OUR NEW COLLECTION</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newCollections.map((item, index) => (
            <div key={index}>
              <div className="w-full h-[400px] relative rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-bold font-anton text-lg">
                {item.title}
              </h3>
              <p className="text-sm mt-1 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shop by sport*/}
      <div className="px-4 md:px-8 py-12">
        {/* Section Title + Arrows */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-anton text-3xl">SHOP BY SPORT</h2>
          <div className="hidden md:flex gap-3">
            {/* Arrow buttons (non-functional here) */}
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              &#x2039;
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              &#x203A;
            </button>
          </div>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sports.map((sport, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-[350px] overflow-hidden rounded-md">
                <Image
                  src={sport.image}
                  alt={sport.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-bold font-anton text-lg">
                {sport.title}
              </h3>
              <p className="text-sm text-gray-700">{sport.items} items</p>
            </div>
          ))}
        </div>
      </div>

      {/* Manager */}
      <div className="bg-[#F5F5DC] text-black">
        {/* Top Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-12 py-12">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 font-anton">
              IT STARTED WITH A HANDSHAKE
            </h2>
            <p className="text-sm leading-relaxed text-gray-800">
              It started with a handshake. Two visionaries, Bill Bowerman and
              his University of Oregon runner Phil Knight, thought they could do
              a better job of designing and selling shoes to runners. They were
              right. Today Nike is the world’s leading innovator in athletic
              footwear, apparel, equipment and accessories. Along the way, Nike
              helped the world’s best athletes win races, games and
              championships.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 font-anton">
              WE LEAD WITH INNOVATIVE PRODUCT
            </h2>
            <p className="text-sm leading-relaxed text-gray-800">
              True innovation isn’t just new and different. It’s new and better.
              It’s surprising. Sometimes it’s shocking. Nobody does that better
              than Nike. Yet we know you can’t anoint yourself as innovative—the
              consumer ultimately decides that for themselves. That’s why we
              spend so much time with athletes and consumers—listening,
              observing, studying and then creating products that enhance
              athletic performance and overall consumer experiences.
            </p>
          </div>
        </div>

        {/* Join Club Banner */}
        <div className="w-full bg-[#E5BE67]  flex justify-center">
          <div className="text-black text-center py-6 px-4 flex items-center gap-4 max-w-4xl mx-auto rounded-md">
            <p className="text-lg md:text-xl font-anton font-extrabold uppercase tracking-wide">
              Join our Nike Club and get 15% off
            </p>
            <button className="bg-white text-black font-anton font-bold px-6 py-2 rounded-md shadow hover:bg-gray-200 transition">
              SIGN FOR FREE!
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="bg-[#F5F5DC] py-10 px-4 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-800">
          {/* Shoes */}
          <div>
            <h3 className="font-bold mb-3 uppercase">Shoes</h3>
            <ul className="space-y-1">
              <li>Golf Shoes</li>
              <li>Winter Trainers</li>
              <li>Gore Tex Trainers</li>
              <li>Walking Trainers</li>
            </ul>
          </div>

          {/* Clothing */}
          <div>
            <h3 className="font-bold mb-3 uppercase">Clothing</h3>
            <ul className="space-y-1">
              <li>All Clothing</li>
              <li>Yoga Trousers</li>
              <li>Tech Fleece Joggers</li>
              <li>Tech Fleece Pants</li>
            </ul>
          </div>

          {/* Kids */}
          <div>
            <h3 className="font-bold mb-3 uppercase">Kids</h3>
            <ul className="space-y-1">
              <li>Kids Sliders</li>
              <li>Kids Tracksuit Sale</li>
              <li>Kids Puffer Jacket</li>
            </ul>
          </div>

          {/* Featured */}
          <div>
            <h3 className="font-bold mb-3 uppercase">Featured</h3>
            <ul className="space-y-1">
              <li>Football Club Teams</li>
              <li>Football</li>
              <li>Nike Run Club</li>
              <li>Nike Training Club</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
