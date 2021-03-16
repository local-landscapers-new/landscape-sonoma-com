const ContactBlock = () => {
  return (
    <>
      <section id="contact" class="p-5 m-2 container mx-auto max-w-5xl">
        <h2 class="text-4xl sm:text-6xl uppercase text-center font-bold tracking-wider py-2 my-2">
          Contact Us
        </h2>
        <div class="md:grid md:grid-cols-2">
          <div class="text-gray-50 bg-gray-900 rounded-sm strong-shadow m-4 p-5">
            <p class="sm:text-xl font-light p-2 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              earum!
            </p>
          </div>

          <div class="text-gray-50 bg-gray-900 rounded-sm strong-shadow m-4 p-5">
            <p class="sm:text-xl font-light p-2 my-2">Address</p>

            <p class="sm:text-xl font-light p-2 my-2">Phone number</p>

            <p class="sm:text-xl font-light p-2 my-2">Email</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBlock;
