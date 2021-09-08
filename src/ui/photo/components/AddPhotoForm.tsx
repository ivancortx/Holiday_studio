import React, { useState } from 'react'

import shortid from 'shortid'
import firebaseApp from '../../../firebase/firebase'
import { PhotoType } from '../interfaces/photoPage/photoPageInterfaces'

import styles from './AddPhotoForm.module.scss'

const db = firebaseApp.firestore()

type Props = {
  title: string
  photoData: PhotoType[]
}

export const AddPhotoForm: React.VFC<Props> = ({title, photoData}) => {
  const [fileUrl, setFileUrl] = useState<string>('')
  const [isUploaded, setIsUploaded] = useState(false)


  const saveFile = async (e: any) => {
    const file = e.target.files[0]
    const storageRef = firebaseApp.storage().ref()
    const fileRef = storageRef.child(`assets/images/${title}/${file.name}`)
    const metadata = {contentType: 'image/jpeg'}
    const uploadTask = await fileRef.put(file, metadata)
    setFileUrl(await fileRef.getDownloadURL())

   if(await fileRef.getDownloadURL()) {
     setIsUploaded(true)
   }


  }
  const onSubmit = (e: any) => {
    e.preventDefault()
    const identifier: string = shortid.generate()
    // const forTest = e.target.forTest.value
    // if (!forTest) {
    //   return
    // }

    photoData.push({
      id: `${identifier}`,
      image: fileUrl
    })
    db.collection('photosData').doc(title).set({
       [`${title}`]: photoData
    })

    setIsUploaded(false)
  }

  return (
    <div className={styles.container}>
     <div className={styles.form}>
       <form onSubmit={onSubmit}>
         <input type='file' onChange={saveFile} />
         {/*<input type='text' name='forTest' placeholder='forTest' />*/}

         <button disabled={!isUploaded}>Завантажити</button>
       </form>
     </div>

    </div>
  )
}