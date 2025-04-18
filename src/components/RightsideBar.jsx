import React from 'react';
import profile from "../assets/user.webp";
import pic1 from "../assets/user.webp";
import pic2 from "../assets/user.webp";
import pic3 from "../assets/user.webp";
import pic4 from "../assets/user.webp";

const RightsideBar = () => {
  return (
    <div className="text-white bg-[#2f3141] relative h-screen ">
      {/* Profile Section */}
      <div className="pt-16 text-center max-w-[70%] mx-auto flex flex-col items-center">
        <img src={profile} alt="profile" className="w-[15em] h-[10em] aspect-square rounded-full" />
        <h3 className="text-[20px] font-normal flex items-center justify-center gap-1 mt-2">Gaurav Negi</h3>
        <p className="text-[12px] opacity-80 font-light mt-2">Hello bhai logo</p>
      </div>

      <hr className="border-[#ffffff50] my-5 mx-2" />

      {/* Media Section */}
      <div className="px-5 text-[17px]">
        <p>Media</p>
        <div className="max-h-[280px] overflow-y-auto grid grid-cols-3 gap-2 mt-2 ">
          <img src={pic1} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic3} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic4} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic1} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
          <img src={pic2} alt="" className="mt-3 w-[85px] rounded cursor-pointer" />
        </div>
      </div>

    </div>
  );
};

export default RightsideBar;
