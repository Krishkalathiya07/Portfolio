'use client'

import { NavBar } from "@/components/NavBar"
import { Projects } from "@/components/Projects"
import { SocialMeadia } from "@/components/SocialMeadia"
import { Sub } from "@/components/Sub"
import { SparklesPreview } from "@/components/Welcome"
import { WorkExperince } from "@/components/WorkExperince"

const Home = () => {
    return (
        <>
      <div>
      <NavBar />
      <SparklesPreview />
      <SocialMeadia />
      <Projects />
      <WorkExperince />
      <Sub />
    </div>
        </>
    )
}

export default Home