import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 p-6 flex backdrop-blur">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <h1 className="sora-head">OPT/CI</h1>
              <ul className="hidden lg:flex ml-14 space-x-12">
                <li className="sora-li">Home</li>
                <li className="sora-li">About</li>
                <li className="sora-li">Services</li>
              </ul>
              <button
                className=" absolute rounded-full sora-head p-2 mx-2 nav-button right-0"
                style={{ fontSize: 16 }}
              >
                Analyze now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
