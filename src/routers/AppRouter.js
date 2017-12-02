import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header.js';
import Sidebar from '../components/Sidebar.js';
import PostList from '../components/PostList.js';
import NotFoundPage from '../components/NotFoundPage';
import CreateNewPost from '../components/CreateNewPost';
import EditPost from '../components/EditPost';
import PostDetail from '../components/PostDetail';

// With the route, we show the path we look for and then what component to render.
// Exact is set to false by default.
const AppRouter = () => (
    <BrowserRouter>
    <div className="app">
        <Header />
        <hr />
        <Sidebar />
        <div className="content">
            <Switch>
                <Route path="/" component={PostList} exact={true}/>
                <Route path="/category/:category" component={PostList}/>
                <Route path="/detail/:id" component={PostDetail}/>
                <Route path="/edit/:id" component={EditPost}/>
                <Route path="/:category/:id" component={PostDetail}/>
                <Route path="/create" component={CreateNewPost}/>
                <Route component={NotFoundPage}/>
            </Switch> 
        </div>
    </div>
    </BrowserRouter>
)

export default AppRouter;