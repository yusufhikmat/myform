import React from 'react'
import './Form.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'
const Form = () => {
    const initialValues={
        name:"",
        email:"",
        password:""
    }
    const onSubmit = values =>{
        console.log('form Data', values)
    }
    const validate=values=>{
        //check values and errors
        let errors={}
        if(!values.name){
            errors.name='required'
        }
        if(!values.email){
            errors.email='required'
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
        if(!values.password){
            errors.password='required'
        }
        return errors
    }

    const validationSchema = Yup.object({
        name:Yup.string().required('Required!'),
        email:Yup.string().email('Invalid email format').required('Required!'),
        password:Yup.string().required('Required!')
    })
    const formik = useFormik({
        initialValues,
        onSubmit:onSubmit,
        validationSchema
        //validate,
    })
    console.log('visited field',formik.touched)
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
    <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
         />
         {formik.touched.name && formik.errors.name? <div className='error'>{formik.errors.name}</div> : null}
         </div>
         <div className='form-control'>
         <label htmlFor='email'>Email</label>
        <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
         />
         </div>
         {formik.touched.email && formik.errors.email? <div className='error'>{formik.errors.email}</div> : null}
         <div className='form-control'>
         <label htmlFor='password'>Password</label>
        <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
         />
         {formik.touched.password && formik.errors.password? <div className='error'>{formik.errors.password}</div> : null}
         </div>
         <button type="submit">submit</button>
    </form>
    </div>
  )
}

export default Form