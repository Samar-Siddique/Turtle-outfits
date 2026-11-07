"use client";

import { useShop } from "@/context/ShopContext";

export default function Scrim() {
  const { open, menu, close } = useShop();
  return <div className={"scrim" + (open || menu ? " on" : "")} onClick={close} />;
}
