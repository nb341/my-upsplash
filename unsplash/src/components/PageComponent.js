import React from "react";
import { configureLayout } from "../utils/Layout";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function Images(props){
    return(
    <div 
    className="relative my-12 mx-6"
    >
        <img className="rounded-3xl object-cover" src={props.image.photo_url} alt={props.image.label} style={{height: props.height, width: props.width}}/>
        <div className="overlay">
            <button
                className="montserrat absolute top-5 right-10 delete-btn py-2 px-6 text-lg"
                onClick={(e)=>{props.deletePhoto(props.image.id)}}
                >
                    delete
            </button>
            <h1
                className="montserrat font-bold absolute bottom-5 left-10 text-white text-lg">{props.image.label}
            </h1>
        </div>
 
    </div>
)
}



class Page extends React.Component{
    
        constructor(props){
            super(props);

            
        }

  

    render(){
        const initialState = {
            imgs: [],
            colLength: 0
        };
        const colOneImgSize = {
            width: 385,
            height: 307
        };
        const colTwoImgSize = {
            width: 383,
            height: 583
        };
        const {one, two, three} = configureLayout(this.props.photos.photos, colOneImgSize, colTwoImgSize)

        return(
                <div>
                    {(this.props.photos.photos.length>0 && this.props.search.txt) && <p className="text-lg p-3 text-green-500 font-black" >Found these</p>}
                {/* <div className="grid grid-cols-3 gap-12">
                   {
                       this.props.photos.photos.map((item,i)=>{
                            return <Images key={item.id} image={item} deletePhoto={this.props.deletePhoto}/>
                        }) 
                    }
                    {(this.props.photos.photos.length==0 && this.props.search.len>0) && <p className="text-lg p-3 text-red-500 font-black">We can not find what you seek :(</p>}
                    {this.props.pho}
                </div> */}
                <div className="flex">
                    <div className=""> 
                        {
                            one.map((item, i)=>{
                                return <Images key={item.id} image={item} deletePhoto={this.props.deletePhoto} height={colOneImgSize.height} width={colOneImgSize.width}/>
                            })
                        }
                    </div>
                    <div className=""> 
                        {
                            two.map((item, i)=>{
                                return <Images key={item.id} image={item} deletePhoto={this.props.deletePhoto} height={colTwoImgSize.height} width={colTwoImgSize.width}/>
                            })
                        }
                    </div>
                    <div className=""> 
                        {
                            three.map((item, i)=>{
                                return <Images key={item.id} image={item} deletePhoto={this.props.deletePhoto} height={((i)%2===0) ? colOneImgSize.height : colTwoImgSize.height} width={((i)%2===0) ? colOneImgSize.width : colTwoImgSize.width}/>
                            })
                        }
                    </div>
                </div>
                </div>
            )
    }
}


export default Page