import * as Yup from 'yup'

export const validate = Yup.object({
  videoUrl: Yup.string()
    .required('Required'),
})