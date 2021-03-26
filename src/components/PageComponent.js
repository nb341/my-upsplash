import React, { useEffect, useState } from "react";

const Page = ()=>{
    const [images, setImages] = useState([]);
    // const img = (props)=>{
    //     //as overlay
    //     //delete button
    //     //img label
        

    // }
    useEffect(()=>{
        fetch('http://localhost:8000/api/',{
            credentials: 'same-origin'
        })
        .then(response => response.json())
        .then(data => {
            setImages(data);
            console.log(data[0].photo_url)
        })
        .catch(err=> console.log(err))

    },[]);
    const img = images.map((item,i)=>{
        return (
            <img height="80" width="80" key={i} src={item.photo_url.toString()} />
            // <label key={i}>{item.label}</label>

        );
    });
    return(
        <div>
           {img}
        </div>
    )
}

export default Page