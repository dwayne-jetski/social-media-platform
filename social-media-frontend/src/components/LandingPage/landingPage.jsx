import React from 'react';
import './landingPage.css';


const LandingPage = () => {
    return(
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Hello, welcome to MusicApp!</h1>
                    <p className="lead">MusicApp is a great way to connect with other artist and music enthusiasts like yourself.</p>
                    <hr Name="my-4"/>
                    <p>Sign up now to start sharing your favorite tunes with others and enhance your playlist.</p>
                    <p className="lead">
                        <a className="btn btn-outline-primary btn-lg" href="#" role="button">I'm in!</a>
                    </p>
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