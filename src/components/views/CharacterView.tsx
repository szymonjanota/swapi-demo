import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

import { usePlanet } from 'hooks/usePlanet'
import {
  DescriptionList,
  FieldTitle,
  FieldValue,
} from 'components/common/DescriptionList'

import { FilmView } from './FilmView'

const Root = styled.div`
  cursor: pointer;
`

export type CharacterViewProps = {
  name: string
  homeworldUrl: string
  films: string[]
}

export const CharacterView: React.FC<CharacterViewProps> = ({
  name,
  homeworldUrl,
  films,
}) => {
  const [showMovies, setShowMovies] = useState(false)
  const { data: homeworld } = usePlanet(homeworldUrl)

  return (
    <Root onClick={() => setShowMovies((previous) => !previous)}>
      <DescriptionList>
        <FieldTitle>
          <Typography>Name</Typography>
        </FieldTitle>
        <FieldValue>
          <Typography>{name}</Typography>
        </FieldValue>

        <FieldTitle>
          <Typography>Homeworld</Typography>
        </FieldTitle>
        <FieldValue>
          <Typography>{homeworld?.name}</Typography>
        </FieldValue>

        <FieldTitle>
          <Typography>Homeworld Population</Typography>
        </FieldTitle>
        <FieldValue>
          <Typography>{homeworld?.population}</Typography>
        </FieldValue>

        {showMovies && (
          <>
            <FieldValue>
              <Typography>Movies</Typography>
            </FieldValue>
            <FieldValue>
              {films.map((film) => (
                <FilmView key={film} url={film} />
              ))}
            </FieldValue>
          </>
        )}
      </DescriptionList>
    </Root>
  )
}
