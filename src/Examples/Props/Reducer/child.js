import React from 'react'

const Child = ({list}) => {
  return (
    <div>
        {
            list.map((item) =>{
                return(
                    <div key={item.id}>
                        <h1>{item.id}</h1> 
                        <h2>{item.name}</h2> 
                        <h3>{item.age}</h3> 
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Child;