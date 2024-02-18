'use client'

import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonType {
  productId: number
}

export default function AddToCartButton({ productId }: AddToCartButtonType) {
  const { addToCart } = useCart()

  function handleClick() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleClick}
    >
      Adicionar ao carrinho
    </button>
  )
}
