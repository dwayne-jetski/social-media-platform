import React from 'react';
import './landingPage.css';


const LandingPage = () => {
    return(
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Welcome to MusicApp!</h1>
                    <p className="lead">Connect with other music enthusiasts like yourself.</p>
                    <hr Name="my-4"/>
                    <p>Log in now to start sharing your favorite tunes.</p>
                    <form className="sign_in_form container">
                        <input className="m-1" placeholder="email"></input>
                        <input placeholder="password"></input>
                        <button className="btn btn-outline-primary btn-md m-2">Log in</button>
                    </form>
                    <span className="or">or</span>
                    <hr Name="my-4"/>
                    <a className="btn-outline-primary btn-sm" href="#">Sign up</a>
            </div>

            <footer class="py-3 bg-light">
            <div class="container">
                <p class="text-center">Copyright &copy; MusicApp 2021</p>
            </div>
            </footer>
        </div>
    )
}

export default LandingPage;