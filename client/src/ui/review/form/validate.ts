import * as Yup from 'yup'

export const validate = Yup.object({
  text: Yup.string()
    .required('Required'),
})