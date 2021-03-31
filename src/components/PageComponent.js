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
 

    

    /**
     * if index mod 3 equals 1 small thumbnail
     * if index mod 3 equals 2 large thumbnail
     * if index mod 3 equals 0 alternate thumbnail size
     * use length of style value to track prev to alternate
     */

    function Image(props){
        console.log(props.id)
        return(
            <div className="relative my-3 px-3 w-1/3 overflow-hidden sm:w-full md:w-1/2 lg:w-1/3">
                <button className="montserrat absolute top-5 right-10 delete-btn py-2 px-6">delete</button>
                <img id={props.id} className="rounded-3xl h-96" src={props.url}/>
                <label className="montserrat font-bold absolute bottom-5 left-10 text-white text-lg">{props.label}</label>
            </div>
        )
    }


    const img = images.map((item,i)=>{
            const lg = "rounded-lg";
            const sm = "rounded-lg";
            let style = "";
            let prev = "";
            if((i+1)%3==1){
                style = sm;
            }
            if((i+1)%3==2){
                style = lg;
            }

            return <Image key={i} label={item.label} id={i} url={item.photo_url}/>
    })
        return(
        <div className="flex flex-wrap overflow-hidden xl:-mx-1">
           {img}
        </div>
    )
}

export default Page