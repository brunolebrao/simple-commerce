import { CircularProgress } from '@material-ui/core'
import { useQuery } from 'react-query'
import { getProducts } from 'services/productsApi'
const Home = () => {
  const { data, isLoading } = useQuery('products', getProducts)
  return (
    <>
      <h1>Hello Cris</h1>
      {isLoading && <CircularProgress />}
      {data &&
        data.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
    </>
  )
}

export default Home
