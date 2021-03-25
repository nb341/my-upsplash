import React from "react";

export default function Header(){
    return(
        <header className="relative">
            <div className="flex flex-row">
                <i>Icon</i>
                <div className="flex flex-col">
                    <span>My Unsplash</span>
                    <span>devchallenges.io</span>
                </div>
            </div>
            <button id="add-photo" className="bg-green-500 rounded-md absolute top-0 right-0">Add a photo</button>
        </header>
    )
}