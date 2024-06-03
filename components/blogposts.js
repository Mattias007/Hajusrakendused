"use client"

import {getAllPosts, deletePost, updatedPost ,addComment, deleteComments} from "@/app/actions/blog"


export default function Blogposts(props) {

    function handleaddComment(formData) {
        addComment(formData)
        getAllPosts().then(res => props.set(res))
    }

    function handledeletePost(formData) {
        deletePost(formData)
        getAllPosts().then(res => props.set(res))
    }

    function handleupdatedPost(formData) {
        updatedPost(formData)
        getAllPosts().then(res => props.set(res))
    }
    
    function handleadeleteComments(formData) {
        deleteComments(formData)
        getAllPosts().then(res => props.set(res))
    }

    return (
        <div className='grid grid-cols-1 gap-2 p-2'>
            {props.data.map(e => (
                <div key={e.id} className='rounded shadow bg-green-300 p-2'>
                    <h1>{e.name}</h1>
                    <p>{e.description}</p>

                    <form action={handleaddComment}>
                        <input name='id' readOnly hidden defaultValue={e.id}></input>
                        <input name='name'></input>
                        <input name='description'></input>
                        <button type="submit">Comment</button>
                    </form>


                    {props.user.roleType[0] == "admin" ? (
                        <>
                            <form action={handledeletePost}>
                                <input name='id' readOnly hidden defaultValue={e.id}></input>
                                <button type='submit'>Delete</button>
                            </form>


                            <form action={handleupdatedPost} className="flex flex-col gap-2">
                                <input name='id' readOnly hidden defaultValue={e.id}></input>
                                <input name='name' defaultValue={e.name}></input>
                                <input name='description' defaultValue={e.description}></input>
                                <button type='submit'>Edit</button>
                            </form>
                        </>
                    ) : (null)}
                    

                    <h1>Comments:</h1>
                    
                    {e.blogcomments != 0 ? (
                        <div className="flex gap-2 flex-col">
                            {e.blogcomments.map(el => (
                                <div key={el.id} className="bg-amber-500 shadow rounded">
                                <h1>Name: {el.name}</h1>
                                <h1>Description: {el.description}</h1>
                                <form action={handleadeleteComments} className="p-2">
                                    <input name="id" hidden readOnly defaultValue={el.id}></input>
                                    <button type="submit" className="bg-red-600 p-2 rounded">Delete</button>
                                </form>
                            </div>
                            ))}
                        </div>

                    ) : (<h1>No Comments</h1>)}

                </div>

            ))}
        </div>
    )
}