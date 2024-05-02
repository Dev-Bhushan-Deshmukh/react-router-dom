import React from 'react'
import { useRouteLoaderData ,Form, json, redirect} from 'react-router-dom'
export const NewProduct = () => {
  let data=useRouteLoaderData('px');
  console.log(data)
  return (
    <div>NewProduct



      



<Form method='post' action="">
<label htmlFor="" >userId</label>
<input name='userId' type="text"/>
<label htmlFor="">id</label>
<input name='id' type="text"/>

<label htmlFor="">title</label>
<input name='title' type="text"  />
<label htmlFor="" >body</label>
<input name='body' type="text"  />

<button>save</button>







</Form>



    </div>
  )
}

export async function action({request}){
const data=await request.formData();
const formData={
  id: data.get('id'),
  title: data.get('title'),
  body:data.get('body'),
  userId:data.get('userId'),



}

console.log(formData)

  let response=await fetch('https://jsonplaceholder.typicode.com/posts',{
method:'POST',
headers:{
  'Content-Type':'application/json'
},
body:JSON.stringify(formData),


  })

  if(!response.ok)
  {
    throw json({message:'could not send data'},{status:500})
  }
  let responseData=await response.json()
  console.log('post-data',responseData)
  return redirect('/product');
  // return  responseData;
}
