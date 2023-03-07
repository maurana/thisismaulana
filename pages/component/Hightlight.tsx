import React, { useMemo, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../component/layout/ScrollAnimationWrapper";
import GitHubCalendar from 'react-github-calendar';


const briefly = [
    "Out of the box",
    "Open minded",
    "Likes challenges",
    "Kind and not arrogant",
    "Growth mindset",
    "Warrior mentality",
    "Revolusioner",
    "Reliable leader",
    "Humble and friendly",
    "Love peace",
]

const Highlight = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="highlight"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                <Image
                src="/assets/sf.svg"
                alt="Illustrasi"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
                />
            </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="">
            <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-2xl lg:text-3xl font-medium leading-relaxed text-indigo-600 text-start">
             Highlight
            </h3>
            <p className="my-2 text-black-500 text-start">
            Let us briefly introduce myself <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
            </p>
            <ul className="text-black-500 text-start list-inside ml-8">
                {briefly.map((feature, index) => (
                <motion.li
                    className="relative circle-check custom-list mt-2"
                    custom={{duration: 2 + index}}
                    variants={scrollAnimation}
                    key={feature}
                    whileHover={{
                    scale : 1.1,
                    transition: {
                    duration: .2
                    }
                    }}>
                    {feature}
                </motion.li>
                )
                )}
            </ul>
            </motion.div>
            </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper className="">
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-indigo-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Github Activity{" "}
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
            There is no day without making a program code
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="">
            <motion.div className="w-full flex mt-16" variants={scrollAnimation}>
              <div className="w-full h-auto flex item-center justify-center">
              <GitHubCalendar username="maurana" color="#4f46e5" />
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="">
            <motion.div className="w-full flex mt-16" variants={scrollAnimation}>
              <div className="w-full h-auto flex item-center justify-center">
              <p><img src="https://github-readme-stats.vercel.app/api/top-langs?username=maurana&show_icons=true&hide_border=true&locale=en&layout=compact&theme=dark" alt="maurana"/></p>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="">
            <motion.div className="w-full flex mt-16" variants={scrollAnimation}>
              <div className="w-full flex h-auto item-center justify-center">
              <p><img src="https://github-readme-stats.vercel.app/api?username=maurana&hide_border=true&count_private=true&show_icons=true&theme=shades-of-purple" alt="maurana"/> </p>
              <p><img src="https://github-readme-streak-stats.herokuapp.com/?user=maurana&theme=radical&hide_border=true&stroke=0000&ring=d4f46e5&fire=4f46e5&currStreakLabel=dc2626" alt="maurana"/></p>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Highlight;