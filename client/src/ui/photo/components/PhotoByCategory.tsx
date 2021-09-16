import React, { useEffect, useState } from 'react'
import { usePhotoPageHooks } from '../hooks/usePhotoPageHooks'

import styles from './PhotoByCategory.module.scss'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { fetchPhotos } from '../store/action'
import { AddPhotoForm } from './AddPhotoForm'
import firebase from 'firebase/compat'
import { CategoryTranslator } from './CategoryTranslator'
import { DeletePhoto } from './DeletePhoto'
import { Portal } from './Portal'
import { PhotoType } from '../interfaces/photoPage/photoPageInterfaces'
import firebaseApp from '../../../firebase/firebase'


export const PhotoByCategory: React.VFC = () => {
  const dispatch = useDispatch()

  const { title } = useParams<{ title: string }>();

  const [token, setToken] = useState('')

  const fetchToken = async () => {
    await firebaseApp.auth().onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((tokenId) => {
             setToken(tokenId)
          dispatch(fetchPhotos(title, tokenId))
        })
      }
    })
  }

  useEffect(() => {
    fetchToken()
  }, [])

  const { photoData, roles } = usePhotoPageHooks()

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [fotoToModal, setFotoToModal] = useState<PhotoType>({id: '', image: '', path: ''} )

  const photoHandler = (photo: PhotoType) => {
    setFotoToModal(photo)
    setOpenModal(true)
  }

  const isAdmin = roles?.includes('admin', 0)

  const closeModal = () => {
    setOpenModal(false)
  }


  return (
    photoData ?
      <div className={styles.container}>

        <div className={styles.title}>
          <CategoryTranslator title={title}/>
        </div>

        <div className={styles.linksBlock}>
          {photoData.map(photo => (
            <div key={photo.id}>
              {openModal && <div className={styles.portal}>
                <Portal openModal={openModal}
                        closeModal={closeModal}
                        photo={fotoToModal}/>
              </div>}
              <div className={styles.link}>
                {isAdmin && <div className={styles.deletePhotoButton}>
                  <DeletePhoto photo={photo}
                               photoData={photoData}
                               title={title}/>
                </div>}
                <div>
                  <img onClick={() => photoHandler(photo)} src={photo.image}/>
                </div>
                <div>
                  {/*<div className={styles.linkText}>*/}
                  {/*  <Link to={publicRoutes.PhotoPage}>Фотографії</Link>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          ))
          }
        </div>
        {true && <AddPhotoForm title={title}
                       photoData={photoData}/>}
      </div>
      :
      <div className={styles.empty}>
        Фотографії в даному розділі відсутні
        {isAdmin && <AddPhotoForm title={title}
                                          photoData={photoData}/>}
      </div>
  )
}


