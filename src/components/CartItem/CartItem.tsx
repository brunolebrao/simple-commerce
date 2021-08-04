import { Button } from '@material-ui/core'
import { ProductTypes } from 'types/products.types'
import * as S from './styles'

interface CartItem {
  item: ProductTypes
  addToCart: (clickedItem: ProductTypes) => void
  removeFromCart: (id: number) => void
}

const CartItem = ({ addToCart, removeFromCart, item }: CartItem) => (
  <S.Container>
    <S.Content>
      <h3>{item.title}</h3>
      <S.Values>
        <p>Price: R${item.price}</p>
        <p>Total: R${(item.amount * item.price).toFixed(2)}</p>
      </S.Values>
      <S.Information>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <S.Amount>{item.amount}</S.Amount>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </S.Information>
    </S.Content>
    <S.Img src={item.image} alt={item.title} />
  </S.Container>
)

export default CartItem
