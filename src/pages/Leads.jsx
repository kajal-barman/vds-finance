import React, { useState } from 'react'
import axios from 'axios'

const Leads = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        loanType: "",
        amount: "",
        city: "",
        message: ""
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
        if (!formData.fullName || !formData.email || !formData.phone || !formData.loanType || !formData.amount || !formData.city) {
            setErrorMessage("Please fill in all required fields")
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

        // Phone validation (10 digits)
        const phoneRegex = /^[0-9]{10}$/
        if (!phoneRegex.test(formData.phone)) {
            setErrorMessage("Please enter a valid 10-digit phone number")
            setTimeout(() => setErrorMessage(""), 3000)
            return
        }

        // Amount validation (positive number)
        if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
            setErrorMessage("Please enter a valid loan amount")
            setTimeout(() => setErrorMessage(""), 3000)
            return
        }

        setLoading(true)
        setErrorMessage("")
        setSuccessMessage("")

        try {
            // Prepare data according to API requirements
            const leadData = {
                fullName: formData.fullName,
                phone: formData.phone,
                email: formData.email,
                loanType: formData.loanType,
                amount: Number(formData.amount), // Convert to number
                city: formData.city,
                message: formData.message || "" // Optional field
            }

            let response = await axios.post("http://localhost:8080/api/lead/new", leadData)
            
            setSuccessMessage("Lead submitted successfully!")
            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                loanType: "",
                amount: "",
                city: "",
                message: ""
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
            <div className='bg-white shadow-lg border p-8 flex items-center justify-center flex-col gap-5 rounded-lg w-[500px] max-w-[90%]'>
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
                    name="fullName" 
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                />
                
                <input 
                    className='border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500'
                    type="email" 
                    name="email" 
                    placeholder="Email Address *" 
                    value={formData.email}
                    onChange={handleChange}
                />
                
                <input 
                    className='border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500'
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number (10 digits) *"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                />

                <select
                    className='border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500 bg-white'
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                >
                    <option value="">Select Loan Type *</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Car Loan">Car Loan</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Education Loan">Education Loan</option>
                </select>

                <input 
                    className='border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500'
                    type="number" 
                    name="amount" 
                    placeholder="Loan Amount *"
                    value={formData.amount}
                    onChange={handleChange}
                    min="0"
                />

                <input 
                    className='border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500'
                    type="text" 
                    name="city" 
                    placeholder="City *"
                    value={formData.city}
                    onChange={handleChange}
                />

                <textarea 
                    className='border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-blue-500 resize-vertical'
                    name="message" 
                    placeholder="Additional Message (Optional)"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                />

                <button 
                    className='bg-blue-600 text-white w-full p-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-300'
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit Lead"}
                </button>
            </div>
        </div>
    )
}

export default Leads