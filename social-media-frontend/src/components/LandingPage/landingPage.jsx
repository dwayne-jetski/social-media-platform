import React from 'react';
import './landingPage.css';


const LandingPage = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">MusicApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign up</a>
                    </li>
                    </ul>
                </div>
            </nav>

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