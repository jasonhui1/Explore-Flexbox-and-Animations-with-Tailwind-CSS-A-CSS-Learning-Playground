import React from 'react'

export default function LeftLayout({ children }) {
    return (
        <div className=' flex-1 flex-shrink-0 overflow-auto top-rounded-3xl p-3 h- outline-1 bg-blue-100 h-screen sticky top-0  '>
            <div className='flex flex-col gap-8 mt-6'>
                {children}
            </div>
        </div>
    )
}
