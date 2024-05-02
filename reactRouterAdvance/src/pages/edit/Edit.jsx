import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'
export const Edit = () => {
  let data=useRouteLoaderData('px');
  console.log(data)
  return (
    <div>Edit:
<form action="">

<label htmlFor="">id</label>
<input type="text"defaultValue={data? data.id :''} />

<label htmlFor="">title</label>
<input type="text" defaultValue={data ? data.title :''} />
<label htmlFor="" >body</label>
<input type="text" defaultValue={data? data.body:''} />









</form>



    </div>
  )
}
