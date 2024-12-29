import React from 'react'
import Portfolio from '../assets/Portfolio.jpg'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Boterdrop is a service to create automated bots to do airdrops in web3.',
          image: Portfolio,
          github: "https://github.com/meendii"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto flex flex-col items-center'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='rid grid-cols-1 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
