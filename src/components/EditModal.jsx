import axios from 'axios';
import { useState } from 'react';

export default function EditModal({ editItem, onClose, setLoading, setError, setData }) {
    const [newEdited, setEditItem] = useState(editItem);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (!newEdited) return
        setLoading?.(true);
        axios.put(`https://696dea0bd7bacd2dd714f614.mockapi.io/api/v1/categories/${newEdited.id}`, { name: newEdited.name })
            .then(response => {
                const newItem = response.data
                setData?.(prev => prev.map(el => el.id === newEdited.id ? newItem : el))
                setError?.('')
                onClose?.()
            })
            .catch(err => {
                setError?.('Ошибка при закгузке категории')
            })
            .finally(() => {
                setLoading?.(false)
            })
    }

    return (
        <div className="fixed bg-black/80 top-0 left-0 w-screen h-screen flex justify-center items-center">
            <form onSubmit={handleEditSubmit} className="bg-white p-5 rounded-2xl">
                <div>
                    <button className="text-red-500 bg-gray-100 rounded-full p-2 w-10 h-10" type="button" onClick={() => setEditItem(null)}>
                        x
                    </button>
                </div>
                <label htmlFor="">
                    <p className="border-b">Name</p>
                    <input className="py-2 pl-1 border" type="text" onChange={e => {
                        setEditItem(prev => ({
                            ...editItem,
                            name: e.target.value
                        }))
                    }} value={newEdited?.name} />
                </label>
                <button type="submit">EDIT</button>

            </form>
            {editItem.name}
        </div>
    )
}
