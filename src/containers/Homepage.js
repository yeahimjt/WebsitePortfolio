import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import {AiFillGithub, AiFillLinkedin, AiFillFilePdf} from 'react-icons/ai'
import CyanBlur from '../blurs/Cyanblur'
import RedBlur from '../blurs/RedBlur'
import MovingComponent from 'react-moving-text'
import SkillTease from './SkillTease'

const Homepage = () => {
  const {theme} = useContext(ThemeContext)
  const Letters = [
    "J",
    "o",
    "n",
    "a",
    "t",
    "h",
    "a",
    "n",
  ]
  const MidLetters = [
    "A",
    "n",
    "d",
    "r",
    "e",
    "w"
  ]
  const LastLetters = [
    "T",
    "r",
    "e",
    "v",
    "i",
    "n",
    "o"
  ]
  return (
    <header className=" w-screen z-20 ">

    <div className={theme === "light" ? "h-[90vh] bg-white flex justify-center flex-col items-center gap-6 w-full" : "h-[90vh] bg-[color:var(--black)] flex justify-center flex-col items-center gap-6 w-full "}>
        <div className={theme==="light" ? "leading-tight relative text-[color:var(--black-darkest)] select-none mx-8 homepage-text:mx-0 animate-slideup" : "leading-tight relative text-[color:var(--white-lightest)] select-none mx-8 homepage-text:mx-0 animate-slideup"}>
            <h4 className="text-sm  font-paragraph top-3 homepage-hi3:left-32 relative left-0 homepage-hi4:left-20 -rotate-2 animate-slightrotate homepage-hi:left-0 homepage-hi2:left-4">Hi! I'm,</h4>
            <div>
                <div className={theme==="light"? "flex flex-row flex-wrap gap-6 gap-y-0 justify-center bg-test text-transparent bg-clip-text bg-clip animate-pulse":"flex flex-row flex-wrap gap-6 gap-y-0 justify-center bg-test text-transparent bg-clip-text bg-clip animate-pulse"}>
                    <div className="flex font-heading text-big gap-1 min-h-[90px] justify-center">
                        <h1 className="text-center overflow-y-hidden" data-aos=''>Jonathan Andrew Trevino</h1>
                    </div>
                </div>
            </div>
            <p className="text-sm text-center font-paragraph relative -top-6 animate-slideright animation-delay-1000 opacity-0">I turn your ideas into a reality by crafting captivating and seamless web applications.</p>
        </div>
        <div className="flex gap-6 py-4 px-4">
            <a href="https://www.github.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--white-lightest)]" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)]"}><AiFillGithub size={36}/></a>
            <a href="https://www.linkedin.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--white-lightest)]" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)]"}><AiFillLinkedin size={36}/></a>
            <a href="https://www.resume.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--white-lightest)]" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)]"}><AiFillFilePdf size={36}/></a>
        </div>
    </div>
    <div className="flex justify-center  z-50">
        <SkillTease/>
    </div>
    </header>
  )
}

export default Homepage