import React from 'react'
import { Link } from 'react-router'


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
  return (
    <div>Contact

      <ul>
        {
          data.map(el => (
            <li>
              <Link to={`/contact/${el.id}`}>{el.name}</Link>

            </li>
          ))
        }
      </ul>
    </div>
  )
}
