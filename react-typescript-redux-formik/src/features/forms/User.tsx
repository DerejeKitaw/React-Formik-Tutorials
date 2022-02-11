import { Button, TextField } from '@material-ui/core'
import { Formik, Field } from 'formik'
import React from 'react'

const User: React.FC = () => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: '', lastName : '' }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true)

          console.log(data)
          setSubmitting(false)
          resetForm()
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name='firstName' placeholder="First Name" type='input' as={TextField} /><br/>
            <Field name='lastName' placeholder="Last Name" type='input' as={TextField} /><br/>
            {/* <TextField
              name='firstName'
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            /> */}

            <Button type='submit'>Submit</Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default User
