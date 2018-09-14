import React, { Component } from 'react';

import logo from './logo.svg';
import Homepage from './container/Homepage';
import About from './container/About';

import {BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import './App.css';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">

            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <img src={logo} className="App-logo" alt="logo" />
              </ToolbarGroup>
              <ToolbarGroup firstChild={true}>
                <h1 className="App-title">FPV Build Calculator</h1>
              </ToolbarGroup>
              <ToolbarGroup firstChild={true}>
                <Link to='/'>Home</Link>
              </ToolbarGroup>
              <ToolbarGroup firstChild={true}>
                <Link to='/about'>About</Link>
              </ToolbarGroup>
 
            </Toolbar>

          </header>

          <div className='MainContentContainer'>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/about' component={About}></Route>
          </div>
        
        </div>
      </Router>
    );
  }
} 



export default App;
