import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import { Route, Switch } from 'react-router-dom'
import NoteView from './components/NoteView'
import EditNote from './components/EditNote'
import AddNote from './components/AddNote'
import Home from './components/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


class App extends Component {
  
 
  render() {
    return (
      <div className="App">       
          <Route exact path = '/' render = {(props)=><Home {...props} />} />
          <Route exact path = '/register' render = {(props)=><Register {...props} />} />
          <Route exact path = '/login' render = {(props)=><Login {...props} />} />
          <Route path = '/note' render = {(props)=><Sidebar {...props} />} />
        <Switch> 
          <Route exact path = '/note' render = {(props)=><NoteList {...props} />} />
          <Route exact path = '/note/view/:id' render = {(props)=><NoteView {...props} />} />
          <Route exact path = '/note/:id/edit' render = {(props)=><EditNote {...props} />} />
          <Route exact path = '/note/new' render = {(props)=><AddNote {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
