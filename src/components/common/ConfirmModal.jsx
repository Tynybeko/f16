import React from 'react'

export default function ConfirmModal({
    title = "Подтвердите дейсвтие!",
    message = 'Bla bla bla bla',
    onClose = () => null,
    onConfirm = () => null,
}) {

    const handleClick = (result) => {
        onConfirm(result)
        onClose()
    }
    return (
        <div className="fixed bg-black/80 top-0 left-0 w-screen h-screen flex justify-center items-center">
            <div className="bg-white p-5 rounded-2xl">
                <h3 className='text-2xl'>{title}</h3>
                <hr />
                <p className='text-gray-400 text-xl py-4'>
                    {message}
                </p>
                <div className='flex gap-2'>
                    <button onClick={() => handleClick(true)} className='cursor-pointer text-white py-3 px-5 bg-green-400 hover:bg-green-700 border rounded-lg'>Ok</button>
                    <button onClick={() => handleClick(false)} className='cursor-pointer hover:bg-gray-500 hover:text-white text-black py-3 px-5 border rounded-lg'>Cancel</button>
                </div>
            </div>
        </div>
    )
}
