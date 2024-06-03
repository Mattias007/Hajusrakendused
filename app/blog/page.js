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

            
            <form action={handeladdPost} className='bg-gray-200 w-1/4 p-2 flex flex-col gap-2 shadow rounded'>
                <h1>Add Blogpost</h1>
                <input name='name' type='text'></input>
                <input name='description'  type='text'></input>
                <button type='submit'>Submit</button>
            </form>

            <Blogposts data={data} user={user} set={setData}/>

        </div>

    );
}