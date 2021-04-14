import React from "react";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

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
   

        return(
                <div>
                    {(this.props.photos.photos.length>0 && this.props.search.txt) && <p className="text-lg p-3 text-green-500 font-black" >Found these</p>}
                <div className="grid grid-cols-3 gap-12">
                   {
                       this.props.photos.photos.map((item,i)=>{
                            return <Images key={item.id} image={item} deletePhoto={this.props.deletePhoto}/>
                        }) 
                    }
                    {(this.props.photos.photos.length==0 && this.props.search.len>0) && <p className="text-lg p-3 text-red-500 font-black">We can not find what you seek :(</p>}
                    {this.props.pho}
                </div>
                </div>
            )
    }
}


export default Page