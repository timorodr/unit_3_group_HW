const URL = process.env.REACT_APP_URL

export const bookmarksLoader = async () => {
    const response = await fetch(`${URL}/bookmarks`)
    const bookmarks = await response.json()
    return bookmarks
}