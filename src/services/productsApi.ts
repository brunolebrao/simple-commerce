import { ProductsTypes } from 'types/products.types'
import { api } from './api'

export const getProducts = async (): Promise<ProductsTypes[]> => {
  try {
    const { data } = await api.get('products')
    return data
  } catch (error) {
    return error
  }
}
