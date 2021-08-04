import * as S from './styles'
import { ProductTypes } from 'types/products.types'
import React from 'react'

interface ItemProps {
  item: ProductTypes
  handleAddToCart: (clickedItem: ProductTypes) => void
}

const Item = ({ item, handleAddToCart }: ItemProps) => (
  <S.Container>
    <S.Img src={item.image} alt={item.title} />
    <S.Article>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>R${item.price}</h3>
    </S.Article>
    <S.CustomButton
      color="primary"
      variant="contained"
      onClick={() => handleAddToCart(item)}
    >
      Adicionar no carrinho
    </S.CustomButton>
  </S.Container>
)

export default Item
