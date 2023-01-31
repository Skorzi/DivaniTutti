import React from 'react'
import classes from './MainButton.module.css'

export default function MainButton({children, ...props}) {
  return (
    <button {...props} className={classes.mainButton}>
        {children}
    </button>
  )
}
