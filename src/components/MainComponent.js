
import React from "react";
import Page from './PageComponent';
import Header from './HeaderComponent';

const Main = ()=>{
    return(
        
        <div className="container mx-auto py-6">
            <header>
                <Header/>
            </header>
            <section>
                <Page/>
            </section>
            
        </div>
        
    )
}

export default Main