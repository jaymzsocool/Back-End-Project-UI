import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'


class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    signin = e =>{
        e.preventDefault()

        axios
            .post('https://bepro.herokuapp.com/api/login', this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
                this.props.history.push('/note');
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="auth-bkgrd">
                <div className="auth-form-wrap">
                    <h2>Log In:</h2>
                    <form onSubmit = {this.signin}>
                        <div className="auth-form">
                            <label>Username</label>
                            <input name = 'username' value = {this.state.username} onChange = {this.handleChange} type="text"></input>
                        </div>
                        <div className="auth-form">
                            <label>Password</label>
                            <input name = 'password' value = {this.state.password} onChange = {this.handleChange} type="password"></input>
                        </div>
                        <div className="auth-form-btn">
                            <button type = "submit">Sign In</button>
                            <Link to = '/'><button  type= "button">Back</button></Link>
                        </div>
                    </form>
                </div>
            </div>          
        );
    }
}

export default Login;