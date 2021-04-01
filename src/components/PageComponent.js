import React, { useEffect, useState, useRef } from "react";

function Images(props){
    return(
    <div 
    className="relative"
    >
        <img className="rounded-3xl" src={props.image.photo_url} alt={props.image.label}/>
        <div className="overlay">
            <button
                className="montserrat absolute top-5 right-10 delete-btn py-2 px-6 text-lg"
                onClick={(e)=>{props.deletePhoto(props.image.id)}}
                >
                    delete
            </button>
            <label 
                className="montserrat font-bold absolute bottom-5 left-10 text-white text-lg">{props.imagelabel}
            </label>
        </div>
 
    </div>
)
}



class Page extends React.Component{
    
        constructor(props){
            super(props);
        }

       


    render(){
        return(
                <div className="grid grid-cols-3 gap-12">
                    {
                        this.props.photos.photos.map((item,i)=>{
                            return <Images key={i} image={item} deletePhoto={this.props.deletePhoto}/>
                        })
                    }
                </div>
            )
    }
}


export default Page