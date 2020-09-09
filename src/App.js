import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import Login from './containers/login'
import routes from './routes'
import TopNav from './component/topNav' 
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route path="/" render={() => (
            <div>
                <TopNav/>
                  {
                    routes.map((route, index) => {
                      const routeProps = { ...route };
                      const Component = routeProps.component;
                      routeProps.render = (props) => (
                        <Component {...props} />
                      )
                      delete routeProps.Component
                      return (
                        <Route key={index} { ...routeProps }/>
                      )
                    })
                  }
                  {/* <Route key={index} path={route.path} component={route.component}/> */}
            </div>
          )}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
