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
    const Img = (props) =>{
        console.log(props.photo_url)
        return <img className={props.className} src={props.photo_url} />
    }

    const isPrime = (num)=>{
        if(num==0 || num==1) return false;
        if(num==2) return true;
        for(let i=2; i*i>=num;i++){
            if(num%i==0) return false;
        }
        return true;
    }

    const img = images.map((item,i)=>{
        console.log(i)
        if(isPrime(i+1)) {
            return <Img className="w-96" id={i} photo_url={item.photo_url}/>
         } else 
         {
             return <Img className="w-96"/>
            }
    })
        return(
        <div>
           {img}
        </div>
    )
}

export default Page