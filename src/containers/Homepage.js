import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import {AiFillGithub, AiFillLinkedin, AiFillFilePdf} from 'react-icons/ai'
import CyanBlur from '../blurs/Cyanblur'
import RedBlur from '../blurs/RedBlur'
import MovingComponent from 'react-moving-text'

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
    <header className="overflow-x-hidden w-screen">
        <RedBlur/>
        <CyanBlur/>
    <div className={theme === "light" ? "h-screen bg-homepage flex justify-center flex-col items-center gap-6 w-full overflow-x-hidden" : "h-screen bg-homepage-dark flex justify-center flex-col items-center gap-6 w-full overflow-x-hidden"}>
        <div className={theme==="light" ? "leading-tight relative text-[color:var(--black-darkest)] select-none mx-8 homepage-text:mx-0" : "leading-tight relative text-[color:var(--white-lightest)] select-none mx-8 homepage-text:mx-0"}>
            <h4 className="text-sm  font-paragraph top-3 homepage-hi3:left-32 relative left-0 homepage-hi4:left-20 -rotate-2 animate-slightrotate homepage-hi:left-0 homepage-hi2:left-4">Hi! I'm,</h4>
            <div>
                <div className="flex flex-row flex-wrap gap-6 gap-y-0 justify-center">
                    <div className="flex font-heading text-big gap-1 h-[90px]">
                    {Letters.map((letter, index) =>
                        <MovingComponent
                            type="jelly"
                            duration="1000ms"
                            delay="100ms"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="forward">
                            {letter}
                        </MovingComponent>
                    )}
                    </div>
                    <div className="flex font-heading text-big gap-1 h-[90px] px-2">
                    {MidLetters.map((letter, index) =>
                        <MovingComponent
                            type="jelly"
                            duration="1000ms"
                            delay="200ms"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="forward">
                            {letter}
                        </MovingComponent>
                    )}
                    </div>
                    <div className="flex font-heading text-big gap-1 h-[90px] px-2">
                    {LastLetters.map((letter, index) =>
                        <MovingComponent
                            type="jelly"
                            duration="1000ms"
                            delay="300ms"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="forward">
                            {letter}
                        </MovingComponent>
                    )}
                    </div>
                </div>
            </div>
            <p className="text-sm text-center font-paragraph relative -top-6 animate-slidedown">I turn your ideas into a reality by crafting captivating and seamless web applications.</p>
        </div>
        <div className="flex gap-6 py-4 px-4">
            <a href="https://www.github.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--white-lightest)]" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)]"}><AiFillGithub size={36}/></a>
            <a href="https://www.linkedin.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--white-lightest)]" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)]"}><AiFillLinkedin size={36}/></a>
            <a href="https://www.resume.com" className={theme==="light" ? "bg-[color:var(--black-darkest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--white-lightest)]" : "bg-[color:var(--white-lightest)] p-2 rounded-full hover:cursor-pointer hover:scale-105 transition-all text-[color:var(--black-darkest)]"}><AiFillFilePdf size={36}/></a>
        </div>
    </div>
    </header>
  )
}

export default Homepage