import { useEffect, useState } from "react"
import axios from "axios"
import EditModal from "./components/EditModal"
import ConfirmModal from "./components/common/ConfirmModal"


export default function App() {
  const [editItem, setEditItem] = useState(null)
  const [deleteItem, setDeleteItem] = useState(null);



  const [newCategory, setNewCategory] = useState('')
  const [state, setState] = useState(1)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`https://696dea0bd7bacd2dd714f614.mockapi.io/api/v1/categories/`, { name: newCategory })
      .then(response => {
        const newItem = response.data
        setData(prev => [...prev, newItem])
        setError('')
        setNewCategory('')
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="category_name">
          <p>Name</p>
          <input required value={newCategory} onChange={(e) => setNewCategory(e.target.value)} id="category_name" type="text" name="name" />
        </label>
        <button type="submit">ADD</button>
      </form>


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
      <button onClick={() => setState(prev => prev + 1)}>{state}</button>
      <ul>
        {
          data.map(el => (
            <li className="py-2 pl-5 border hover:bg-red-300 duration-300" key={el.id}>
              {el.name}
              <div className="flex gap-2">
                <button onClick={() => setDeleteItem(el.id)} className="">Delete</button>
                <button onClick={() => setEditItem(el)}>Edit</button>
              </div>

            </li>
          ))
        }
      </ul>
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
    </div>
  )
}
