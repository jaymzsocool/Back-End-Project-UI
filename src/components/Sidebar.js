import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    
    render(){
        return(
            <div className = "sb-wrap">
                <h1 className = "sb-title">Lambda Notes</h1>
                <Link to = "/note"><button type= "button">View Your Notes</button></Link>
                <Link to = "/note/new"><button type= "button">+ Create New Note</button></Link>
            </div>
        )
    }
} 

export default Sidebar