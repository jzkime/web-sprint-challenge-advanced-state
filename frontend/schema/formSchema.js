import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    newQuestion: Yup.string().min(1).trim().required(),
    newTrueAnswer: Yup.string().min(1).trim().required(),
    newFalseAnswer: Yup.string().min(1).trim().required()
})

export default formSchema;
