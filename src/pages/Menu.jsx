import { useLayoutEffect, useState } from 'react';
import data from '../data.json';
import MenuNav from '../components/MenuNav';
import Cart from '../components/Cart';
import { useCart } from 'react-use-cart';
import { useLocation } from 'react-router-dom';
import FinishOrderModal from '../components/FinishOrderModal';

export default function Menu() {
  const [meni, setMeni] = useState();
  const [modal, setModal] = useState(false);
  const location = useLocation();
  const { addItem } = useCart();

  useLayoutEffect(() => {
    setMeni(data);
  }, []);

  useLayoutEffect(() => {
    if (!meni) return;

    const hash = location.hash.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location, meni]);

  if (!meni)
    return (
      <div className="h-screen w-screen bg-black text-7xl text-gray-200 flex justify-center items-center">
        Loading...
      </div>
    );

  return (
    <div id="menu" className="h-screen overflow-y-auto my-scroll-container">
      <MenuNav />
      <div className="flex">
        <div className="py-10 px-5 space-y-10 meni-box">
          {Object.keys(meni.restaurant.menu).map((category) => (
            <div id={category.toLowerCase()} key={category}>
              <h2 className="text-3xl text-gray-200 mb-5 capitalize">
                {category}
              </h2>
              <div className="flex flex-wrap gap-8 justify-center">
                {meni.restaurant.menu[category].map((item) => (
                  <div
                    key={item.id}
                    className="menu-info-cards text-white md:w-52 md:mr-7 mr-0 relative"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:h-40 object-cover rounded-lg md:mb-2 z-40"
                    />
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-yellow-300 font-semibold price">
                      ${item.price}
                    </p>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                    <button onClick={() => addItem(item)} className="order-btn">
                      Order
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="order-box md:block hidden overflow-hidden my-scroll-container relative">
          <Cart />
          <button
            onClick={() => setModal(true)}
            className="fixed bg-black text-gray-200 bottom-10 p-5 w-30per z-20 text-2xl font-bold"
          >
            Finish order
          </button>
        </div>
      </div>

      {modal && (
        <div className="fixed top-20 left-5 flex justify-center items-center h-screen w-screen">
          <button
            onClick={() => setModal(false)}
            className="bg-black w-24 h-24 text-gray-100 text-2xl flex justify-center items-center absolute top-32 right-44"
          >
            X
          </button>
          <FinishOrderModal />
        </div>
      )}
    </div>
  );
}
