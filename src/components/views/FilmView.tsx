import React, { useMemo } from 'react'
import { format } from 'date-fns'
import ellipsize from 'ellipsize'

import { useFilm } from 'hooks/useFilm'

import {
  DescriptionList,
  FieldTitle,
  FieldValue,
} from 'components/common/DescriptionList'
import { Box, Typography } from '@material-ui/core'

export const FilmView: React.FC<{
  url: string
}> = ({ url }) => {
  const { data } = useFilm(url)

  const film = useMemo(
    () =>
      data
        ? {
            title: data.title,
            releaseDate: format(new Date(data.release_date), 'MMM dd, yyyy'),
            openingCrawl: ellipsize(data.opening_crawl, 130),
          }
        : null,
    [data]
  )

  return (
    film && (
      <Box my={1}>
        <DescriptionList>
          <FieldTitle>
            <Typography>Title</Typography>
          </FieldTitle>
          <FieldValue>
            <Typography>{film.title}</Typography>
          </FieldValue>

          <FieldTitle>
            <Typography>Release Date</Typography>
          </FieldTitle>
          <FieldValue>
            <Typography>{film.releaseDate}</Typography>
          </FieldValue>

          <FieldTitle>
            <Typography>Opening Crawl</Typography>
          </FieldTitle>
          <FieldValue>
            <Typography>{film.openingCrawl}</Typography>
          </FieldValue>
        </DescriptionList>
      </Box>
    )
  )
}
