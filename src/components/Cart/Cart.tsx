import CartItem from '../CartItem'
import { ProductTypes } from 'types/products.types'
import * as S from './styles'

interface CartProps {
  cartItems: ProductTypes[]
  addToCart: (clickedItem: ProductTypes) => void
  removeFromCart: (id: number) => void
}

const Cart = ({ addToCart, cartItems, removeFromCart }: CartProps) => {
  const calculateTotal = (items: ProductTypes[]) => {
    return items.reduce((ac: number, item) => ac + item.amount * item.price, 0)
  }
  return (
    <S.Container>
      <h2>Seu carrinho de compra</h2>
      {cartItems.length === 0 ? <p>Não contem item no carrinho</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      {cartItems.length >= 1 && (
        <h2>Total: R${calculateTotal(cartItems).toFixed(2)}</h2>
      )}
    </S.Container>
  )
}

export default Cart
