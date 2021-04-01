import React, { Component } from 'react';

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
     
        let label = this.inputLabel.current.value;
        let photoUrl = this.inputLabel.current.value;

        this.props.postPhoto(label, photoUrl);
        this.closeModal()
    }


  render(){
    if(this.props.isOpen){
        return(
            <div className="bg-white shadow rounded-lg max-w-screen-sm p-8 mx-auto my-32 z-40">
                <p className="text-black font-medium text-2xl">Add a new photo</p>
                <form onSubmit={this.handleSubmit}>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-700 py-2">Label</label>
                    <input className="border-2 border-gray-300 bg-white h-12 rounded-lg text-xs focus:outline-none pl-2 py-2" 
                    type="text"
                   
                    ref={this.inputLabel}
                    placeholder="Fruitless Basket"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-700 py-2">Photo URL</label>
                    <input className="border-2 border-gray-300 bg-white h-12 rounded-lg text-xs focus:outline-none pl-2 py-2" 
                    type="text"
                    ref={this.inputUrl}
                    placeholder="https://images.unsplash.com/photo-1593642532400-2682810df593"
                    />
                </div>
                <div className="flex justify-end py-4">
                    <button onClick={this.closeModal} className="text-base text-gray-400 font-medium pr-6">Cancel</button>
                    <button type="submit" value="submit" className="bg-green-500 text-white rounded-lg px-4 h-14 text-base font-bold">Submit</button>
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