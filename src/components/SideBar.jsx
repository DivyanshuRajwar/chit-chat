import React from 'react';
import { BiSearch } from 'react-icons/bi';

function SideBar() {
  return (
    <div className="w-[15em] h-screen bg-[#2f3141] rounded-lg p-3">
      {/* Top Section */}
      <div className="w-full flex flex-col items-center">
        <h3 className="text-3xl text-white">Chat</h3>
        <div className="h-[0.1em] w-[98%] mt-1 bg-[#6b5e5e] rounded-full"></div>

        <button className="bg-[#C5C6D0] px-7 py-1 text-[1.5rem] rounded-lg mt-3 hover:bg-[#677081] transition hover:cursor-pointer ">
          + Create New
        </button>

        {/* Search Bar */}
        <div className="mt-2 w-[98%] h-10 bg-white flex items-center px-2 rounded-md  ">
          <BiSearch className="text-gray-600 text-xl" />
          <input
            type="text"
            placeholder="Search Name"
            className="p-2 w-full outline-none"
          />
        </div>
      </div>
      {/* Mid */}
      <div className='w-full min-h-[30rem] bg-amber-100'>

      </div>
      {/* End */}
      <div className='w-full min-h-9 bg-amber-700'>
            {/* <img src={} alt="user image" /> */}
      </div>
    </div>
  );
}

export default SideBar;
