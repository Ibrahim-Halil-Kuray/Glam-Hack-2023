import React from 'react'

function Book({data}) {

  return (
  <main className='flex-column p-5 bg-gray-300 relative'>

    <section className='p-5 bg-green-200 fixed top-0 left-0 right-0'>
      <h3 className='m-3 bg-red-300 text-xl'>{data.title}</h3>
      {data.authors.map((author) => (
        <div className='m-3 bg-red-200'>
          <h4>Author : {author.name}</h4>
          <h4>Life Dates : {author.life_dates}</h4>
        </div>
      ))}
    </section>

    <section className='flex-column mt-36'>
      
      {data.text_links.map ((page) => (
        <section className='flex  p-3'>

        <div className='w-9/12 p-3 bg-blue-200'>
          <h2 className='text-xl m-2 bg-blue-300'>Content Of : {page.page_label}</h2>
          <p>{page.page_text}</p>
        </div>

        <ul className='w-3/12 p-3 bg-yellow-100'>
          <h2 className='text-xl m-2 bg-yellow-300'>Entities</h2>
            {page.entities.map((entity) => (
              <li> {entity.word} : {entity.prediction}</li>
          ))}
        </ul>
      </section>
        ))}

    </section>

  </main>
  )
}

export default Book