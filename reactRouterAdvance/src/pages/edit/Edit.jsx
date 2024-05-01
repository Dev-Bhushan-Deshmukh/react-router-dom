import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'
export const Edit = () => {
  let data=useRouteLoaderData('px');
  console.log(data)
  return (
    <div>Edit:
{data.id}{data.title}



    </div>
  )
}
