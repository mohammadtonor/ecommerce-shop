"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
  const [iMunted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!iMunted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center">
      <Button className="flex items-center rounded-full bg-black px-3 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
