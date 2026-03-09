import axios from 'axios'
import React, { useState } from 'react'
const API_URL = `https://tynybekfood.pythonanywhere.com/api/v1/orders/`

const SERVICE_STATUS = [
  'delivery',
  'pickup'
]

const REQUIRED_FIELDS = [
  'name', 'email', 'phone', 'address', 'home'
]

export default function Home() {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    "name": "",
    "email": "",
    "phone": "",
    "address": "",
    "home": "",
    "comment": "",
    service_status: "delivery"
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
    if (name == 'service_status') {
      setData(prev => ({ ...prev, 'service_status': value }))
      setErrors(prev => ({ ...prev, 'status': '' }))
    } else {
      setData(prev => ({ ...prev, [name]: value }))
      setErrors(prev => ({ ...prev, [name]: '' }))

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const error = {}
      REQUIRED_FIELDS.forEach(fieldKey => {
        if (!data[fieldKey].trim()) {
          error[fieldKey] = 'Обьязательное поле!'
        }
      })
      if (Object.values(error).some(Boolean)) return setErrors(error);
      const response = await axios.post(API_URL, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response.data);

    } catch (e) {
      console.error('POST ERROR', e);
      if (e?.response?.status === 400) {
        const errorData = e.response.data
        setErrors(errorData)
      } else if (e?.response?.status >= 500) {
        setErrors({
          server: 'Ошибка при отправки заказа! Попробуйте по позже!'
        })
      } else {
        setErrors({
          server: 'Ошибка при отправки заказа! Попробуйте по позже!'
        })
      }

    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className={`field ${errors['name'] ? 'error-text' : ''}`}>
          <p>Name</p>
          <input className='border' value={data.name} name='name' onChange={handleChange} type="text" />
          <p className='error-text'>{errors['name']}</p>
        </label>
        <label className={`field ${errors['email'] ? 'error-text' : ''}`}>
          <p>Email</p>
          <input className='border' value={data.email} name='email' onChange={handleChange} type="text" />
          <p className='error-text'>{errors['email']}</p>
        </label>
        <label className={`field ${errors['phone'] ? 'error-text' : ''}`}>
          <p>Phone</p>
          <input className='border' value={data.phone} name='phone' onChange={handleChange} type="tel" />
          <p className='error-text'>{errors['phone']}</p>
        </label>
        <label className={`field ${errors['address'] ? 'error-text' : ''}`}>
          <p>Address</p>
          <input className='border' value={data.address} name='address' onChange={handleChange} type="text" />
          <p className='error-text'>{errors['address']}</p>
        </label>
        <label className={`field ${errors['home'] ? 'error-text' : ''}`}>
          <p>Home</p>
          <input className='border' value={data.home} name='home' onChange={handleChange} type="text" />
          <p className='error-text'>{errors['home']}</p>
        </label>
        <label className={`field ${errors['comment'] ? 'error-text' : ''}`}>
          <p>Comment</p>
          <textarea className='border' value={data.comment} name='comment' onChange={handleChange} type="text" />
          <p className='error-text'>{errors['comment']}</p>
        </label>
        <label className={`field ${errors['status'] ? 'error-text' : ''}`}>
          <p>Service status</p>
          <select value={data.service_status} onChange={handleChange} name='service_status'>
            {
              SERVICE_STATUS.map(el => (
                <option value={el}>{el}</option>
              ))
            }
          </select>
          <p className='error-text'>{errors['status']}</p>
        </label>
        <button type='submit'>SEND</button>
        <p className='error-text'>{errors['server']}</p>
      </form>
    </div>
  )
}
