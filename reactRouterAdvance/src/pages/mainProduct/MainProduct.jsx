import React from 'react'
import { Outlet, json } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
export const MainProduct = () => {
const data=useLoaderData();
// let error_;
// if(data.isError==true){
//   error_=<p>{data.message}</p>
// }
  return (
    <div >MainProduct
{/* {error_} */}
{data?.slice(0,10).reverse().map(item=><li>{item.title}</li>)}

<Outlet/>

    </div>
  )
}

export  async function   fetchData(){
  const response=await fetch('https://jsonplaceholder.typicode.com/posts')

  if(!response.ok){
//  return {isError:'true',message:'could not fetch'}
throw json({message:'could not fetch'},{status:500})
  }
  else{

    const data=await response.json();
    console.log(data,'data')
    return data
    // return Response
  }


}