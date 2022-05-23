import React from 'react'
import { Navigation } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className="app__wrapper app__flex">
        <Component />
      </div>
      <Navigation active={idName} />
    </div>
  )
}

export default AppWrap