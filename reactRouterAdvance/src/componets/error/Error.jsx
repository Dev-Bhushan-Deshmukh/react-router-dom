import React from 'react'
import { useRouteError } from 'react-router-dom'
export const Error = () => {
    const err=useRouteError();
    console.log(err,'err')
    let title='something went wrong'
    if(err.status===500)
    {

        title=err.data.message;


    }
  return (
    <div>Error page <br />
{title}

    </div>
  )
}
