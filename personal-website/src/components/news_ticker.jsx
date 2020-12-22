// Importing components 
import React, { Component, useState } from 'react'
import Ticker from "react-ticker"


const News = () => (

        <div className="border">
             <Ticker speed={5} mode={"smooth"}>
            {
                ({}) => (
                    <>
                    {/* Add the news here. */}
                        <p>Check out my latest project: Jeffersonize</p>
                    </>
                )
            }
        </Ticker>
        </div>


)

export default class NewsTicker extends Component{
    render (){
        return (
            <News/>
        )
    }
}