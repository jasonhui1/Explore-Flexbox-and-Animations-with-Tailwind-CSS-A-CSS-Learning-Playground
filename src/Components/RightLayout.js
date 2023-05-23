import React from 'react'

export default function RightLayout({ children }) {
    return (
        <div className='flex-1 rounded-3xl overflow-auto  p-3 outline-1 bg-yellow-100 h-screen'>
            {children}
        </div>
    )
}
