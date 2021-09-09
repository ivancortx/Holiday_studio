import React, { useState } from 'react'

import shortid from 'shortid'
import firebaseApp from '../../../firebase/firebase'
import { PhotoType } from '../interfaces/photoPage/photoPageInterfaces'

import styles from './AddPhotoForm.module.scss'
import 'scss/custom.scss'

const db = firebaseApp.firestore()

type Props = {
  title: string
  photoData: PhotoType[]
}

export const AddPhotoForm: React.VFC<Props> = ({title, photoData}) => {
  const [fileUrl, setFileUrl] = useState<string>('')
  const [filePath, setFilePath] = useState<string>('')
  const [isUploaded, setIsUploaded] = useState(false)


  const saveFile = async (e: any) => {
    debugger
    const file = e.target.files[0]
    const storageRef = firebaseApp.storage().ref()
    const pathPhoto = `assets/images/${title}/${file.name}`
    const fileRef = storageRef.child(pathPhoto)
    const metadata = {contentType: 'image/jpeg'}
    await fileRef.put(file, metadata)
    setFileUrl(await fileRef.getDownloadURL())
    setFilePath(pathPhoto)

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
      image: fileUrl,
      path: filePath
    })
    db.collection('photosData').doc(title).set({
       [`${title}`]: photoData
    })

    setIsUploaded(false)
  }

  return (
    <div className={styles.container}>
     <div className={styles.form}>

         <div className={styles.formBlock}>
           <div className="input-group">
             <input onChange={saveFile} type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"/>
             <button disabled={!isUploaded} onClick={onSubmit} className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Завантажити</button>
           </div>
         </div>


     </div>

    </div>
  )
}