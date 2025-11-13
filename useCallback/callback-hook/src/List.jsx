import React, { useState,useEffect } from 'react'

const List = ({getItems}) => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(getItems());
        console.log('setting changed')
    },[getItems])
        
  return (
    <div>{items.map((item,index)=>{
       return <p key={index}>{item}</p>;
    })}</div>
  )
}

export default List