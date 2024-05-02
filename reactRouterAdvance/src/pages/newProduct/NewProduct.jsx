import React from 'react'
import { useRouteLoaderData ,Form, json, redirect, useActionData,useNavigation} from 'react-router-dom'
export const NewProduct = () => {
  let data=useRouteLoaderData('px');
  let formentry=useActionData();
  console.log(formentry);
  let errResponse;
  if(formentry && formentry.status==404)
  {
errResponse='invalid Data submitted!'
  }
  let navigation=useNavigation();
  let formState=navigation.state==='submitting';
  console.log(data);
  return (
    <div>NewProduct



      


{errResponse}
<Form method='post' action="">
<label htmlFor="" >userId</label>
<input name='userId' type="text"/>
<label htmlFor="">id</label>
<input name='id' type="text"/>

<label htmlFor="">title</label>
<input name='title' type="text"  />
<label htmlFor="" >body</label>
<input name='body' type="text"  />

  <button disabled={formState}> {formState?'submitting...':'save'}</button>







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
  responseData.status=404;
  console.log('post-data',responseData)
  if( responseData.status==404)
  {

    return responseData
  }
  return redirect('/product');
  // return  responseData;
}
