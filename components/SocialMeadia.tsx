import { Facebook, Github, Instagram, Link, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

export const SocialMeadia = () => {
  return (
    <div className='flex justify-center'>
        <a href="https://github.com" target="_blank"  className='m-3 hover:text-gray-300'> <Github size="40px" /></a>
        <a href="https://linkedin.com" target="_blank"  className='m-3 hover:text-blue-300'><Linkedin size="40px" /></a>
        <a href="https://facebook.com" target="_blank"  className='m-3 hover:text-blue-300'><Facebook size="40px" /></a>
        <a href="https://twitter.com" target="_blank"  className='m-3 hover:text-blue-300'><Twitter size="40px" /></a>
        <a href="https://instagram.com"  className='m-3 hover:text-pink-300'><Instagram size="40px" /></a>
    </div>
  )
}
