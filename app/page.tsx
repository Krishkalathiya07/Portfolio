"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoonStarIcon, SunDimIcon } from "lucide-react"
import { SparklesPreview } from "@/components/Welcome"
import { SocialMeadia } from "@/components/SocialMeadia"
import { Projects } from "@/components/Projects"
import { WorkExperince } from "@/components/WorkExperince"
import { Sub } from "@/components/Sub"
import { NavBar } from "@/components/NavBar"

function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div>
      <NavBar />
      <SparklesPreview />
      <SocialMeadia />
      <Projects />
      <WorkExperince />
      <Sub />
    </div>
  )
}

export default ModeToggle