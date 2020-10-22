import React, { useState } from 'react'
import styled from 'styled-components'

import { Layout } from 'components/layout/Layout'
import { Title } from 'components/common/Title'
import { SearchForm } from 'components/common/SearchForm'
import { CharactersList } from 'components/views/CharactersList'

export const SearchFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  ${SearchForm} {
    flex: 0 1 400px;
  }
`

export const StyledSubtitle = styled(Title)`
  border-top: 1px solid yellow;
  margin-bottom: 48px;
`

export const Characters = () => {
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  return (
    <Layout>
      <Title variant="h1">STAR WARS</Title>
      <StyledSubtitle variant="h2">Characters</StyledSubtitle>

      <SearchFormContainer>
        <SearchForm value={text} onChange={setText} onSubmit={setSearch} />
      </SearchFormContainer>

      {search && <CharactersList search={search} />}
    </Layout>
  )
}
