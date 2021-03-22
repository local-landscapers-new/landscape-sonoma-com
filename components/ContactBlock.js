const ContactBlock = () => {
  return (
    <>
      <section id="contact" className="p-5 m-2 container mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-6xl uppercase text-center font-bold tracking-wider py-2 my-2">
          Contact Us
        </h2>
        <div className="md:grid md:grid-cols-2">
          <div className="text-gray-50 bg-gray-900 rounded-sm strong-shadow m-4 p-5">
            <p className="sm:text-xl font-light p-2 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              earum!
            </p>
          </div>

          <div className="text-gray-50 bg-gray-900 rounded-sm strong-shadow m-4 p-5">
            <p className="sm:text-xl font-light p-2 my-2">Address</p>

            <p className="sm:text-xl font-light p-2 my-2">Phone number</p>

            <p className="sm:text-xl font-light p-2 my-2">Email</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBlock;
