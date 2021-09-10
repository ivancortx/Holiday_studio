import React from 'react'
import { useField, ErrorMessage } from 'formik'

type Props = {
  label: string
  type: string
  name: string
}

export const AddPostFormField: React.VFC<Props> = ({label, ...props}) => {
  const [field] = useField(props)
  return (
      <div>
        <div>
          <label htmlFor={field.name}>{label}</label>
          <input {...field} {...props}
                 autoComplete='off'
          />
        </div>
        <div>
          <ErrorMessage name={field.name}/>
        </div>
      </div>
  )
}