import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Grid, Row } from 'react-bootstrap';
import Center from 'react-center';
import StickyFooter from 'react-sticky-footer';

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

import { StickyTable, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';

import { slide as Menu } from 'react-burger-menu'

import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';


import Sticky from 'react-stickynode';
import StickyBox from "react-sticky-box";
import Drawer from 'rc-drawer-menu';
import { Link } from 'react-router-dom'



class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isPaneOpen: false,
          isPaneOpenLeft: false
      };
  }

  componentDidMount() {
      Modal.setAppElement(this.el);
  }
  render() {
    return (
      <Center style={{height: 700, backgroundColor: 'white'}}>
        <div style={{color: 'white'}}><Link to='/Dashboard'>#Login</Link></div>
      </Center>
    );
  }
}

export default Login;
