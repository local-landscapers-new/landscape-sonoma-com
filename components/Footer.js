function Footer() {
  return (
    <div className="text-gray-50 py-2 px-5 bg-gray-900">
      <div className="text-center container mx-auto sm:w-3/4 p-2">

        <div className="flex justify-between items-center">

          <img src="/images/logo-sonoma-right-darkmode.png" className="max-w-xs p-10" />
          <nav className="text-right">
            <ul>
              <li><a href="/" className="font-bold">Home</a></li>
              <li><a href="/services">Services</a>
                <ul>

                </ul>
              </li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>

          </nav>
        </div>

        <h1 className="mt-5 text-center text-sm tracking-wider font-light">Copyright 2021 Local Landscapers.</h1>
        
      </div>
    </div>
  )
}

export default Footer
