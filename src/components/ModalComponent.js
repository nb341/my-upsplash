import React from 'react';

export default function Modal(props){
    if(props.isOpen){
    return(
        <div className="bg-white shadow rounded-lg max-w-screen-sm p-8 mx-auto my-32">
            <p className="text-black font-medium text-2xl">Add a new photo</p>
            <div className="flex flex-col">
                <label className="text-xs text-gray-700 py-2">Label</label>
                <input className="border-2 border-gray-300 bg-white h-12 rounded-lg text-xs focus:outline-none py-2" type="text" placeholder="Fruitless Basket"/>
            </div>
            <div className="flex flex-col">
                <label className="text-xs text-gray-700 py-2">Photo URL</label>
                <input className="border-2 border-gray-300 bg-white h-12 rounded-lg text-xs focus:outline-none py-2" type="text" placeholder="https://unsplash.com/photos/8ZcYCX5hmQ8"/>
            </div>
            <div className="flex justify-end py-4">
                <button className="text-base text-gray-400 font-medium pr-6">Cancel</button>
                <button className="bg-green-500 text-white rounded-lg px-4 h-14 text-base font-bold">Submit</button>
            </div>
        </div>
    )
    }
    else
        return <div></div>
}