import React, { useEffect, useState } from "react";
import logo from '../assets/my_unsplash_logo.svg';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Modal from './ModalComponent';



export default function Header(){

    /*
      build modal pop up to add photo

    */

    const [toggled, setToggleModal] = useState(false);
    let modalStyle = "";
    const toggleModal = (e)=>{
        e.preventDefault();
        
        setToggleModal(!toggled)
        console.log(toggled)

        modalStyle = (!toggled) ? document.body.style.backgroundColor = "rgba(0, 0, 0, 0.25)" : document.body.style.backgroundColor = "#fff";

        
        
    }
    
  

    
    return(
        <header className="relative pb-28">
            <div className="flex flex-row items-center">
                <img className="h-8" src={logo}/>
                <button className="relative z-10 left-10"><SearchOutlinedIcon className="h-4 w-4 text-gray-300"><SearchOutlinedIcon/></SearchOutlinedIcon></button>
                <input type="text" className="z-0 border-2 border-gray-300 h-12 pl-12 rounded-lg text-sm focus:outline-none" placeholder="Search by name"/>
                <button onClick={toggleModal} id="add-photo" className="bg-green-500 rounded-md absolute top-0 right-0 p-3">Add a photo</button>
            </div>
            <Modal isOpen={toggled}/>
        </header>
    
    )
}