import "./App.css";

function App() {
  return (
    <>
      <div className="bg-white">
        {/* Navbar */}
        <nav className="max-w-[1125px] mx-auto flex items-center justify-between px-6 py-4 uppercase">
          <img className="h-8" src="/brand_logo.png" alt="Logo" />
          <div className="flex items-center space-x-10">
            <a className="text-[14px] tracking-wide text-gray-700 hover:text-black" href="">Menu</a>
            <a className="text-[14px] tracking-wide text-gray-700 hover:text-black" href="">Location</a>
            <a className="text-[14px] tracking-wide text-gray-700 hover:text-black" href="">About</a>
            <a className="text-[14px] tracking-wide text-gray-700 hover:text-black" href="">Contact</a>
          </div>
          <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600">
            Login
          </button>
        </nav>

        {/* Hero */}
        <section className="max-w-[1350px] mx-auto grid grid-cols-2 items-center gap-6 px-9 ml-50 pt-14 pb-20">
          {/* Left */}
          <div className="space-y-6">
            <h1 className="font-poppins font-extrabold text-[108px] leading-[102px] tracking-[-0.01em]">
              YOUR FEET <br /> DESERVE <br /> THE BEST
            </h1>

            <p className="max-w-[460px] text-[12px] leading-[22px] text-gray-700">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES..
            </p>

            <div className="flex gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold">
                Shop Now
              </button>
              <button className="px-6 py-2 rounded-md font-semibold border border-black text-gray-800 hover:bg-gray-100">
                Category
              </button>
            </div>

            <div>
              <p className="mt-6 mb-3 text-gray-500 text-base leading-none">
                Also Available On
              </p>
              <div className="flex items-center gap-4">
                <img className="h-6" src="/flipkart.png" alt="Flipkart" />
                <img className="h-6" src="/amazon.png" alt="Amazon" />
              </div>
            </div>
          </div>

          {/* Right (shoe) */}
          <div className="flex justify-center">
            <img
              src="/shoe_image.png"
              alt="Shoe"
              className="w-[640px] -translate-y-2 translate-x-8 drop-shadow-[0_55px_65px_rgba(0,0,0,0.35)]"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;