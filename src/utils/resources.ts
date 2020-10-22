export const getResourceId = (url: string) => {
  const urlParts = url.split('/').filter((part) => part !== '')
  return urlParts[urlParts.length - 1]
}

export const getResourceUrl = (baseUrl: string, urlOrId: string) => {
  const urlParts = urlOrId.split('/').filter((part) => part !== '')
  if (urlParts.length === 1) {
    return `${baseUrl}${urlOrId}`
  }
  return urlOrId
}
