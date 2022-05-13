import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import './About.scss'
import { urlFor, client } from '../../client'

const About = () => {
  const [talents, setTalents] = useState([])

  useEffect(() => {
    const query = '*[_type == "talents"]'
    client.fetch(query).then(data => {
      setTalents(data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span> <br /> is the key to <span>Success</span>
      </h2>
      <div className="app__profiles">
        {talents.map((talent, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={talent.title + index}
          >
            <img src={urlFor(talent.imgUrl)} alt={talent.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{talent.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{talent.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About