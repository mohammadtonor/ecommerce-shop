"use client";

import CartItem from "@/app/(routes)/cart/components/cart-item";
import Container from "@/components/ui/container";
import useCard from "@/hooks/use-card";
import Summary from "./components/summary";

const CartPage = () => {
  const cart = useCard();
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black ">Shopping Cart</h2>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No Items added To cart</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
