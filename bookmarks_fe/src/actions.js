import { redirect } from "react-router-dom"


const URL = process.env.REACT_APP_URL

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const updatedBookmark = {
        url: formData.get('url'),
        title: formData.get('title')
    }
    console.log(updatedBookmark)

    await fetch(`${URL}/bookmarks/${params.id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBookmark)
    })

    return redirect("/")
}


export const createAction = async ({request}) => {
    const formData = await request.formData()
    const createdBookmark = {
        url: formData.get('url'),
        title: formData.get('title')
    }

    await fetch(`${URL}/bookmarks`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createdBookmark)
    })

    return redirect("/")
}


export const deleteAction = async ({params}) => {
    await fetch(`${URL}/bookmarks/${params.id}`, {
        method:"delete"
    })

    return redirect("/")
}