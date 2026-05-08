import React, { useState } from 'react'
import axios from 'axios'

const Leads = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        panCard: "",
        dateOfBirth: ""
    })

    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        // Basic validation
        if (!formData.name || !formData.email || !formData.phoneNumber || !formData.panCard || !formData.dateOfBirth) {
            setErrorMessage("Please fill in all fields")
            setTimeout(() => setErrorMessage(""), 3000)
            return
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            setErrorMessage("Please enter a valid email address")
            setTimeout(() => setErrorMessage(""), 3000)
            return
        }

        // Phone validation
        const phoneRegex = /^[0-9]{10}$/
        if (!phoneRegex.test(formData.phoneNumber)) {
            setErrorMessage("Please enter a valid 10-digit phone number")
            setTimeout(() => setErrorMessage(""), 3000)
            return
        }

        // PAN validation (format: ABCDE1234F)
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
        if (!panRegex.test(formData.panCard.toUpperCase())) {
            setErrorMessage("Please enter a valid PAN card number (e.g., ABCDE1234F)")
            setTimeout(() => setErrorMessage(""), 3000)
            return
        }

        setLoading(true)
        setErrorMessage("")
        setSuccessMessage("")

        try {
            let data = await axios.post("http://localhost:8080/api/auth/register", formData)
            setSuccessMessage("Lead submitted successfully!")
            setFormData({
                name: "",
                email: "",
                phoneNumber: "",
                panCard: "",
                dateOfBirth: ""
            })
            setTimeout(() => setSuccessMessage(""), 3000)
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Something went wrong")
            setTimeout(() => setErrorMessage(""), 3000)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex w-full h-screen items-center justify-center bg-gray-100'>
            <div className='bg-white shadow-lg border p-8 flex items-center justify-center flex-col gap-5 rounded-lg w-96'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Lead Registration</h2>
                
                {successMessage && (
                    <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded w-full text-center'>
                        {successMessage}
                    </div>
                )}
                
                {errorMessage && (
                    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded w-full text-center'>
                        {errorMessage}
                    </div>
                )}

                <input 
                    className='border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500'
                    type="text" 
                    name="name" 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                />
                
                <input 
                    className='border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500'
                    type="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleChange}
                />
                
                <input 
                    className='border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500'
                    type="tel" 
                    name="phoneNumber" 
                    placeholder="Enter your phone number (10 digits)"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    maxLength="10"
                />

                <input 
                    className='border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500 uppercase'
                    type="text" 
                    name="panCard" 
                    placeholder="Enter your PAN card (e.g., ABCDE1234F)"
                    value={formData.panCard}
                    onChange={handleChange}
                    maxLength="10"
                />

                <input 
                    className='border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500 uppercase'
                    type="date" 
                    name="dateOfBirth" 
                    placeholder="Date of birth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                />

                <button 
                    className='bg-blue-600 text-white w-full p-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-300'
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </div>
        </div>
    )
}

export default Leads