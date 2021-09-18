import React from 'react'

import styles from './Button.module.scss'

type Props = {
  text: string
}

export const Button: React.VFC<Props> = ({text}) => {
  return (
   <div className={styles.container}>
     <div className="buttons">
       <div className={styles.btnContainer}><span className={styles.btn}>{text}</span></div>
     </div>
   </div>
  )
}