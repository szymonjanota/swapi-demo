import React from 'react'
import { Box, Container } from '@material-ui/core'

export const Layout: React.FC = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box paddingY={3}>{children as any}</Box>
    </Container>
  )
}
