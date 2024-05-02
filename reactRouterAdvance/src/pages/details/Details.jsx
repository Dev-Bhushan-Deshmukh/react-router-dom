import React from 'react'
import './details.css'
import { useParams ,useRouteLoaderData,json,Outlet, useLoaderData, Link, useNavigation} from 'react-router-dom'
export const Details = () => {

    const params=useParams();
let data=useRouteLoaderData('px');
console.log(data,'event')

  return (
    <div id='details-container'>Details
<Link to='edit'>{params.productId}</Link>
<Link to='new'>{params.productId}</Link>
<Outlet/>

    </div>
  )
}
export  async function   fetchData({params}){
  let Id=params.productId;
  console.log(Id)
 
  const response=await fetch('https://jsonplaceholder.typicode.com/posts/'+Id)

  if(!response.ok){
//  return {isError:'true',message:'could not fetch'}
throw json({message:'could not fetch'},{status:500})
  }
  else{

    const data=await response.json();
    console.log(data,'data')

    setTimeout(() => {
    
    }, 1500);
    return data
    // return Response
  }


}