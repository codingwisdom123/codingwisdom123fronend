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

import Sticky from 'react-stickynode';

class App extends Component {
  render() {
    return (
    <div>
      <Sticky top='#header' bottomBoundary='#content'>
          <div style={{backgroundColor: "brown", color: "yellow", height: 30, padding: 25}}>#Header</div>
      </Sticky>
      <Center style={{height: 700, backgroundColor: 'black'}}>
        <div style={{color: 'white'}}>#Section1</div>
      </Center>
      <Center style={{height: 700, backgroundColor: 'white'}}>
        <div style={{color: 'black'}}>#Section2</div>
      </Center>
      <Center style={{height: 700, backgroundColor: 'black'}}>
        <div style={{color: 'white'}}>#Section3</div>
      </Center>
      <StickyFooter
          bottomThreshold={50}
          normalStyles={{
          backgroundColor: "#999999",
          padding: "2rem"
          }}
          stickyStyles={{
          backgroundColor: "rgba(255,255,255,.8)",
          padding: "2rem"
          }}
      >
          #Footer
      </StickyFooter>
    </div>
    );
  }
}

export default App;
