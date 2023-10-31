
import { motion } from "framer-motion";

const Heading = ({ title, animationControls }) => (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={animationControls}
      transition={{ duration: 0.5 }}
      className="heading"
    >
      <h1>{title}</h1>
      <div className="horizontal-line-2"></div>
    </motion.div>
  );
export default Heading