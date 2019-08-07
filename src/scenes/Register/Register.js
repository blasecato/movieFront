import React from 'react';
import { Card } from 'antd';
import { Form, Icon, Input, Button,Select, Checkbox,Row,Col} from 'antd';
import { DatePicker, TimePicker} from 'antd';
import {withRouter} from 'react-router-dom';
import "./Register.css"

const { MonthPicker, RangePicker } = DatePicker;
const { Meta } = Card;
const { Option } = Select;
class Register extends React.Component{
    state = {
        
      }



      handleSubmit = e => {
        e.preventDefault();
    
        this.props.form.validateFields((err, fieldsValue) => {
          if (err) {
            return;
          }
    
          // Should format date value before submit.
          const rangeValue = fieldsValue['range-picker'];
          const rangeTimeValue = fieldsValue['range-time-picker'];
          const values = {
            ...fieldsValue,
            'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
            'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
            'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
            'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
            'range-time-picker': [
              rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
              rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
            ],
            'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
          };
          console.log('Received values of form: ', values);
        });
      };






      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
      handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };
    
      compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('Tus contraseñas no coinciden!');
        } else {
          callback();
        }
      };
    
      validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      };




      constructor(props) {
        super(props);
    
        const value = props.value || {};
        this.state = {
          number: value.number || 0,
          currency: value.currency || 'rmb',
        };
      }
    
      handleNumberChange = e => {
        const number = parseInt(e.target.value || 0, 10);
        if (Number.isNaN(number)) {
          return;
        }
        if (!('value' in this.props)) {
          this.setState({ number });
        }
        this.triggerChange({ number });
      };
    
      handleCurrencyChange = currency => {
        if (!('value' in this.props)) {
          this.setState({ currency });
        }
        this.triggerChange({ currency });
      };
    
      triggerChange = changedValue => {
        // Should provide an event to pass value to Form.
        const { onChange } = this.props;
        if (onChange) {
          onChange(Object.assign({}, this.state, changedValue));
        }
      };



      render(){
        const tailFormItemLayout  = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
          const config = {
            rules: [{ type: 'object', required: true, message: 'Digite la fecha!' }],
          };
          const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Digite la fecha!' }],
          };
        const { getFieldDecorator } = this.props.form;
        const { size } = this.props;
    const { state } = this;
        return (
            <center>
            <div className="container">
                <Card className="card"
                    hoverable
                    style={{ width: 800 }}
                    cover={<img style={{ height: 200 }} alt="example" src="http://www.cosmeticaonco.com/wp-content/uploads/2016/07/Bristol-Myers-Squibb.-Cremas-contra-el-cáncer.-cosméticaonco-776x415.png" />}
                >
                    <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
                    <h1>Registra tu nueva pelicula</h1>
                    <Form.Item label="E-mail" className="input">
                    {getFieldDecorator('email', {
                        rules: [
                        {
                            type: 'email',
                            message: 'El correo no es valido!',
                        },
                        {
                            required: true,
                            message: 'por favor ingrese su correo!',
                        },
                        ],
                    })(<Input />)}
                    </Form.Item> 
                        <Form.Item label="Contraseña" hasFeedback className="input">
                            {getFieldDecorator('password', {
                                rules: [
                                {
                                    required: true,
                                    message: 'Por favor inserte su contraseña!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                                ],
                            })(<Input.Password />)}
                            </Form.Item>
                            <Form.Item label="Confirmar" hasFeedback className="input">
                            {getFieldDecorator('confirm', {
                                rules: [
                                {
                                    required: true,
                                    message: 'Porfavor confirme su Contraseña!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                        </Form.Item>
                        <Form.Item label="Nombre" className="input">
                            {getFieldDecorator('text', {
                                rules: [
                                {
                                    type: 'text',
                                },
                                {
                                    required: true,
                                    message: 'Porfavor ingrese su Nombre!',
                                },
                                ],
                            })(<Input />)}
                        </Form.Item> 
                        <Row gutter={8}>
                        <Col span={24}>
                        <Form.Item label="Celular" className="input_num">
                            {getFieldDecorator('number', {
                                rules: [
                                {
                                    type:'number',
                                },
                                {
                                    required: true,
                                    message: 'Porfavor ingrese su Numero telefonico!',
                                },
                                ],
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item className="input_num">
                            <Select
                                value={state.currency}
                                size={size}
                                style={{ width: '32%' }}
                                onChange={this.handleCurrencyChange}
                                >
                                <Option value="rmb">+57</Option>
                                <Option value="dollar">+56</Option>
                            </Select>
                        </Form.Item>
                        </Col>
                        </Row>
                        <Form.Item label="Fecha de expedicion" className="input">
                            {getFieldDecorator('date-picker', config)(<DatePicker />)}
                        </Form.Item> 

                        <Checkbox>
                            Acepta los <a href="">Terminos</a>
                        </Checkbox>,
                        <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Registrar
                        </Button>
                        </Form.Item>


                    </Form>
                </Card>

            </div>
            </center>
        );
      }    
}

Register = withRouter(Register);
export default Form.create({ name: 'formLogin' })(Register);