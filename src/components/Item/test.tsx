import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import Item from '.'

const props = {
  item: {
    category: "men's clothing",
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 109.95,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    amount: 0
  },
  handleAddToCart: jest.fn()
}

const renderComponent = (children: ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

describe('<Item />', () => {
  it('Should render the heading', () => {
    const { container } = renderComponent(<Item {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
