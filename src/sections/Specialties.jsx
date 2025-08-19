import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Specialties() {
  const specialtiesInfo = [
    {
      plate: '/food/plate.png',
      foodImg: '/food/full-pizza.png',
      specialtyText: 'PIZZA',
    },
    {
      plate: '/food/plate.png',
      foodImg: '/food/steak.png',
      specialtyText: 'STEAK',
    },
    {
      plate: '/food/plate.png',
      foodImg: '/food/pasta.png',
      specialtyText: 'PASTA',
    },
    {
      plate: '/food/plate.png',
      foodImg: '/food/salad.png',
      specialtyText: 'SALADS',
    },
    {
      plate: '/food/plate.png',
      foodImg: '/food/dessert-3.png',
      specialtyText: 'DESSERT',
    },
    {
      plate: '/food/plate.png',
      foodImg: '/food/drinks.png',
      specialtyText: 'DRINKS',
    },
  ];
  return (
    <section id="specialties" className="md:h-screen w-full z-0 py-12">
      <div className="flex flex-wrap justify-center items-center gap-10  py-4">
        {specialtiesInfo.map((food, i) => {
          const targetId = food.specialtyText.toLowerCase();
          return (
            <motion.div
              key={i}
              initial={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, ease: 'circInOut' }}
              className="specialty-card relative cursor-pointer"
            >
              <Link to={`/menu#${targetId}`}>
                <div className="">
                  <img
                    src={food.plate}
                    alt="plate"
                    className={i === 1 ? 'landing-plate' : ''}
                  />
                  <img
                    src={food.foodImg}
                    alt="food"
                    className={`absolute z-0 specialty-food ${
                      i === 0 ? 'block md:hidden' : ''
                    }`}
                  />
                  <h1 className="text-4xl text-center text-white playfair-display-sc-regular">
                    {food.specialtyText}
                  </h1>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
