import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Portal.module.scss'
import { PhotoType } from '../interfaces/photoPage/photoPageInterfaces'
import close from 'assets/images/closeModal.png'

type Props = {
  openModal: boolean
  closeModal: () => void
  photo: PhotoType
}

export const Portal: React.VFC<Props> = ({ openModal, closeModal, photo }) => {
  if (!openModal) return null


  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={photo.image} alt={'image'}/>
        <div className={styles.button} onClick={closeModal}>
          <img className={styles.closeBtn} src={close} alt={'close'}/>
        </div>
      </div>
    </div>,
    // @ts-ignore
    document.getElementById('portal-root')
  )
}