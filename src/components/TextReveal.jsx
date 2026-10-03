import { motion, useReducedMotion } from 'framer-motion'

const elements = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  ul: motion.ul,
}

function TextReveal({ as = 'div', delay = 0, children, ...props }) {
  const reduceMotion = useReducedMotion()
  const Element = elements[as]

  return (
    <Element
      {...props}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      // A low threshold also reveals text blocks taller than a phone viewport.
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Element>
  )
}

export default TextReveal
