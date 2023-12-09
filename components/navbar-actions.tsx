"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import useCard from "@/hooks/use-card";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const route = useRouter();
  const [iMunted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const cart = useCard();

  if (!iMunted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center">
      <Button
        onClick={() => route.push("/cart")}
        className="flex items-center rounded-full bg-black px-3 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart?.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
