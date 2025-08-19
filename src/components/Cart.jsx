import { useCart } from 'react-use-cart';

export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty)
    return (
      <div>
        <h1 className="text-7xl text-center py-2">Your Orders</h1>
        <div className="flex flex-col items-center my-20">
          <img src="/food/empty-plate.png" alt="empty-plate" className="h-52" />
        </div>
      </div>
    );
  return (
    <div className="flex flex-col items-center gap-20">
      <h1 className="text-7xl text-center py-2">Your Orders</h1>

      <main>
        {items.map((item) => (
          <div key={item.id} className="relative flex flex-col">
            <img src="/food/plate.png" alt="full-plate" className="h-52" />
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
  );
}
