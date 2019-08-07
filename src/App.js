import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './scenes/Home/Home'; 
import Login from './scenes/Login/Login';
import Register from './scenes/Register/Register';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb,Icon,Button,Row,Col } from 'antd';
import { PageHeader } from 'antd';
import './App.css' 

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component{

  state = {
    
  }
  render(){
    return (
      <div className="content">   
        <Router>
                <div className="nav">
                  <Row gutter={12}>
                    <Col span={8}>
                        <Link to="/" > 
                          <Button type="primary" >
                            <Icon type="home" />
                            Home
                          </Button> 
                        </Link>
                        <Link to="/login/">
                          <Button type="dashed" className="boton">
                            <Icon type="user" />
                            Login
                          </Button> 
                        </Link>
                        <Link to="/register/" >
                          <Button type="primary" shape="round" className="botonr">
                            <Icon type="user-add" />
                            Registro
                          </Button> 
                        </Link>
                        </Col>
                        </Row>
                    <br/>
                  <Route path="/" exact component={Home} />
                  <Route path="/home/" component={Home} />
                  <Route path="/login/" component={Login} />
                  <Route path="/register/" component={Register} />
                </div>
            </Router>
      </div>
    );
  }
    
  }


export default App;
