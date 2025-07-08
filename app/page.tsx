'use client'

import Image from 'next/image'
import './/page.css';
import Navbar from "../components/navbar";
import ExperienceSection from "../components/experience-section";
import React, { useState } from 'react';
import Landing from '../components/landing';
import Heading from '../components/heading';

export default function Home() {
  return (
    <main className='flex min-w-screen min-h-screen flex-col place-items-center bg-white'>
      <Navbar />
      <Landing />

      <Heading title="Projects" />

      <div className='flex flex-row w-screen pt-24 pl-48 pr-48 pb-24 place-items-center'>
        <div className='flex flex-col gap-24 w-full'>
          <div className='flex flex-row gap-12'>
            <Image src='/images/plate-it-forward.png' alt="plate-it-forward" width={600} height={600}></Image>
            <div className='flex flex-col justify-between p-12 bg-light-blue rounded-2xl flex-1'>
              <div className='flex flex-col gap-4'>
                <p className='flex text-4xl font-bold text-justify text-dark-brown'>
                  Plate It Forward
                </p>
                <p className='flex text-lg text-justify text-dark-brown'>
                A web app that lets people share extra food with others in their community to reduce waste and promote sustainability. It connects users who have surplus food with those who can use it, turning potential waste into a valuable resource.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='flex text-2xl text-justify font-bold text-dark-brown'>
                  Tools
                </p>
                <div className='flex flex-row gap-4'>
                  <button className='flex px-8 py-2 bg-dark-brown text-white text-lg rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit'>
                    Python
                  </button>
                  <button className='flex px-8 py-2 bg-dark-brown text-white text-lg rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit'>
                    PyMongo
                  </button>
                  <button className='flex px-8 py-2 bg-dark-brown text-white text-lg rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit'>
                    React
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-12'>
            <div className='flex flex-col justify-between p-12 bg-pink rounded-2xl flex-1'>
              <div className='flex flex-col gap-4'>
                <p className='flex text-4xl font-bold text-justify text-dark-brown'>
                  Scarpool
                </p>
                <p className='flex text-lg text-justify text-dark-brown'>
                  Scarpool is a ridesharing app designed for UTSC students to reduce commuting costs and environmental impact by connecting peers with similar schedules for shared rides. It simplifies finding carpool partners, helping students save money, cut emissions, and build community.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='flex text-2xl text-justify font-bold text-dark-brown'>
                  Tools
                </p>
                <div className='flex flex-row gap-4'>
                  <button className='flex px-8 py-2 bg-dark-brown text-white text-lg rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit'>
                    React Native
                  </button>
                  <button className='flex px-8 py-2 bg-dark-brown text-white text-lg rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit'>
                    MongoDB
                  </button>
                  <button className='flex px-8 py-2 bg-dark-brown text-white text-lg rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit'>
                    Google Maps API
                  </button>
                </div>
              </div>
            </div>
            <Image src='/images/scarpool.png' alt="scarpool" width={200} height={200}></Image>
          </div>

          <div className='flex flex-row gap-12'>
            <Image src='/images/speech-summarizer.png' alt="speech-summarizer" width={200} height={200}></Image>
            <div className='flex flex-col justify-between p-12 bg-green rounded-2xl flex-1'>
              <div className='flex flex-col gap-4'>
                <p className='flex text-4xl font-bold text-justify text-dark-brown'>
                Speech Summarizer
                </p>
                <p className='flex text-lg text-justify text-dark-brown'>
                An AI-powered app designed to save professionals time by automatically transcribing and summarizing business meetings. Users upload audio or video files, which are processed using Google Cloud&apos;s Speech-to-Text and Cohere&apos;s summarization tools to generate concise meeting minutes, including attendees, key points, and next steps.
                </p>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='flex text-2xl text-justify font-bold text-dark-brown'>
                  Tools
                </p>
                <div className='flex flex-row gap-4'>
                  <button className='flex px-8 py-2 bg-dark-brown text-white text-lg rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit'>
                    Flutter
                  </button>
                  <button className='flex px-8 py-2 bg-dark-brown text-white text-lg rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit'>
                    GCP
                  </button>
                  <button className='flex px-8 py-2 bg-dark-brown text-white text-lg rounded-full hover:bg-opacity-80 transition-all duration-300 w-fit'>
                    Node.js
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Heading title="Experience" />

      <ExperienceSection />

      <div className='flex flex-row w-screen pt-24 pl-48 pr-48 pb-24 place-items-center gap-24'>
        <div className='flex flex-col gap-4 w-full'>
          <p className='flex text-6xl text-justify text-dark-brown'>About Me</p>
          <p className='flex text-lg text-justify text-dark-brown'>
          Hi, my name is Ivy Chen, and I am a third year Computer Science student at UTSC. I am an aspiring software developer who is eager to apply my knowledge and skills to real-world challenges and make a meaningful impact in the tech industry.
          </p>
          <p className='flex text-lg text-justify text-dark-brown'>
          I&apos;m always open to connecting with fellow tech enthusiasts, industry professionals, and like-minded people. Feel free to reach out for networking, collaboration, or simply to discuss anything tech-related!
          </p>
        </div>
        <Image src='/images/profile-2.png' alt="about-me" width={600} height={600}></Image>
      </div>


    </main>
  )
}
