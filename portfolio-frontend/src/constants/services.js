import React from "react"
import { FaCode, FaSketch } from "react-icons/fa"
import { GiSlicedBread } from "react-icons/gi";

export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Jag är alltid intresserad av att lära mig mer om Webbutveckling och styling!`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Back-End",
    text: `Är även intresserad av att lära mig Backend inom språken Javascript och C#.`,
  },
  {
    id: 3,
    icon: <GiSlicedBread className="service-icon" />,
    title: "Matlagning",
    text: `Utöver detta så älskar jag matlagning och bakning, har du tips på surdegsbröd är det bara att hojta till! .`,
  },
]
