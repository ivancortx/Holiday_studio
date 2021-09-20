import React from 'react'
import ReactDOM from 'react-dom'

import { PhotoType } from '../../interfaces/photoPage/photoPageInterfaces'
import close from 'assets/images/closeModal.png'

import styles from './Portal.module.scss'

type Props = {
  openModal: boolean
  closeModal: () => void
  photo: PhotoType
}

export const Portal: React.VFC<Props> = ({ openModal, closeModal, photo }) => {
  if (!openModal) return null

  return ReactDOM.createPortal(
    <div  className={styles.container}>
      <div className={styles.image}>
        <img onClick={closeModal} src={photo.image} alt={'img'}/>
        <div className={styles.button} >
          <img className={styles.closeBtn} onClick={closeModal} src={close} alt={'close'}/>
        </div>
      </div>
    </div>,
    // @ts-ignore
    document.getElementById('portal-root')
  )
}