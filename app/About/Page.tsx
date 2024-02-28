import { BackgroundGradientDemo } from '@/components/Details';
import { NavBar } from '@/components/NavBar';
import React from 'react'

const About = () => {
  return (
    <>
      <NavBar />
      <div className='flex justify-center'>
        <div className='max-w-2xl'>
          <h1 className='mt-10 text-5xl'>
            I am Krish kalathiya. I live in <br /> India, where I build the <br /> future.
            <p className='mt-10 text-lg text-stone-600'>
              I am a self-driven, career-oriented software developer specializing in Fullstack development and open-source with a bachelor degree in computer science. My expertise lies in building interactive web applications on the client side. Primarily working with technologies like JavaScript, Next.js, Node.js, and PHP.
            </p>
            <p className='mt-10 text-lg text-stone-600'>
              I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.
            </p>
            <p className='mt-10 text-lg text-stone-600'>
              Beyond learning, I enjoy writing technical articles and creating projects that both inspire and benefit fellow developers.
            </p>
          </h1>
        </div>
        <div>
          <BackgroundGradientDemo />
        </div>
      </div>
    </>
  )
}



export default About;
