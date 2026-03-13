import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import { useOutletContext, useSearchParams } from 'react-router'

const LIMIT = 20;
const TOTAL_COUNT = 100;
export default function Home() {
  const context = useOutletContext()
  console.log(context);
  
  const [searchParams, setSearhParams] = useSearchParams({
    _limit: LIMIT,
    _page: 1,
  });
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: searchParams
    });
    const data = await response.data;
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  return (
    <div className='w-full'>
      <ol>

        {data.map((item) => (
          <li className='py-2 pl-2 border' key={item.id}>{item.id}) {item.title}</li>
        ))}
      </ol>
      <div>
        <button onClick={() => {
          const page = searchParams.get("_page");
          if (page > 1) {
            setSearhParams({
              _limit: LIMIT,
              _page: +page - 1
            })
          }
        }}>
          Previous
        </button>
        <button onClick={() => {
          const page = searchParams.get("_page");
          if (page < TOTAL_COUNT / LIMIT) {
            setSearhParams({
              _limit: LIMIT,
              _page: +page + 1
            })
          }
        }}>
          Next
        </button>
      </div>
    </div>
  )
} 
