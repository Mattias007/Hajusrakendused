"use client"

import { useState } from "react";
import { formhandle } from "../actions/apid";
import Image from "next/image";


export default function Apid() {

    const [data, setData] = useState()

    function handlesubmit(formData) {
        formhandle(formData).then(res => {
            setData(Object.values(res)[0])
        })
    }

    return (
        <div>
            <form action={handlesubmit} className="flex gap-2 items-center border border-green-200 rounded m-2 p-2 bg-green-100">
                <label htmlFor="api">Choose Api:</label>
                <select id="api" name="api" className="p-2 rounded shadow border border-green-300 bg-white">
                    <option value="https://mannicoon.com/api/cats">Matlik Kassid</option>
                    <option value="https://hajus.ta19heinsoo.itmajakas.ee/api/movies">Ralf</option>
                    <option value="https://hajusrakendused.tak21maasik.itmajakas.ee/api/subjects">Mattias</option>

                </select>
                <label htmlFor="limit">Querry Limit:</label>
                <input className="h-8 rounded shadow p-1 border-green-300 border" type="number" name="limit" id="limit"></input>
                <button type="submit" className="bg-green-300 hover:bg-green-500 p-1 h-8 rounded shadow">Fetch</button>
            </form>
            <div className="flex flex-wrap gap-2 p-2">
                {data && data.map(item => (
                    <div key={item.id} className="">
                        <h1>{item.name}</h1>
                        <h1>{item.title}</h1>
                        <Image
                            src={item.image}
                            width={300}
                            height={300}
                            alt="api picture"
                            className="rounded"
                            />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
