import React from 'react';

export default function Modal(props){
    if(props.isOpen){
    return(
        <div className="bg-white shadow p-4 rounded-lg max-w-screen-sm">
            <p className="text-black bold p-4">Add a new photo</p>
            <div className="flex flex-col pl-2">
                <label className="text-xs text-gray-700 p-1">Label</label>
                <input className="border-2 border-gray-300 bg-white h-12 pl-2 rounded-lg text-sm focus:outline-none p-1" type="text" placeholder="Fruitless Basket"/>
            </div>
            <div className="flex flex-col pl-2">
                <label className="text-xs">Photo URL</label>
                <input className="border-2 border-gray-300 bg-white h-12 pl-2 rounded-lg text-sm focus:outline-none" type="text" placeholder="https://unsplash.com/photos/8ZcYCX5hmQ8"/>
            </div>
            <div className="flex justify-end pl-2">
                <button>Cancel</button>
                <button>Submit</button>
            </div>
        </div>
    )
    }
    else
        return <div></div>
}