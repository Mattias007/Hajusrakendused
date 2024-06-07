"use client"

import { useState } from "react";
import { formhandle } from "../actions/apid";
import Image from "next/image";


    export default function Apid() {

        const [data , setData] = useState()

        function handlesubmit(formData){
            formhandle(formData).then(res => {
            setData(Object.values(res)[0])
        })
        }
    
    return (
      <div>
        <form action={handlesubmit}>
        <label htmlFor="api">Choose Api:</label>
        <select id="api" name="api">
        <option value="https://mannicoon.com/api/cats">Matlik Kassid</option>
        <option value="https://hajus.ta19heinsoo.itmajakas.ee/api/movies">Ralf</option>
        <option value="https://hajusrakendused.tak21maasik.itmajakas.ee/api/subjects">Mattias</option>

        </select> 
        <label htmlFor="limit">Querry Limit:</label>
        <input type="number" name="limit" id="limit" required></input>
        <button type="submit">Fetch</button>
        </form>
        {data && data.map(item => (
            <div key={item.id}>

                <h1>{item.name}</h1>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <img
                    src={item.image}
                    width={500}
                    height={500}
                    alt="api picture"
                />
            </div>
        ))}
      </div>
    );
  }
  