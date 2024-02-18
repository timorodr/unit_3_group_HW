import {Link, useLoaderData, Form} from "react-router-dom"
import Button from "../components/Button"
import Dropdown from "../components/Dropdown"
import { useState } from "react"

const Landing = () => {
    const bookmarks = useLoaderData()
    console.log(bookmarks)

    const [isVisible, setIsVisible] = useState(false)
    

    // const toggleVisibility = () => {
    //     setIsVisible(!isVisible)
    // }




    return(
        <div>

            <h3>Create a Bookmark</h3>
           
            <Form action='/create' method="post">
                <input type="input" name="title" placeholder="bookmark's title"/>
                <input type="input" name="url" placeholder="bookmark's url" />
                <input type="submit" value={`create bookmark`}/>
            </Form>
            


            <h3>Landing Page</h3>
            {bookmarks.map((bookmark, i) => {
                return(
                    <div key={bookmark._id} className="bookmark">
                            <a href={bookmark.url} target="_blank"><h1>{bookmark.title}</h1></a>
                        
                        
                        <h3>{bookmark.title}</h3>

                        <Form action={`/delete/${bookmark._id}`} method="post">
                            <input type="submit" value={`Delete ${bookmark.title}`}/>
                        </Form>

                        <h2>Update {bookmark.title}</h2>
                        <Form action={`/update/${bookmark._id}`} method="post">
                            <input type="input" name="url" placeholder="bookmark's url" defaultValue='https://'/>
                            <input type="input" name="title" placeholder="bookmark's title" />
                            <input type="submit" value={`update ${bookmark.title}`}/>
                        </Form>

                        {/* <button onClick={() => {setBookmarkInd(i)}}>
                            click for a surprise
                        </button> */}
                        {/* <Button onClick={toggleVisibility}/>
                        <Dropdown isVisible={isVisible}/> */}
                    </div>
                )
            })}

        
        </div>

    )
}

export default Landing