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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-2'>
            {props.data.map(e => (
                <div key={e.id} className='rounded shadow bg-green-200 p-2'>
                    <h1>Post</h1>
                    <h1>Name: {e.name}</h1>
                    <p>Description: {e.description}</p>

                    <form action={handleaddComment} className="flex flex-col gap-2">
                        <input name='id' readOnly hidden defaultValue={e.id}></input>
                        <input name='name' placeholder="Title" className="rounded shadow p-2"></input>
                        <textarea name='description' placeholder="Description" className="rounded shadow p-2"></textarea>
                        <button type="submit" className='bg-green-300 hover:bg-green-400 rounded p-2'>Comment</button>
                    </form>


                    {props.user.roleType[0] == "admin" ? (
                        <>
                            <form action={handledeletePost}>
                                <input name='id' readOnly hidden defaultValue={e.id}></input>
                                <button type='submit' className="bg-red-200 hover:bg-red-600 p-2 m-2 rounded">Delete Post</button>
                            </form>

                            <form action={handleupdatedPost} className="flex flex-col gap-2">
                                <h1>Eddit Post:</h1>
                                <input name='id' readOnly hidden defaultValue={e.id}></input>
                                <input name='name' defaultValue={e.name} placeholder="Title" className="rounded shadow p-2"></input>
                                <textarea name='description' defaultValue={e.description} placeholder="Description" className="rounded shadow p-2"></textarea>
                                <button type='submit' className='bg-green-300 hover:bg-green-400 rounded p-2'>Edit Post</button>
                            </form>
                        </>
                    ) : (null)}
                    

                    <h1>Comments:</h1>
                    
                    {e.blogcomments != 0 ? (
                        <div className="flex gap-2 flex-col">
                            {e.blogcomments.map(el => (
                                <div key={el.id} className="border border-green-300 bg-white p-2 shadow rounded">
                                <h1>Name: {el.name}</h1>
                                <h1>Description: {el.description}</h1>
                                {props.user.roleType[0] == "admin" ? (
                                <form action={handleadeleteComments} className="pt-2">
                                    <input name="id" hidden readOnly defaultValue={el.id}></input>
                                    <button type="submit" className="bg-red-200 hover:bg-red-600 p-2 rounded">Delete Comment</button>
                                </form>
                                ): (null)}
                            </div>
                            ))}
                        </div>

                    ) : (<h1>No Comments</h1>)}

                </div>

            ))}
        </div>
    )
}