import React from 'react'

export const TodoCounter = ({ completed, total }) => {
  return (
    <>
      <div className='flex gap-6 justify-center items-center border rounded-lg py-8 px-10'>
        <div className='w-2/3'>
          <p className='text-2xl font-bold text-amber-100'>Todo Completed</p>
          <p className='text text-amber-100 font-light uppercase'>Keep Going!</p>
        </div>

        <div className='w-1/3'>
          <div className='flex items-center justify-center w-32 h-32 rounded-full bg-slate-600'>
            <p className='text-3xl font-bold text-amber-100'>{completed}/{total}</p>
          </div>
        </div>
      </div>
    </>
  )
}
