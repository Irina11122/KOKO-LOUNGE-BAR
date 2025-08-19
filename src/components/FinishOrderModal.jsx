import { useCart } from 'react-use-cart';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';

export default function FinishOrderModal() {
  const { items } = useCart();
  const navigate = useNavigate();
  return (
    <div className="finish-order-modal overflow-hidden flex">
      <div className="text-gray-800 flex justify-evenly flex-col items-center">
        <h1 className="text-5x1">Confirm and Pay</h1>
        <p>
          Almost there! Please review your order details carefully. When you’re
          ready, choose your payment method and click Confirm to complete your
          order. We’ll start preparing your meal right away. Thank you for
          choosing Koko!
        </p>
        <button className="text-2x1" onClick={() => navigate('/pay')}>
          CONFIRM
        </button>
      </div>
    </div>
  );
}
