import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from './../component/layout/ScrollAnimationWrapper'
import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
import { FaGitlab } from "react-icons/fa";
import { SiNuget } from "react-icons/si"
import TextTransition, { presets } from "react-text-transition";
import TEXTS from "../../utils/name";
  
export default function Footer() {
  const scrollAnimation = React.useMemo(() => getScrollAnimation(), []);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
      const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
          <ScrollAnimationWrapper className="relative max-w-screen-lg w-full z-10S mx-auto mt-1 mb-16 pb-15">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-cyan-50 dark:bg-zinc-800">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Contact Now for <br /> Get Special Services!
                  </h5>
                  <p>Let us contact with us and find the happy fun.</p>
                </div>
                <button
                className="py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-indigo-500 hover:shadow-indigo-md transition-all outline-none">
                Let us Contact Now
              </button>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative bg-gradient-to-r bg-indigo-900 dark:bg-zinc-900 mt-40 pt-44 pb-10">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
            <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
            <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
              <p className="text-slate-100 mb-4 font-semibold text-lg">Role</p>
              <ul className="text-slate-200 ">
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  Fullstack Software{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  IT Infrastructure{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  AI Engineer{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  Robotic Engineer{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  Network Engineer{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  DevOps Engineer{" "}
                </li>
              </ul>
            </div>
            <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
              <p className="text-slate-100 mb-4 font-semibold text-lg">Interest</p>
              <ul className="text-slate-200">
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  Tech Business{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  Cloud Computing{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  IoT IoB IoNT{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  Scientist{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  Nanotech{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  Blockchain{" "}
                </li>
              </ul>
            </div>
            <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
              <p className="text-indigo-300 mb-4 font-semibold text-lg">MADE WITH</p>
              <ul className="text-slate-200">
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  <a href="https://nodejs.org/en/">
                      <span className="sr-only">Node Js</span>
                      <img
                        className="h-6 w-auto sm:h-8"
                        src="https://nodejs.org/static/images/logo.svg"
                        alt=""
                      />
                    </a>{" "}
                </li>
                <li className="my-2 mt-5 hover:text-cyan-200 cursor-pointer transition-all">
                  <a href="https://nextjs.org/">
                      <span className="sr-only">Next Js</span>
                      <img
                        className="h-3 w-auto sm:h-5"
                        src="/next.svg"
                        alt=""
                      />
                    </a>{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                  <a href="https://reactjs.org/">
                      <span className="sr-only">React Js</span>
                      <img
                        className="h-10 w-auto sm:h-12"
                        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
                        alt=""
                      />
                    </a>{" "}
                </li>
                <li className="my-2 hover:text-cyan-200 cursor-pointer transition-all">
                <a href="https://tailwindcss.com/">
                      <span className="sr-only">Tailwind</span>
                      <img
                        className="h-5 w-auto sm:h-4"
                        src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-dark.svg"
                        alt=""
                      />
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div className="mt-10 sm:mt-0 row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
            <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                className="h-8 w-auto sm:h-10 mb-5"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                alt=""
                />
            </a>
              <div className="mb-4 text-white inline-block">
              ♥ Designed & Developed by <strong className="font-semibold text-white inline-block"><TextTransition springConfig={presets.slow}>
        {TEXTS[index % TEXTS.length]} </TextTransition></strong>
              </div>

              <p className="mb-3">
                <strong className="font-semibold text-indigo-300">FOLLOW ME ON</strong>
              </p>
              <div className="flex w-full mt-2 mb-8 -mx-2">
                <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
                  <a
                    href="https://github.com/maurana/"
                    style={{ color: "black" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </div>
                <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
                <a
                    href="https://www.nuget.org/profiles/thisismaulanaa/"
                    style={{ color: "green" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <SiNuget />
                  </a>
                </div>

                <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
                <a
                    href="https://gitlab.com/thisismaulanaa/"
                    style={{ color: "red" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGitlab />
                  </a>
                </div>
                <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
                <a
                    href="https://www.instagram.com/thisismaulana/"
                    style={{ color: "purple" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram/>
                  </a>
                </div>
              </div>
              <p className="text-cyan-400">©{new Date().getFullYear()} - @thisismaulana</p>
            </div>
          </div>
            </motion.div>
          </ScrollAnimationWrapper>
    </>
  );
};