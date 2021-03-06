import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'

export const Container = styled.main`
  margin: 40px;
`

export const CartButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`
