const IntroBlock = () => {
  return (
    <main id="intro" className="sm:w-3/4 p-10 m-2 text-center container mx-auto max-w-5xl">
        <div className="">
        <h1 className="text-4xl sm:text-6xl uppercase font-bold tracking-wider py-2 my-2">Local Landscapers</h1>
        <p className="text-3xl sm:text-4xl font-thin py-2 my-2">
          
          This is a catchy tagline that explains who we are and what we do.
        </p>
        <p className="font-light py-2 my-2 sm:text-xl">

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi quis et dolore quia incidunt excepturi id a earum labore!

        </p>

        <button className="sm:text-xl border-2 border-gray-900 bg-gray-50 text-darkest-green p-4 uppercase font-bold my-2 hover:bg-gray-700 hover:text-gray-100">

          <a href="tel:#">Call us today</a>

        </button>

        </div>
      </main>
  )
}

export default IntroBlock
