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
        for(let i=2; i*i>=num;i++){
            if(num%i==0) return false;
        }
        return true;
    }

    const img = images.map((item,i)=>{
            console.log("IS PRIME :"+isPrime(i+1))
            return (isPrime(i+1)) ? <img key={i} className="rounded-lg" src={item.photo_url}/> : <img className="rounded-lg" style={{height: '582.48px'}} key={i} src={item.photo_url}/>
    })
        return(
        <div className="grid grid-cols-3 gap-12">
           {img}
        </div>
    )
}

export default Page