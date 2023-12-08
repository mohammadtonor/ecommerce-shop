"use client";

import { useEffect, useState } from "react";

interface CurrencyProps {
  value?: string;
}

const formater = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formater.format(Number(value))}</div>;
};

export default Currency;
