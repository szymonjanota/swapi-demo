import React from 'react'
import { InputBase, Paper } from '@material-ui/core'
import styled from 'styled-components'

import { Button } from './Button'

export const StyledPaper = styled(Paper)`
  border-radius: 0;
  display: flex;
  background-color: black;
  border: 2px solid yellow;
`

export const StyledInputBase = styled(InputBase)`
  flex: 1;
  color: yellow;
  padding: 0 10px;
`

export type SearchFormProps = {
  className?: string
  value: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
}

export const SearchForm = styled(
  ({ className, value, onSubmit, onChange }: SearchFormProps) => (
    <StyledPaper
      component="form"
      className={className}
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(value)
      }}
    >
      <StyledInputBase
        placeholder="Search in the Jedi Archives..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </StyledPaper>
  )
)``
