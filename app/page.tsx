'use client'

import Image from 'next/image'
import './/page.css';
import Navbar from "../components/navbar";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isHovering, setIsHovered] = React.useState(0);
  return (
    <main className='flex min-w-screen min-h-screen flex-col place-items-center bg-[#abb6a0]'>
      <Navbar />
      <div className='flex container w-screen h-10'></div>

      <div className='flex flex-row w-screen h-96 place-items-center justify-center'>
        <div className='flex flex-col'>
          <p className='flex text-3xl text-justify text-[#414942]'>
            hello my name is
          </p>
          <p className='flex text-9xl pt-8 text-justify text-[#414942]'>
            Ivy Chen
          </p>
        </div>
        <div className='flex w-20 h-20'></div>
        <Image src='/greenbg.jpg' alt='bg' width={300} height={50}></Image>
      </div>

      <div className='flex container w-screen h-10'></div>

      <div className='flex flex-row place-items-center gap-4'>
        <Link href="/about-me">
          <div className='box-content h-64 w-64 p-4 border-4 bg-white' onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(0)}>
            {isHovering === 1 ? (
              <div className='flex h-full w-full place-items-center justify-center'>
                <Image src='/about.jpg' alt="about" width={256} height={256}  className='opacity-30 absolute'></Image>
                <p className='text-3xl opacity-100 text-[#414942]'>About Me</p>
              </div>
            ) : (
              <Image src='/about.jpg' alt="about" width={500} height={500}></Image>
            )}
          </div>
        </Link>

        <Link href="/projects">
          <div className='box-content h-64 w-64 p-4 border-4 bg-white' onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(0)}>
            {isHovering === 2 ? (
              <div className='flex h-full w-full place-items-center justify-center'>
                <Image src='/projects.jpg' alt="projects" width={256} height={256}  className='opacity-30 absolute'></Image>
                <p className='text-3xl opacity-100 text-[#414942]'>My Projects</p>
              </div>
            ) : (
              <Image src='/projects.jpg' alt="projects" width={500} height={500}></Image>
            )}
          </div>
        </Link>
        
        <Link href="/experience">
          <div className='box-content h-64 w-64 p-4 border-4 bg-white' onMouseEnter={() => setIsHovered(3)}
          onMouseLeave={() => setIsHovered(0)}>
            {isHovering === 3 ? (
              <div className='flex h-full w-full place-items-center justify-center'>
                <Image src='/experience.jpg' alt="experience" width={256} height={256}  className='opacity-30 absolute'></Image>
                <p className='text-3xl opacity-100 text-[#414942]'>My Experience</p>
              </div>
            ) : (
              <Image src='/experience.jpg' alt="experience" width={500} height={500}></Image>
            )}
          </div>
        </Link>
        
        <Link href="/designs">
          <div className='box-content h-64 w-64 p-4 border-4 bg-white' onMouseEnter={() => setIsHovered(4)}
          onMouseLeave={() => setIsHovered(0)}>
            {isHovering === 4 ? (
              <div className='flex h-full w-full place-items-center justify-center'>
                <Image src='/designs.jpg' alt="designs" width={256} height={256}  className='opacity-30 absolute'></Image>
                <p className='text-3xl opacity-100 text-[#414942]'>My Designs</p>
              </div>
            ) : (
              <Image src='/designs.jpg' alt="designs" width={500} height={500}></Image>
            )}
          </div>
        </Link>
      </div>
    </main>
    // <main className="flex max-w-screen min-h-screen flex-col place-items-center bg-gradient-to-tr from-[#FBC6A4] via-[#F4A9A8] to-[#CE97B0] overflow-hidden">
    //   <div className='flex flex-col container w-screen h-60 items-center justify-center'>
    //     <p className='flex text-3xl text-center text-[#ffffff]'>
    //       Hello! My name is
    //     </p>
    //     <p className='flex text-3xl text-center text-[#ffffff]'>
    //       Ivy Chen
    //     </p>
    //     <Image src='/night.jpg' alt="bg" width={100} height={100}></Image>
    //   </div>
    //   <div className="flex grid grid-cols-3 pt-8 h-screen w-screen overflow-hidden">
    //     <div className='flex w-screen h-4/6 bg-fixed' style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/colorful-drawing-beautiful-clouds-with-dreamscapes-patterns-tiled_921026-14558.jpg?w=360")`}}></div>
    //     <div className='flex w-screen h-4/6 bg-fixed' style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/wallpaper-design-with-blue-pink-clouds-dreamlike-style-tiled_921026-4183.jpg")`}}></div>
    //     <div className='flex w-screen h-4/6 bg-fixed' style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/painting-clouds-sky-with-words-name_662214-28799.jpg")`}}></div>
    //   </div>
    //   <div className='flex h-24 w-1/2 p-72 m-40 bg-cover bg-fixed ' style={{ backgroundImage: `url("https://wallpapers.com/images/featured/minimalist-7xpryajznty61ra3.jpg")` }}>

    //   </div>
    //   <div className='flex min-w-screen min-h-screen p-36 overscroll-none'>
    //     <div className='flex h-1/6 w-1/2 p-4 text-[#468189] text-3xl text-left hover:animate-spin'>
    //       hello my name is
    //     </div>
    //     <div className='flex h-1/6 w-1/2 p-4 text-[#E78F8E] text-6xl text-left'>
    //       Ivy Chen
    //     </div>
    //   </div>
    //   <div className="flex h-72 w-1/3 p-4 bg-cover bg-fixed rounded-full" style={{ backgroundImage: `url("https://wallpapers.com/images/featured/minimalist-7xpryajznty61ra3.jpg")` }}>
    //   </div>
    //   <div className="flex h-72 w-screen p-4 bg-cover bg-fixed" style={{ backgroundImage: `url("https://wallpapers.com/images/hd/minimalist-purple-sky-and-mountain-ex4suuw5xd4funov.webp")` }}>
    //   </div>
    // </main>
  )
}
