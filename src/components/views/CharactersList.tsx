import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

import { useCharacters } from 'hooks/useCharacters'
import { Button } from 'components/common/Button'
import { CharacterView } from 'components/views/CharacterView'

import { QueryLoading } from './QueryLoading'
import { QueryError } from './QueryError'
import { QueryEmptyResult } from './QueryEmptyResult'

export const CharacterContainer = styled.div`
  margin-bottom: 8px;

  transition: 0.3s;
  outline-offset: 0px;
  outline-width: 1px;
  outline-style: dashed;
  outline-color: transparent;

  :hover {
    outline-offset: 4px;
    outline-color: yellow;
  }
`

export const CharactersList: React.FC<{ search?: string }> = ({ search }) => {
  const { status, data, canFetchMore, fetchMore } = useCharacters({
    search,
  })

  const allCharacters = useMemo(() => data?.flatMap((page) => page.results), [
    data,
  ])

  if (status === 'loading') return <QueryLoading />
  if (status === 'error') return <QueryError />
  if (allCharacters?.length === 0) return <QueryEmptyResult />

  return (
    <Box>
      {allCharacters?.map((person) => {
        return (
          <CharacterContainer>
            <CharacterView
              key={person.url}
              name={person.name}
              homeworldUrl={person.homeworld}
              films={person.films}
            />
          </CharacterContainer>
        )
      })}
      {canFetchMore && (
        <Box display="flex" justifyContent="center">
          <Button onClick={() => fetchMore()}>Load more</Button>
        </Box>
      )}
    </Box>
  )
}
