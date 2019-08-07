import React from 'react';
import {withRouter} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.css';  
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card,  Avatar } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

class Login extends React.Component{

  state = {
    collapsed: false,
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  login(){
      this.props.history.push("/home");
  }
//            <Button type="primary" htmlType="submit" onClick={() =>this.login()}>iniciar sesion</Button>

  render(){
    const { getFieldDecorator } = this.props.form;
    return (

    <div>
    <center>
    <Card className="card"
        cover={
          <img
            alt="example"
            src="http://padelecuador.com/wp-content/uploads/2016/09/BOTON_INICIARSESION.png"
          />
        }
        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      >
        <Meta
          avatar={<Avatar src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />}
          title="INICIAR SESION"
        />
        <Form onSubmit={this.handleSubmit}>
        
          <Form.Item className="input">
              {getFieldDecorator('username', {
                  rules: [
                      { required: true, message: 'Please input your username!' },
                      {type: "email"}
                  ],
              })(
                  <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                  />,
              )}
          </Form.Item>
          
          <Form.Item className="input">
              {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                  <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                  />,
              )}
          </Form.Item>
          <Button className="boton" type="primary" htmlType="submit" >iniciar sesion</Button>
          
      </Form>
      </Card> 
      </center>
          <br/><br/>
      </div>
    );
  }
    
  }
 
Login = withRouter(Login);
export default Form.create({ name: 'formLogin' })(Login);
