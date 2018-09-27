import React, { Component } from 'react'
import { editNote } from '../actions'
import { connect } from 'react-redux';

class EditNote extends Component {
    constructor(props){
        super(props)
        this.state = {        
            title: '', 
            note: ''                
        }
    }
    componentDidMount(){
        this.setState({title: this.props.notes[this.props.notes.findIndex(n => n.id===this.props.id)].title, note:this.props.notes[this.props.notes.findIndex(n => n.id===this.props.id)].note})
    }

    handleChange = e => this.setState({[e.target.name]:e.target.value});

    handleEditNote = () =>{
        const note = {
          title: this.state.title,
          note: this.state.note
        };
        this.props.editNote(this.props.id, note);
        this.setState({title: '', note: ''});
        window.location.href = "/note";
    }

    render(){ 
        return(
            <div className = "form-wrap">
                <h1 className = "form-title">Edit Note:</h1>
                <input onChange = {this.handleChange} name = "title" value = {this.state.title} ></input>
                <textarea onChange = {this.handleChange} name = "note" value = {this.state.note} rows='30' cols = '100'></textarea>
                <button onClick = {()=>this.handleEditNote()} type= "button" >Update</button>                
            </div>
        )
    }
} 

const mapStatetoProps = (state) => {
    return{
        id: state.selectedId,
        notes: state.notes 
    }
}

export default connect(mapStatetoProps, { editNote })(EditNote)