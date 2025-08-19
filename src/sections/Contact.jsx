export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen text-my-beige-color flex md:items-center items-center md:justify-start justify-start text-gray-200"
    >
      <div className="ml-10 md:text-2xl playfair-display-regular">
        <h1 className="playfair-display-regular md:text-7xl mb-10 text-start text-3xl">
          Contact Us
        </h1>
        <p className="mb-10 md:w-1/2 w-52">
          Got questions, special requests, or want to make a reservation? We’re
          here to help! Reach out anytime:
        </p>
        <p className="mb-3"> Phone: 045 - 332 - 445</p>
        <p className="mb-3"> Email: koko@email.com</p>
        <p className="mb-3">Address: Dracevo 127 street 3</p>
        <p className="mb-10">Hours: Mon–Sun, 11 AM–10 PM</p>
        <p className="md:w-1/2 w-40">
          Prefer a quick message? Use the contact form below — we’ll get back to
          you ASAP.
        </p>
      </div>
    </section>
  );
}
