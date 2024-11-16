import React, { useState } from 'react'
import swal from 'sweetalert';

const FormValidation = () => {

    const formData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const [formValue, setFormValue] = useState(formData)
    const [error, setError] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setError(true)
        if (
            formValue.name !== "" &&
            formValue.email !== "" &&
            formValue.password !== "" &&
            formValue.confirmPassword !== ""
        ) {
            setFormValue(formData)
            setError(false)
            swal({
                title: "Are you sure?",
                text: "Are you sure that you want to leave this page?",
                icon: "warning",
                dangerMode: true,
            })
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form action="">
                <div>
                    <input onChange={(e) => setFormValue({ ...formValue, name: e.target.value })} value={formValue.name} type="text" placeholder='Name' className='border-2 border-solid border-red-600 rounded-md p-2' />
                    <p className='text-red-800'>{error && formValue.name === "" ? "Name is Required" : ""}</p>
                </div>
                <div>
                    <input onChange={(e) => setFormValue({ ...formValue, email: e.target.value })} value={formValue.email} type="email" placeholder='Email' className='border-2 border-solid border-red-600 rounded-md p-2 mt-3' />
                    <p className='text-red-800'>{error && formValue.email === "" ? "Email is Required" : ""}</p>
                </div>
                <div>
                    <input onChange={(e) => setFormValue({ ...formValue, password: e.target.value })} value={formValue.password} type="password" placeholder='Password' className='border-2 border-solid border-red-600 rounded-md p-2 mt-3' />
                    <p className='text-red-800'>{error && formValue.password === "" ? "Password is Required" : ""}</p>
                </div>
                <div>
                    <input onChange={(e) => setFormValue({ ...formValue, confirmPassword: e.target.value })} value={formValue.confirmPassword} type="password" placeholder='Confirm Password' className='border-2 border-solid border-red-600 rounded-md p-2 mt-3' />
                    <p className='text-red-800'>{error && formValue.confirmPassword === "" ? "Confirm Password is Required" : ""}</p>
                </div>
                <select name="" id="">
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                </select>
                <div className='text-center'>
                    <button onClick={(e) => handleClick(e)} className='py-3 px-4 bg-red-800 text-white rounded-md mt-4'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormValidation