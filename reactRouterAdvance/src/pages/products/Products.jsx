import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {


    let productList=[

{id:'1',title:'item-1'},

{id:'2',title:'item-2'},

{id:'3',title:'item-3'},

{id:'4',title:'item-4'},

    ]
  return (
    <div>Products

{productList.map(item=><li key={item.id}> <Link to={item.id}>{item.title}</Link> </li> )}


    </div>
  )
}
