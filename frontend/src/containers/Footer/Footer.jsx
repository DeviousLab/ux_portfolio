import React, { useState } from 'react'


import './Footer.scss'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const contact = {
      _type: 'contact',
      name,
      email,
      message
    }
    client.create(contact)
      .then(() => {
        setFormSubmitted(true)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <>
      <h2 className="head-text">Get a coffee and say hello</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a className='p-text' href="mailto:test@test.com">test@test.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a className='p-text' href="tel:+1(123)456-789">+1(123)456-789</a>
        </div>
      </div>
      {!formSubmitted ?
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className='p-text' placeholder='Your Name' value={name} id='name' name='name' onChange={handleChange} />
          </div>
          <div className="app__flex">
            <input type="email" className='p-text' placeholder='Your Email' value={email} id='email' name='email' onChange={handleChange} />
          </div>
          <div>
            <textarea className='p-text' placeholder='Your Message' value={message} name="message" id="message" cols="30" rows="10" onChange={handleChange}></textarea>
          </div>
          <button className="p-text" type='button' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>
        :
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      }
    </>
  )
}



export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')