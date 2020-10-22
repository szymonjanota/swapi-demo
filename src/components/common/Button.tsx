import styled from 'styled-components'
import { Button as MuiButton } from '@material-ui/core'

export const Button = styled(MuiButton)`
  border-radius: 0;
  background-color: yellow;
  box-shadow: none;
  padding: 7px 14px;

  &:hover {
    background-color: #cccc00;
  }
`
