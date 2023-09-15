import React from 'react'
import {AiFillEdit} from 'react-icons/ai'
export default function EditButton({toggleEdit}) {
  return (
    <div id='edit-button' onClick={toggleEdit}> 
        <AiFillEdit/>
    </div>
  )
}
