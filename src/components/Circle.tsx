"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaClock,
  FaGlobe,
  FaEnvelope,
  FaUser,
  FaHome,
  FaComments,
  FaChartPie,
} from "react-icons/fa";

const AnimatedCircles = () => {
  return (
    <div className="relative flex justify-center items-center md:h-screen h-[60vh] overflow-hidden ]">
      {/* Overlapping Circles */}
      <motion.div
        className="absolute md:w-56 md:h-56 w-28 h-28 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:bg-red-600 transition-colors"
        style={{ left: "38%", top: "50%", opacity: 0.9 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        MISSION
      </motion.div>

      <motion.div
        className="absolute md:w-56 md:h-56 w-28 h-28 bg-green-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:bg-green-500 transition-colors"
        style={{ left: "47%", top: "35%", opacity: 0.9 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        VALUES
      </motion.div>

      <motion.div
        className="absolute md:w-56 md:h-56 w-28 h-28 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:bg-blue-500 transition-colors"
        style={{ left: "56%", top: "50%", opacity: 0.9 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        VISION
      </motion.div>

      {/* Floating Small Circles */}
      {[
        { icon: <FaLightbulb />, color: "bg-blue-300", left: "38%", top: "45%" },
        { icon: <FaClock />, color: "bg-yellow-400", left: "62%", top: "38%" },
        { icon: <FaGlobe />, color: "bg-green-500", left: "35%", top: "63%" },
        { icon: <FaEnvelope />, color: "bg-blue-500", left: "68%", top: "55%" },
        { icon: <FaUser />, color: "bg-pink-500", left: "42%", top: "78%" },
        { icon: <FaHome />, color: "bg-red-400", left: "60%", top: "76%" },
        { icon: <FaComments />, color: "bg-purple-500", left: "52%", top: "75%" },
        { icon: <FaChartPie />, color: "bg-pink-400", left: "50%", top: "25%" },
      ].map((small, index) => (
        <motion.div
          key={index}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 20 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className={`absolute flex items-center justify-center w-14 h-14 ${small.color} rounded-full text-white text-xl shadow-lg cursor-pointer hover:shadow-xl transition-all`}
          style={{ left: small.left, top: small.top }}
        >
          {small.icon}
        </motion.div>
      ))}

                {[
        {  color: "bg-blue-300", left: "45%", top: "45%" },
        {  color: "bg-yellow-400", left: "55%", top: "32%" },
        { color: "bg-green-500", left: "52%", top: "65%" },
        {  color: "bg-blue-500", left: "63%", top: "55%" },
        {  color: "bg-pink-500", left: "70%", top: "70%" },
        {  color: "bg-red-400", left: "68%", top: "80%" },
        {  color: "bg-purple-500", left: "38%", top: "72%" },
        {  color: "bg-pink-400", left: "45%", top: "35%" },
      ].map((small, index) => (
        <motion.div
          key={index}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 20 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className={`absolute flex items-center justify-center w-8 h-8 ${small.color} rounded-full text-white text-xl shadow-lg cursor-pointer hover:shadow-xl transition-all`}
          style={{ left: small.left, top: small.top }}
        >
         </motion.div>
      ))}
    </div>


  );
};

export default AnimatedCircles;



