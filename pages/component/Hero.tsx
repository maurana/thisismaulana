import React, { useMemo } from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import Type from "./layout/Type";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./layout/ScrollAnimationWrapper";
import TextTransition, { presets } from "react-text-transition";
import TEXTS from "../../utils/name";

const Hero = ({
  listUser = [
    {
      name: "Lang",
      number: "10",
      icon: "/assets/icon/code.svg",
    },
    {
      name: "Framework",
      number: "20",
      icon: "/assets/icon/sparkles.svg",
    },
    {
      name: "Tool",
      number: "50",
      icon: "/assets/icon/server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

  return (
    <div
      className="max-w-screen-xl mt-20 sm:mt-10 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper className="">
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h5 className="text-gray-800 dark:text-white text-1xl lg:text-2xl xl:text-3xl mb-2 sm:mb-4"><TextTransition springConfig={presets.slow}>
        {TEXTS[index % TEXTS.length]} </TextTransition></h5>
              <h2 className="text-1xl lg:text-2xl xl:text-3xl font-medium text-gray-900 dark:text-white leading-normal mb-4 sm:mb-8">
              <strong><Type /></strong>
              </h2>
              <button
                className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-indigo-500 text-indigo-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-indigo-500 hover:text-white transition-all hover:shadow-indigo">
                About Me
                </button>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/sf2.svg"
                  alt="Illustrasi"
                  quality={100}
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-cyan-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;