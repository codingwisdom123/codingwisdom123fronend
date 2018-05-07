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

import Main from './Main.js'

import { Link } from 'react-router-dom'


class Dashboard extends Component {
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
    <div>
      <div ref={ref => this.el = ref}>
          <SlidingPane
              className='some-custom-class'
              overlayClassName='some-custom-overlay-class'
              isOpen={ this.state.isPaneOpen }
              title='#RIGHT'
              width='200px'
              onRequestClose={ () => {
                  // triggered on "<" on left top click or on outside click
                  this.setState({ isPaneOpen: false });
              } }>
              <div>#RIGHT</div>
          </SlidingPane>
          <SlidingPane
              isOpen={ this.state.isPaneOpenLeft }
              title='#LEFT'
              from='left'
              width='200px'
              onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
              <div style={{margin: 20}}><Link to='/Dashboard'>#DASHBOARD</Link></div>
              <div style={{margin: 20}}><Link to='/Data'>#DATA</Link></div>
              <div style={{margin: 20}}><Link to='/'>#LOGOUT</Link></div>
          </SlidingPane>
      </div>
      <Sticky top='#header' bottomBoundary='#content' style={{flexDirection: 'row', display: 'flex'}}>
        <div style={{backgroundColor: "brown", color: "yellow", height: 30, padding: 25, flexDirection: 'row', display: 'flex', justifyContent: 'flex-start'}}>
          <div style={{width: '20%', display: 'flex', flexDirection: 'row'}}>
            #Header
            <div
              onClick={ () => this.setState({ isPaneOpenLeft: true})}
              style={{marginLeft: 10}}
              >
              #LEFT_PANE
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '80%'}}>
            <div
              onClick={() => this.setState({ isPaneOpen: true})}
              style={{marginLeft: 10}}
              >
              #RIGHT_PANE
            </div>
          </div>
        </div>
      </Sticky>
      <Center style={{height: 700, backgroundColor: 'black'}}>
        <div style={{color: 'white'}}>#Dashboard</div>
      </Center>
      <StickyFooter
          bottomThreshold={50}
          normalStyles={{
          backgroundColor: "#999999",
          padding: "2rem",
          width: "100%"
          }}
          stickyStyles={{
          backgroundColor: "rgba(255,255,255,.8)",
          padding: "2rem",
          width: "100%"
          }}
      >
          #Footer
      </StickyFooter>
    </div>
    );
  }
}

export default Dashboard;
