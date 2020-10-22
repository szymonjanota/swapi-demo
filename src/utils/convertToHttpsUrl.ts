export const convertToHttpsUrl = (httpUrl: string) => {
  const url = new URL(httpUrl)

  url.protocol = 'https'

  return url.toString()
}
