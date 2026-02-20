import React from 'react'
import Button from '../UI/Button'

export default function UserCardItem({ item, editable, deletable }) {
    const { name: fullName } = item
    const handleDelete = () => {
        deletable?.(item.id)
    }
    return (
        <div className='card-item'>
            {fullName}
            {
                editable ? <Button click={handleDelete}  text="Delete" /> : null
            }
        </div>
    )
}
