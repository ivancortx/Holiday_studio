import axios from 'axios'

const instance = axios.create({
  baseURL: "http://localhost:5000/",
})

export const loadPhotos = (title: string, token: string) => {
  return instance.get(`api/fetch-photo/${title}`, {
    headers: {
      'Token': token
    }
  })
}

export const sendPhoto = (title: string, data: object, token: string) => {
  return instance.post(`api/add-photo`, {
    title,
    data,
    token
  })

}

export const loadVideos = (title: string, token: string) => {
  return instance.get(`api/fetch-video/${title}`, {
    headers: {
      'Token': token
    }
  })
}

export const sendVideo = (title: string, data: object, token: string) => {
  return instance.post(`api/add-video`, {
    title,
    data,
    token
  })

}

export const sendUserData = async (token: string) => {
  return axios.post('http://localhost:5000/api/save-user', {
    token
  })
}

export const loadReviews = () => {
  return instance.get(`api/fetch-reviews`)
}

export const sendReview = (data: object, token: string) => {
  return instance.post(`api/add-review`, {
    data,
    token
  })
}