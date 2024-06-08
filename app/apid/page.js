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
            <form action={handlesubmit} className="flex gap-2 items-center rounded m-2 w-fit p-2 bg-green-200">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
                {data && data.map(item => (
                    <div key={item.id} className="bg-green-200 rounded shadow flex flex-col justify-between">
                        {Object.keys(item).map(key =>(
                            <div className="bg-white border border-green-400 p-2 m-1 rounded shadow">
                                <h1>{key}: {item[key]}</h1>
                            </div>
                        ))}
                        <Image
                            src={item.image}
                            width={300}
                            height={300}
                            alt="api picture"
                            className="rounded"
                            />
                    </div>
                ))}
            </div>
        </div>
    );
}
