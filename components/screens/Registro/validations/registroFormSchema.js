import * as yup from 'yup'

const registroFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
})

export default registroFormSchema
