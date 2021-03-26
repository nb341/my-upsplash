import React, { Component } from 'react';

class Modal extends Component{

    //Closes modal and performs relevant reset actions if necessary


    //on submit for form
    //validators for form input using state etc
    //when cancel reset state
    
    constructor(props){
        super(props)
        this.state = {
            label: '',
            url: ''
        }
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.input = React.createRef();
    }

   
    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //     this.setState({
    //       [name]: value    
    //     });
    //   }
    closeModal(event){
        this.props.toggleClose(!this.props.isOpen);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.input.current.value)
    }


  render(){
    if(this.props.isOpen){
        return(
            <div className="bg-white shadow rounded-lg max-w-screen-sm p-8 mx-auto my-32 z-40">
                <p className="text-black font-medium text-2xl">Add a new photo</p>
                <form onSubmit={this.handleSubmit}>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-700 py-2">Label</label>
                    <input className="border-2 border-gray-300 bg-white h-12 rounded-lg text-xs focus:outline-none py-2" 
                    type="text"
                   
                    ref={this.input}
                    placeholder="Fruitless Basket"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-xs text-gray-700 py-2">Photo URL</label>
                    <input className="border-2 border-gray-300 bg-white h-12 rounded-lg text-xs focus:outline-none py-2" 
                    type="text"
                    ref={this.input}
                    placeholder="https://unsplash.com/photos/8ZcYCX5hmQ8"
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