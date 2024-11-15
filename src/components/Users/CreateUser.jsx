import { Formik } from "formik"
import * as Yup from 'yup'

const CreateUser = () => {

    const ValidationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Este campo es requerido')
            .min(5, 'El username debe tener minimo 5 caracteres')
            .max(50, 'El username no debe ser mayor a 50 caracteres'),
        password: Yup.string()
            .required('Este campo es requerido')
            .min(5, 'La contraseña debe tener minimo 5 caracteres')
            .max(50, 'La contraseña no debe ser mayor a 50 caracteres')
    })

    const RegisterUser = async (values) => {

        const bodyRegisterUser = {
            username: values.username,
            password: values.password
        }

        const response = await fetch('http://127.0.0.1:5000/users', {
            method: 'POST',
            body: JSON.stringify(bodyRegisterUser),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczMTY0MDI1MCwianRpIjoiNzQ1NjczYWUtN2M5Zi00M2U1LThiOGItNmJkMTVhYWY3OWU5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFkbWluIiwibmJmIjoxNzMxNjQwMjUwLCJjc3JmIjoiZTEzMjQ1MmItYjM5ZC00ZTQyLWFhNTQtOWM2ZDRkNjUzZmU3IiwiZXhwIjoxNzMxNjQxNDUwLCJhZG1pbmlzdHJhZG9yIjp0cnVlfQ.vT200asWjHSlsxjkmR9EdlY0RZ0FDAzHEGs-ijom3ho`
            }
        })

        console.log("response", response)
        
    }

    return (
        <Formik
            initialValues={{ password: '', username: '' }}
            validationSchema={ValidationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
                isValid
                /* and other goodies */
            }) => (
                <form>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                    />
                    {errors.username && touched.username && errors.username}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <button onClick={() => RegisterUser(values)} type="button" disabled={values.password === '' || values.username === '' || !isValid}>
                        Crear usuario
                    </button>
                </form>
            )}
        </Formik>

    )

}

export default CreateUser