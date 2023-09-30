import React from 'react'
import Timeline from './Timeline'

const Author = ({data}) => {
  return (
    <div>
        {data.map((item, index) => (
            <ul key={index}>
                <li>{item.author_name}</li>
                <li>{item.author_surname}</li>
                <li>{item.source}</li>
                <Timeline data={item.journey} />
            </ul>
        ))}
    </div>
  )
}

export default Author