import './Hero.scss'
import {motion} from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const buttonVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  }
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div 
          className="textContainer" 
          variants={textVariants}
          initial="initial" 
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hi, I&apos;m Saliha Brik.</motion.h2>
          <motion.h1 variants={textVariants}>I&apos;m a Frontend Developer.</motion.h1>
          <motion.p variants={textVariants}>I&apos;m a Frontend Developer based in Algeria. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</motion.p>
          <motion.div className='buttons'>
            <motion.button variants={buttonVariants}>See the latest projects</motion.button>
            <motion.button variants={buttonVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
        </motion.div>
      </div>
      <div className='slidingTextContainer'>
        Designer and Backend Developer
      </div>
      <div className="imageContainer">
        <img src="./hero.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero