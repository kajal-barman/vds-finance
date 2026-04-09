import React, { useState } from 'react'

const Practice = () => {
    const [number, setumber]=useState(0)
    return (
        <div className='p-10'>
            <input type='number' className='border-black' value={number} onChange ={(e)=>setumber(e.target.value)}/>
        </div>
    )
}

export default Practice