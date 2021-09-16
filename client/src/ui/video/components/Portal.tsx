import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Portal.module.scss'
import close from 'assets/images/closeModal.png'
import { VideoType } from '../intarfaces/videoPage/videoPageInterfaces'

type Props = {
  openModal: boolean
  closeModal: () => void
  video: VideoType
}

export const Portal: React.VFC<Props> = ({ openModal, closeModal, video }) => {
  if (!openModal) return null

  return ReactDOM.createPortal(
    <div  className={styles.container}>
      <div className={styles.image}>
        <img onClick={closeModal} src={video.videoUrl} alt={'image'}/>
        <div className={styles.button} >
          <img className={styles.closeBtn} onClick={closeModal} src={close} alt={'close'}/>
        </div>
      </div>
    </div>,
    // @ts-ignore
    document.getElementById('portal-root')
  )
}