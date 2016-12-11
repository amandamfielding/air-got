import React from 'react';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';
import Home from './home/home';
import EasyTransition from 'react-easy-transition'

const App = ({ children, location }) => (

    <EasyTransition
        path={location.pathname}
        initialStyle={{opacity: 0}}
        transition="opacity 0.1s ease-in"
        finalStyle={{opacity: 1}}
    >
        <HeaderContainer />
        {children}
        <Footer />
    </EasyTransition>
);

export default App;
