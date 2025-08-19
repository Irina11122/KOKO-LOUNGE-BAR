import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="home"
        className="md:flex md:justify-between md:items-center md:h-scree overflow-hidden"
      >
        {/* Left Side === Text */}
        <div className="md:w-1/2 md:pl-28 md:mt-0 mt-40 home-text-box ">
          <h1 className="text-7xl mb-4 playfair-display-sc-bold">
            Great Food,Better Company
          </h1>
          <p className="text-2xl mb-4 playfair-display-700 md:pr-60">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            quam dolorum totam reiciendis asperiores expedita.
          </p>
          <button
            className="bg-black py-7 px-2 text-white text-2xl rounded-2xl  shadow-2xl shadow-yellow-50 playfair-display-700"
            onClick={() => navigate('/menu')}
          >
            ORDER ONLINE
          </button>
        </div>

        {/* Right Side === Images */}
        <div className="md:w-1/2 md:h-screen relative home-images-container">
          <div className="napkin md:w-1/2 md:h-screen bg-yellow-100 absolute md:right-0 md:top-0"></div>
          <img
            src="/food/crumbs-2.png"
            alt="crumbs-2"
            className="absolute crumbs-2"
          />
          <img
            src="/food/crumbs.png"
            alt="crumbs"
            className="absolute md:bottom-0 md:right-80  bottom-96 right-0 crumbs"
          />
          <img
            src="/food/wooden-plate.png"
            alt="wooden plate"
            className="md:absolute md:top-20 md:left-96 md:rotate-180 md:block hidden absolute bottom-0 wooden-plate-img"
          />{' '}
          <img
            src="/food/home-pizza.png"
            alt="pizza"
            className="absolute z-50 flex half-pizza-img md:hidden"
          />
        </div>
      </section>
    </>
  );
}
