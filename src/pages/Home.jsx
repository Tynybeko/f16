import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../app/slice/counterSlice"
import { useEffect } from "react"
import { fetchUserList } from "../app/slice/userSlice"

export default function Home() {
  const { loading, error, list } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserList())
  }, [])
  console.log(error);
  
  return (
    <div>
      <div>
        {
          loading ? 'Загрузка' : null
        }
        {
          list.length ? JSON.stringify(list) : null
        }
        {
          error ? error : null
        }
      </div>
    </div>
  )
} 
