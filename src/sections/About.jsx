import React from 'react';

export default function About() {
  const cards = [
    {
      title: 'Our Story',
      image:
        'https://images.unsplash.com/photo-1610538625499-635bf13427b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdG91cmFudHxlbnwwfDB8MHx8fDI%3D',
      text: 'Founded with love for food and community, our restaurant blends tradition with modern flavors.',
    },
    {
      title: 'Our Chef',
      image:
        'https://images.unsplash.com/photo-1562514155-444b9a967dfa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZnxlbnwwfDB8MHx8fDI%3D',
      text: 'Led by Chef Antonio, our kitchen crafts dishes with passion, precision, and a sprinkle of magic.',
    },
    {
      title: 'Our Ingrediants',
      image:
        'https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5ncmVkaWFudHN8ZW58MHx8MHx8fDI%3D',
      text: 'We source fresh, organic, and local ingredients to bring vibrant flavors to every plate.',
    },
  ];
  return (
    <section id="about" className="">
      <h1 className="text-5xl playfair-display-sc-regular text-yellow-50 text-center py-10">
        Find out more about us!
      </h1>
      <div className="about-golden-line m-auto "></div>
      <div className="flex justify-around items-center h-screen md:flex-row flex-col gap-10">
        {cards.map((card, i) => {
          return (
            <div
              key={i}
              className="bg-brown-color text-gray-100 cards flex flex-col justify-evenly "
            >
              <h1 className="text-2xl mb-2">{card.title}</h1>
              <img className="mb-2" src={card.image} alt={card.title} />
              <p>{card.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
