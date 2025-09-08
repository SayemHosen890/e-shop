import React from 'react'

const ChangeAddress = () => {
  return (
    <div>
        <input type="text" placeholder='Enter New Address' className='border-gray-500 w-full p-2 mb-4'/>
        <div className='flex justify-end'>
            <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2'>Save Address</button>
            <button className='bg-gray-500 text-white py-2 px-4 rounded'>Cancel</button>
        </div>
    </div>
  )
}

export default ChangeAddress