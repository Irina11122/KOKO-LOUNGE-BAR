import { useState } from 'react';
import { HiMiniBars3, HiMiniBars3BottomRight } from 'react-icons/hi2';
import { LiaTimesSolid } from 'react-icons/lia';
import { Ri24HoursFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import Cart from './Cart';
import { useCart } from 'react-use-cart';
export default function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  return (
    <div className="flex md:justify-around fixed  w-full z-40 justify-between px-3 py-4 bg-black/50 text-gray-50 transition-all hover:bg-black">
      <h1>Koko Lounge-Bar</h1>
      <nav className=" gap-10 md:flex hidden text-2xl">
        <a href="#pizza">Pizza</a>
        <a href="#steak">Steak</a>
        <a href="#pasta">Pasta</a>
        <a href="#salad">Salads</a>
        <a href="#desserts">Desserts</a>
        <a href="#drinks">Drinks</a>
      </nav>
      <button className="md:block hidden" onClick={() => navigate('/')}>
        Go Home
      </button>{' '}
      <div className="flex gap-10">
        <button className="md:hidden" onClick={() => setCartOpen(!cartOpen)}>
          <FaCartShopping size={30} />
        </button>
        <button
          className="md:hidden block cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <HiMiniBars3BottomRight
            className={`${isOpen ? 'opacity-0' : 'opacity-100'}`}
            size={35}
          />
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 z-30 w-full right-0">
          <button
            className="md:hidden block cursor-pointer z-10 absolute top-2 right-2"
            onClick={() => setIsOpen(false)}
          >
            <LiaTimesSolid size={35} />
          </button>
          <nav className="absolute h-screen bg-black/90 top-0 right-0 w-screen flex flex-col gap-10 justify-center items-start pl-3 text-4xl uppercase font-bold">
            {' '}
            <a href="#pizza">Pizza</a>
            <a href="#steak">Steak</a>
            <a href="#pasta">Pasta</a>
            <a href="#salads">Salads</a>
            <a href="#desserts">Desserts</a>
            <a href="#drinks">Drinks</a>
            <button className="block my-10" onClick={() => navigate('/')}>
              Go Home
            </button>
          </nav>
        </div>
      )}
      {cartOpen && (
        <div className="fixed top-0 right-0">
          <div className="absolute overflow-y-scroll top-20 right-0 bg-black open-cart ">
            <div>
              <main>
                {items.map((item) => (
                  <div key={item.id} className="relative flex flex-col">
                    <img
                      src="/food/plate.png"
                      alt="full-plate"
                      className="h-52"
                    />
                    <img
                      src={item.image}
                      alt="food-image"
                      className="absolute h-52 left-7 bottom-28 order-food-img"
                    />
                    <div>
                      <p className="mb-10 text-2xl text-yellow-50">
                        <span className="font-extrabold text-gray-900">
                          {item.quantity}x{' '}
                        </span>
                        {item.name}
                      </p>
                    </div>
                    <button
                      className="minus-btn"
                      onClick={() =>
                        updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="plus-btn"
                      onClick={() =>
                        updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="remove-btn self-center"
                      onClick={() => removeItem(item.id)}
                    >
                      {' '}
                      &times; Remove
                    </button>
                  </div>
                ))}
              </main>
            </div>
          </div>
          <button classNamebg-black>Finish Order</button>
        </div>
      )}
    </div>
  );
}
