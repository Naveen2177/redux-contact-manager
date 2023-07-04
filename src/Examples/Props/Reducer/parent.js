import React from 'react'
import Child from './child';

const Parent = () => {
    const person = [
        {
          id: 1,
          name: "Naveen",
          age: 22,
        },
        {
          id: 2,
          name: "Nobi",
          age: 23,
        },
        {
          id: 3,
          name: "Nobita",
          age: 24,
        },
      ];
  return (
    <div>
        <Child list={person}></Child>
    </div>
  )
}

export default Parent