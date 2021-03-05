import React from 'react'

const AboutBlock = () => {
  return (
    <section id="about" className="p-5 m-2 text-center container mx-auto max-w-5xl">
      
      <h2 className="text-4xl sm:text-6xl uppercase font-bold tracking-wider py-2 my-2">Who We Are</h2>

        <div className="md:grid md:grid-cols-2">

          <div className="bg-gray-900 rounded-sm strong-shadow m-4 p-2 flex flex-col items-center h-half">
            <img className="w-full h-full" src="" />

          </div>
          <div className="m-4">

            <p className="text-3xl sm:text-4xl font-thin py-2 my-2">
              
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ipsum?
            </p>
            <p className="sm:text-xl font-light py-2 my-2">

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi quis et dolore quia incidunt excepturi id a earum labore!

            </p>
            <p className="sm:text-xl font-light py-2 my-2">

              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio neque quisquam obcaecati vero quae ab facilis dignissimos quis. Voluptate, quisquam!

            </p>

            <p className="sm:text-xl font-light py-2 my-2">
              <a href="#">Find out more about us</a>.
            </p>
          </div>
        </div>
    </section>
  )
}

export default AboutBlock
