import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pay() {
  const navigate = useNavigate();

  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [name, setName] = useState('');

  const isFormValid =
    cardNumbers.every((num) => num.trim().length === 4) &&
    name.trim().length > 0;

  return (
    <div id="pay">
      <div className="pay-div py-5 px-10">
        <h1 className="bg-black text-gray-300 w-1/2 p-2 font-semibold text-3xl mb-5">
          Credit Card Payment
        </h1>
        <p className="my-4 payment-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
          excepturi?
        </p>

        <div className="w-full flex justify-center">
          <div className="credit-card text-white">
            <div className="px-10 py-4">
              <div className="flex justify-between">
                <h1 className="text-2xl">Credit Card</h1>
                <h1 className="text-2xl">Bank Name</h1>
              </div>

              <img src="/food/card-thing.png" alt="card-chip" />

              {/* 4 полиња за бројот */}
              <div className="flex text-4xl">
                {cardNumbers.map((val, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={4}
                    value={val}
                    onChange={(e) => {
                      const newNumbers = [...cardNumbers];
                      newNumbers[i] = e.target.value;
                      setCardNumbers(newNumbers);
                    }}
                    className="bg-transparent w-28 text-center"
                    placeholder="0000"
                  />
                ))}
              </div>

              <div className="flex justify-between">
                <span>0123</span>
                <div className="flex items-center gap-4">
                  <div className="flex-col text-xs">
                    <p>valid </p>
                    <p>thru</p>
                  </div>
                  <p>01/90</p>
                </div>
              </div>

              <h1 className="text-2xl my-3">
                <input
                  type="text"
                  className="bg-transparent w-full"
                  placeholder="Name Surname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </h1>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            if (!isFormValid) {
              return alert('Fill all fields!');
            } else {
              alert('You made your order');
              navigate('/');
            }
          }}
          className="bg-black text-white p-2 w-30 my-4 rounded"
        >
          Pay
        </button>
        <button
          onClick={() => navigate('/')}
          className="border border-black p-2 rounded"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
