import React from "react";
import profileImage from '../../assets/profile.png'; 
import { IoMdCloudDownload } from "react-icons/io";


const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start max-w-4xl w-full p-8 mx-auto">
      <div className="flex md:w-3/4 flex-col mt-6">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Virender Prasad
        </h1>
        <div className="relative leading-7 items-center flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
         social-icons
        </div>
        <p className="text-zinc-600 dark:text-zinc-500">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eos quidem, enim consequatur neque est corrupti consectetur totam similique et.
        </p>
        
        <a href="https://docs.google.com/document/d/1-o2po9i3nAuw7KxLV2OBPkPnEGXhFjHlh-wg3UyiFow/export?format=pdf" download className="flex items-center w-32 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <IoMdCloudDownload className="mr-2"/> Resume</a>

        
      </div>
      <div className="relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
        <a
          href="https://x.com/Viren_iz_here"
          target="_blank"
          rel="noopener noreferrer"
          className="block z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 relative bg-white h-20 w-20"
        >
          
          <img
            decoding="async"
            sizes="100vw"
            src={profileImage} 
            className="transition duration-500 blur-0 scale-100 bg-gray-100 object-contain"
            alt="Profile Avatar"
            style={{
              position: "absolute",
              inset: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: "0",
              height: "0",
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: "cover"
            }}
          />
        </a>
        <div className="z-0">
          <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
          <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
            <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
              <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
