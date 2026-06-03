import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROLES = ["Frontend Developer", "Aspiring Software Engineer"];

export function RoleRotator() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block align-baseline min-h-[1.4em] w-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[i]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-block"
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
