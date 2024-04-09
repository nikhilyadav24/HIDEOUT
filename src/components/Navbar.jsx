import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
    <nav >
  <div class="  bg-white px-8 py-1 shadow-lg ring-1 ring-gray-200">
    <div class="flex items-center justify-between">
      <a class="flex items-center" href="/">
        <img src="https://i.ibb.co/jGMgp7r/seamless-ui.png" class="w-16" alt="Header Logo" />
        <span class="block text-lg font-semibold"><Link to={"/"}>HIDEOUT</Link></span>
      </a>
      <div class="hidden items-center rounded-lg border border-gray-200 px-3 py-2 lg:inline-flex">
      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="h-[18px] pr-4 text-gray-400 dark:hover:text-gray-900">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      <input type="search" placeholder="Search" class="bg-transparent focus:outline-none" />
    </div>
      <div>
        <div class="hidden md:flex">
          {/* <h2 class="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/"}>Home</Link></h2> */}
          <h2 class="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/places"}>Popular Places</Link></h2>
          <h2 class="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/share"}>Share</Link></h2>
          <h2 class="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/shared"}>Shared Places</Link></h2>
          <h2 class="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/about"}>About</Link></h2>
          <h2 class="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/pool"}>Pool</Link></h2>
          <button class="mt-2 h-11 rounded-full bg-primary px-7 font-semibold text-white"><Link to={"/"}>Get Started</Link></button>
          {/* <img src="https://i.ibb.co/2FbV2vm/Ellipse.png" alt="profile picture" class="mr-3 h-10 w-10 rounded-full" /> */}
        </div>
        <button class="rounded-md border border-blue-600 p-3 text-blue-600 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:bg-gray-600 md:hidden">
          <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;
