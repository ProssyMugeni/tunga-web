import React from 'react';
import PropTypes from "prop-types";
import {Switch, Route, Redirect} from 'react-router-dom';

import NavBar from '../NavBar';
import Home from "./Home";
import OurStory from "./OurStory";
import Quality from "./Quality";
import Pricing from "./Pricing";
import Friends from "./Friends";
import FriendsRules from "./FriendsRules";
import Privacy from "./Privacy";
import Agreement from "./Agreement";
import CodeOfConduct from "./CodeOfConduct";

export default class ShowcaseLayout extends React.Component {

    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func,
        match: PropTypes.object,
    };

    render() {
        const {user, logout, match, isLargeDevice} = this.props,
            isAgreementPage = /^\/(privacy|agreement|code-of-conduct)(\/|$)/ig.test(window.location.pathname);

        const prefix = match.url === '/tunga'?'/tunga':'';
        const wrapPath = (path) => {
            return `${prefix}${path}`;
        };

        return (
            <div className="showcase">
                <NavBar variant="showcase" user={user}
                        onSignOut={logout}
                        isLargeDevice={isLargeDevice}
                        className={isAgreementPage?'navbar-showcase-always-fixed':''}/>

                <Switch>
                    <Route path={wrapPath('/our-story')} component={OurStory}/>
                    <Route path={wrapPath('/quality')} component={Quality}/>
                    <Route path={wrapPath('/pricing')} component={Pricing}/>
                    <Route path={wrapPath('/friends/rules')} component={FriendsRules}/>
                    <Route path={wrapPath('/friends')} component={Friends}/>
                    <Route path={wrapPath('/privacy')} component={Privacy}/>
                    <Route path={wrapPath('/agreement')} component={Agreement}/>
                    <Route path={wrapPath('/code-of-conduct')} component={CodeOfConduct}/>
                    <Route exact path='/tunga' component={Home}/>
                    <Route exact path='/' component={Home}/>
                    <Redirect from="/friends-of-tunga" to='/friends'/>
                    <Redirect from="/friends-of-tunga-rules" to='/friends/rules'/>
                    <Redirect from="*" to='/'/>
                </Switch>
            </div>
        )
    }
}
