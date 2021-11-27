import React, { Component } from 'react';
import { logout, isLogin } from '../utils';
import { Link } from 'react-router-dom';
import '../App.css'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <h1 className='text'>Home</h1>

                {this.state.isLogin ? 
                    <button className="button" onClick={() => this.handleLogout()}>Click here to log out</button>
                    : <Link to="/signin" className='sign-in'>Go to sign in page</Link>
                }
            </div>
        );
    }
}

export default Home;