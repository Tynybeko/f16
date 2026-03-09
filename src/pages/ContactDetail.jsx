import React, { useMemo } from 'react'
import { data } from './Contact'
import { useParams } from 'react-router'


export default function ContactDetail() {
  const params = useParams()
  const detailData = useMemo(() => {
   return data.find(el => el.id == params.contanctID)
  }, [data, params?.contanctID])
  return (
    <div>Contact DETAIL
      <hr />
      {JSON.stringify(detailData, null, 1)}
    </div>
  )
}
