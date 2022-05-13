import React from 'react'
import { motion } from 'framer-motion'

import './Header.scss'
import { images } from '../../constants'

const scaleVariance = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app_flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello! I am</p>
              <h1 className="head-text">Micael</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">UI/UX Designer</p>
            <p className="p-text">Digital Artist</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='overlay-circle'
          src={images.circle}
          alt='circle'
        />
      </motion.div>
      <motion.div
      variants={scaleVariance}
      whileInView={scaleVariance.whileInView}
      className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((img, index) => (
          <div className="circle-cmp app__flex">
            <img src={img} alt="circles" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}


export default Header