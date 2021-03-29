import React, { createRef, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import logo from '../assets/my_unsplash_logo.svg';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Modal from './ModalComponent';



export default function Header(){

    /*
      build modal pop up to add photo

    */

    const style =
        {
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.25)"
          }
    

    const toggleBg = createRef(null);

    const [toggled, setToggleModal] = useState(false);
    // let modalStyle = "";
    
        useEffect(()=>{
            if(toggled){
                ReactDOM.findDOMNode(toggleBg.current).classList.remove("hidden");
            }
            else{
                ReactDOM.findDOMNode(toggleBg.current).classList.add("hidden")
            }
           
            console.log(toggled)
        });
        
        

        
        
        
    
    
  

    
    return(
        <header className="relative pb-28">
            <div ref={toggleBg} style={style} className="z-30 bg-gray-500 opacity-100 h-full w-screen hidden">
                <Modal toggleClose={setToggleModal} isOpen={toggled}/>
            </div>
            <div className="flex flex-row items-center">
                <img className="h-8" src={logo}/>
                <button className="relative z-10 left-10"><SearchOutlinedIcon className="h-4 w-4 text-gray-300"><SearchOutlinedIcon/></SearchOutlinedIcon></button>
                <input type="text" className="z-0 border-2 border-gray-300 h-12 pl-12 rounded-lg text-sm focus:outline-none" placeholder="Search by name"/>
                <button onClick={(e)=> setToggleModal(!toggled)} id="add-photo" className="bg-green-500 rounded-md absolute top-0 right-0 p-3">Add a photo</button>
            </div>
        </header>
    
    )
}