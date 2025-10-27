import { animate, motion } from "framer-motion";

function FadeinBox({ delay, children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default FadeinBox;
