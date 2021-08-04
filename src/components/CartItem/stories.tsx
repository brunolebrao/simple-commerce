import { Story, Meta } from '@storybook/react/types-6-0'
import CartItem from '.'

export default {
  title: 'CartItem',
  component: CartItem
} as Meta

export const Basic: Story = () => <CartItem />
