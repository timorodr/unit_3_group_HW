import {Link, useLoaderData, Form} from "react-router-dom"

const Landing = () => {
    const bookmarks = useLoaderData()
    console.log(bookmarks)

    // const book = useLoaderData()
    // console.log(book)


    return(
        <div>

            <h3>Create a Bookmark</h3>
           
            <Form action='/create' method="post">
                <input type="input" name="title" placeholder="bookmark's title"/>
                <input type="input" name="url" placeholder="bookmark's url" />
                <input type="submit" value={`create bookmark`}/>
            </Form>
            


            <h3>Landing Page</h3>
            {bookmarks.map(bookmark => {
                return(
                    <div key={bookmark._id} className="bookmark">
                            <a href={bookmark.url}><h1>{bookmark.title}</h1></a>
                        {/* <Link to={`${bookmark.url}`}>
                        </Link> */}
                        
                        
                        <h3>{bookmark.title}</h3>

                        <Form action={`/delete/${bookmark._id}`} method="post">
                            <input type="submit" value={`Delete ${bookmark.title}`}/>
                        </Form>
                    </div>
                )
            })}

        
        </div>

    )
}

export default Landing