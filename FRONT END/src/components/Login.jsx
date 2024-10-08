// import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => {

  const handleLogin = async (logInValue) => {
    console.log(logInValue);
    try {
      const response = await axios.post("http://localhost:3333/api/auth/login", logInValue);
      console.log(response.data); // Log the response data
      // Redirect user if a URL is returned from the server
      if (response.data.url) {
        window.location.href = response.data.url;
      }
      console.log(`${'user'}`);
      Cookies.set("access", response.data.accessToken)
      Cookies.set("user", response.data.setUser)
      return

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleLogin}
      // onFinishFailed={onFinishFailed}
      // autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
   
  );
};
export default Login;



