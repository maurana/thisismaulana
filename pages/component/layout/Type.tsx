import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Fullstack Software Developer",
          "Artificial Intelligence Engineer",
          "Robotic Engineer",
          "Network Engineer",
          "DevOps Engineer",
          "IT Infrastructure",
          "MERN Stack Developer",
          "MEVN Stack Developer",
          "MEAN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;