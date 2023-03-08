import axios from 'axios'
import React, { useEffect, useState } from 'react'

function API() {
    const [value, setValue] = useState([])
    const [name, setName] = useState([])
    const API = 'https://provinces.open-api.vn/api/?depth=3'
    useEffect(() => {
        const callAPI = async () => {
            await axios.get(API)
            .then(res => res.data)
            .then(data => {
                setValue(data)
                console.log(data);
            })
            .catch(error => console.log(error))
        }
        callAPI()
    }, [])
    return (
        <div>
            <h1>Call API</h1>
            <div className="main">
                <select>
                    {
                        value.map((items,index) => (
                            <option key={index}>{items.name}</option> 
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default API
