import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {


    let productList=[

{id:'i1',title:'item-1'},

{id:'i2',title:'item-2'},

{id:'i3',title:'item-3'},

{id:'i4',title:'item-4'},

    ]
  return (
    <div>Products

{productList.map(item=><li key={item.id}> <Link to={item.title}>{item.title}</Link> </li> )}


    </div>
  )
}
