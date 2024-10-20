import React from 'react'

export const TodoList = ({ children }) => {
    return (
        <>
            <ul className='space-y-6'>
                {children}
            </ul>
        </>
    )
}
