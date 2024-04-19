import React from 'react'
import { useParams } from 'react-router-dom'

function EditPage() {
    const {id} = useParams()
  return (
    <div>{id}</div>
  )
}

export default EditPage