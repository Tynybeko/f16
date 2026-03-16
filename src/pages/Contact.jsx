import React from 'react'
import { Link } from 'react-router'
import useBear from '../lib/zustand'


export const data = [
  {
    id: 1,
    phone: '+996234141',
    name: '123123'
  },
  {
    id: 2,
    phone: '+asdasd',
    name: '12414'
  },
  {
    id: 3,
    phone: '+996234dsfsdf141',
    name: 'dsfsdf'
  },
]
export default function Contact() {
  const bear = useBear()
  console.log(bear);
  
  return (
    <div>
      {bear.bears}
      <hr />
      <button onClick={() => bear.increasePopulation()}>OPPSDKLAKD</button>
    </div>
  )
}
