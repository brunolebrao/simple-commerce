import {
  Drawer,
  LinearProgress,
  Grid,
  Badge,
  Container,
  Box
} from '@material-ui/core'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import Item from 'components/Item'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getProducts } from 'services/productsApi'
import { ProductTypes } from 'types/products.types'
import * as S from 'styles/home.styles'
import Cart from 'components/Cart'

const Home = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<ProductTypes[]>([])
  const { data, isLoading, error } = useQuery('products', getProducts)

  const getTotalItems = (items: ProductTypes[]) => {
    handleSetLocalStorage(items)
    return items.reduce((ac: number, item) => ac + item.amount, 0)
  }

  const handleSetLocalStorage = (items: ProductTypes[]) => {
    if (items.length === 0) {
      localStorage.removeItem('cart')
    } else {
      localStorage.setItem('cart', JSON.stringify(items))
    }
  }

  const handleAddToCart = (clickedItem: ProductTypes) => {
    setCartItems((prevValue) => {
      const isItemInCart = prevValue.find((item) => item.id === clickedItem.id)
      if (isItemInCart) {
        const itemInCart = prevValue.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
        return itemInCart
      }
      const itemCart = [...prevValue, { ...clickedItem, amount: 1 }]
      return itemCart
    })
  }
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevValue) =>
      prevValue.reduce((ac, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ac
          const itemInCart = [...ac, { ...item, amount: item.amount - 1 }]
          return itemInCart
        } else {
          const itemCart = [...ac, item]
          return itemCart
        }
      }, [] as ProductTypes[])
    )
  }

  useEffect(() => {
    const getLocalStorage = localStorage.getItem('cart')
    if (getLocalStorage) {
      setCartItems(JSON.parse(getLocalStorage))
    }
  }, [])

  if (isLoading) return <LinearProgress />
  if (error) return <div>Alguma coisa deu errado, tente novamente...</div>

  return (
    <Container maxWidth="lg">
      <Box mt="3rem">
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            removeFromCart={handleRemoveFromCart}
            addToCart={handleAddToCart}
          />
        </Drawer>
        <S.CartButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCart />
          </Badge>
        </S.CartButton>
        <Grid container spacing={3}>
          {data &&
            data.map((item) => (
              <Grid item key={item.id} xs={12} sm={4}>
                <Item item={item} handleAddToCart={handleAddToCart}></Item>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Home
