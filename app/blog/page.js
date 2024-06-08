"use client"

import { useUser } from '@auth0/nextjs-auth0/client';
import { getAllPosts, addPost } from '../actions/blog';
import Blogposts from '@/components/blogposts';
import { useEffect, useState } from 'react';



export default function Blog() {
    const { user , error , isLoading} = useUser();
    const [data, setData] = useState([])

    useEffect(() =>{
        getAllPosts().then(res => setData(res))
    },[])
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    

    function handeladdPost(formData){
        addPost(formData)
        getAllPosts().then(res => setData(res))
    }

    return (
        <div>
            <div>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
                {JSON.stringify(user.roleType[0])}
            </div>

            
            <form action={handeladdPost} className='bg-green-200 m-2 p-2 md:w-1/3 flex flex-col gap-2 shadow rounded'>
                <h1>Add Blogpost</h1>
                <label>Title:</label>
                <input name='name' className='rounded p-2' placeholder='Title' type='text'></input>
                <label>Description:</label>
                <textarea  name='description'  className='rounded p-2' placeholder='Description'  type='text'></textarea>
                <button type='submit' className='bg-green-300 hover:bg-green-400 rounded p-2'>Submit</button>
            </form>

            <Blogposts data={data} user={user} set={setData}/>

        </div>

    );
}