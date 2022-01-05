import { api } from './api'
import { ProductTypes } from '../types/products.types'

export const getProducts = async (): Promise<ProductTypes[]> => {
  try {
    const { data } = await api.get('products')
    return data
  } catch (error) {
    return []
  }
}
