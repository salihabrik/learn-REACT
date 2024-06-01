import './Hero.scss'

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
        <div className="imageContainer">
          <img src="./n.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero
