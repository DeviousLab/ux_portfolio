import React from 'react'

const Navigation = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'skills', 'work', 'testimonials', 'contact'].map((item, index) => (
          // eslint-disable-next-line
          <a 
          href={`#${item}`}
          key={item+index} 
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313bac' } : {}}
          />
      ))}
    </div>
  )
}

export default Navigation