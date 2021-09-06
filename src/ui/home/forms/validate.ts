import * as Yup from 'yup'

export const validate = Yup.object({
  title: Yup.string()
    .max(15, 'Max length 15 symbols')
    .required('Required'),
  price: Yup.string()
    .max(100, 'Max length 100 symbols')
    .required('Required')
})