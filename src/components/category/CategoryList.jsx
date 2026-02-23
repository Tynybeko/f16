import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditModal from '../EditModal';
import ConfirmModal from '../common/ConfirmModal';

export default function CategoryList() {
    const [deleteItem, setDeleteItem] = useState(null);
    const [editItem, setEditItem] = useState(null);

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(`https://696dea0bd7bacd2dd714f614.mockapi.io/api/v1/categories`)
            .then(response => {
                setData(response.data)
                setError('')
            })
            .catch(err => {
                setError('Ошибка при закгузке категории')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const handleDelete = (id) => {
        setLoading(true);
        axios.delete(`https://696dea0bd7bacd2dd714f614.mockapi.io/api/v1/categories/${id}/`)
            .then(response => {
                const deletedItem = response.data
                setData(prev => prev.filter(el => el.id != deletedItem.id))
                setError('')
            })
            .catch(err => {
                setError('Ошибка при закгузке категории')
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const confirmDelete = (result) => {
        if (result) {
            handleDelete(deleteItem)
        }
    }
    return (
        <>
            {deleteItem && <ConfirmModal
                onConfirm={confirmDelete}
                message="Если удалите то не возвожможно восстановить данные!"
                onClose={() => setDeleteItem(null)}
            />}
            {
                editItem && <EditModal
                    setLoading={setLoading}
                    setError={setError}
                    setData={setData}
                    editItem={editItem}
                    onClose={() => setEditItem(null)}
                />
            }
            {
                loading && <div className="fixed bg-black/55 top-0 left-0 w-screen h-screen flex justify-center items-center">
                    <h3 className="text-white">Loading...</h3>
                </div>
            }
            {
                error && <div className="fixed bg-black/55 top-0 left-0 w-screen h-screen flex justify-center items-center">
                    <h3 className="text-red">{error}</h3>
                </div>
            }
            <div className=" overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm bg-gray-200 text-body bg-neutral-secondary-medium border-b border-default-medium">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Category name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Created At
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(el => (
                                <tr className="bg-neutral-primary-soft border-b  border-default">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        {el.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {new Date(el.createdAt).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => setEditItem(el.id)} className="text-blue-400 cursor-pointer hover:text-blue-700 font-medium text-fg-brand hover:underline">Edit</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
