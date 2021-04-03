import React, { Component } from 'react';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validUrl = (val) => (val) => val.match(/^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g);

class Modal extends Component{

    
    constructor(props){
        super(props)
        this.state = {
            label: '',
            url: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.inputLabel = React.createRef();
        this.inputUrl = React.createRef();

    }

   

    closeModal(event){
        this.props.toggleClose(!this.props.isOpen);
    }
    handleSubmit(e){

        //use state of input instead
        e.preventDefault();
        let label = this.inputLabel.current.value;
        let photoUrl = this.inputUrl.current.value;
         
        this.props.postPhoto(label, photoUrl);
        this.closeModal()
    }


  render(){
    if(this.props.isOpen){
        return(
            <div className="bg-white shadow rounded-lg max-w-screen-sm p-8 mx-auto my-32 z-40">
                <p className="text-black font-medium text-2xl">Add a new photo</p>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-700 py-2">Label</label>
                    <input
                        className="border-2 border-gray-300 bg-white h-12 rounded-lg text-xs focus:outline-none pl-2 py-2" 
                        ref={this.inputLabel}
                        name="label"
                        model=".label"
                        placeholder="Fruitless Basket"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-700 py-2">Photo URL</label>
                    <input
                        className="border-2 border-gray-300 bg-white h-12 rounded-lg text-xs focus:outline-none pl-2 py-2" 
                        id="photo_url"
                        ref={this.inputUrl}
                        name="photo_url"
                        placeholder="https://images.unsplash.com/photo-1593642532400-2682810df593"
                        model=".photo_url"
                    />
             
                </div>
                <div className="flex justify-end py-4">
                    <button type="button" onClick={this.closeModal} className="text-base text-gray-400 font-medium pr-6">Cancel</button>
                    <input type="submit" value="Submit" className="bg-green-500 text-white rounded-lg px-4 h-14 text-base font-bold"/>
                </div>
                </form>
            </div>
        )
        }
        else
            return <div></div>
    }
  }
  

export default Modal;