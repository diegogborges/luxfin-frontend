import React, { Component } from 'react';
import "../App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import api from '../services/api';

export default class FinanceProgress extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        listDues: [],
      };
  
    }
  
    componentDidMount() {
      this._retrieveData();
    }
  
    _retrieveData = async () => {
      try {
        const response = await api.get(`report`);
  
        this.setState({ listDues: response.data });
  
        console.log(response)
      } catch (err) {
        
      }
    };
  
    render() {
      return (

          <div style={{display: 'flex', flexDirection: 'row', overflowY: 'scroll'}}>
              dddi
          {this.state.listDues.map(due => (
            <Card style={{ width: '82rem', flex: 1}}>
              <Card.Header style={{padding: '7px 5px 7px 5px'}}>Despesas</Card.Header>
              {due.items.map(i => (
                
                <ListGroup horizontal>
                  <ListGroup.Item style={{padding: '5px 5px 5px 5px', width: '65%'}}>{i.description}</ListGroup.Item>
                  <ListGroup.Item style={{align: 'right', padding: '5px 5px 5px 5px', width: '35%'}}>{i.value}</ListGroup.Item>
                </ListGroup>
              ))}
  
                <ListGroup horizontal>
                  <ListGroup.Item style={{padding: '5px 5px 5px 5px', width: '65%'}}>Total Dividas</ListGroup.Item>
                  <ListGroup.Item style={{padding: '5px 5px 5px 5px', width: '35%'}}>{due.tot_dues}</ListGroup.Item>
                </ListGroup>
            
              <Card.Header style={{padding: '7px 5px 7px 5px'}}>Receitas</Card.Header>
              {due.receives.map(r => (
                <ListGroup horizontal>
                  <ListGroup.Item style={{padding: '5px 5px 5px 5px', width: '65%'}}>{r.description}</ListGroup.Item>
                  <ListGroup.Item style={{padding: '5px 5px 5px 5px', width: '35%'}}>{r.value}</ListGroup.Item>
                </ListGroup>
              ))}
  
            </Card>
          ))}
          </div>
        
      )
    }
  
  }