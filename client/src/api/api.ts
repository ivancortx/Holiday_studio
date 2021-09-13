import axios from 'axios'

const instance = axios.create({
  baseURL: "http://localhost:5000/"
})

export const loadPhotos = (title: string) => instance.get(`api/fetch-photo/${title}`)

export const sendPhoto = (title: string, data: object) => {
  return instance.post(`api/add-photo`, {
    body: {
      title,
      data
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}

export const sendUserData = async (token: string) => {
  return  axios.post('http://localhost:5000/api/save-user', {
    body: {
     token
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}