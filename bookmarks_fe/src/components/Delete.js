import { useLoaderData, Form } from "react-router-dom"

const Delete = () => {
    const bookmark = useLoaderData()
    console.log(bookmark)


    return (
        <div className="bookmark">
          

            <h2>Delete bookmark</h2>

            <Form action={`/update/${bookmark._id}`} method="post">
                <input type="submit" value={`Delete ${bookmark.title}`}/>
            </Form>

        </div>
    )
}

export default Delete

// very diff from params.id _id is from JSON request