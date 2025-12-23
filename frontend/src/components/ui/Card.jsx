import { motion } from "framer-motion";

const SPRING = { type: "spring", stiffness: 400, damping: 10 };

export default function Card({ onClick, className = "", children, hoverScale = 1.02 }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: hoverScale }}
      transition={SPRING}
      className={`bg-gray-800 rounded-xl border border-gray-700 cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
}
