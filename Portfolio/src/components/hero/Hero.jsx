import './Hero.scss'


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
    staggerChildren: 0.5,
  },
},
  };
const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
      <div className="textContainer">
        <h2>Hi, I&apos;m  Saliha  Brik.</h2>
        <h1> I&apos;m a Frontend Developer.</h1>
        <p> I&apos;m a Frontend Developer based in Algeria. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
        <div className='buttons'>
          <button >See the latest projects</button>
          <button >Contact me</button>
        </div>
        <img src="./scroll.png" alt="" />
    </div>
      </div>
      <div className='slidingTextContainer'>
        Designer and BAckend Developer
      </div>
        <div className="imageContainer">
          <img src="./hero.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero
