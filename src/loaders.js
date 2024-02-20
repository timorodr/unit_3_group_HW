const URL = process.env.REACT_APP_URL

export const bookmarksLoader = async () => {
    const response = await fetch(`${URL}/bookmarks`)
    const bookmarks = await response.json()
    return bookmarks
}

// export const bookmarkLoader = async ({params}) => {
//     const response = await fetch(`${URL}/bookmarks/${params.id}`) // ALWAYS MAKE SURE THIS ROUTE MATCHES HOW DEFINED IN BE
//     const bookmark = await response.json()
//     return bookmark
// }