import axios from 'axios';
import { useState } from 'react';

export default function EditModal({ editItem, onClose, setLoading, setError, setData }) {
    const [newCategory, setNewCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post(`https://696dea0bd7bacd2dd714f614.mockapi.io/api/v1/categories/`, { name: newCategory })
            .then(response => {
                const newItem = response.data
                setData(prev => [...prev, newItem])
                setError('')
                setNewCategory('')
                onClose?.()
            })
            .catch(err => {
                setError('Ошибка при закгузке категории')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="fixed bg-black/80 top-0 left-0 w-screen h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <label htmlFor="category_name">
                    <p>Name</p>
                    <input required value={newCategory} onChange={(e) => setNewCategory(e.target.value)} id="category_name" type="text" name="name" />
                </label>
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}
