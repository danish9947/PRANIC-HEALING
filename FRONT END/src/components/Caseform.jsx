import { Button, Checkbox, Form, Input, DatePicker, Upload } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';

const Caseform = () => {

  const [image, setImage] = useState();

 
  
  const handleLogin = async (formValue) => {
    const access = Cookies.get('access');
  
    // Ensure the required fields are present in formValue
    const { name, dateOfBirth, address, phoneNumber, smoke, drink, prenent, bloodPressure, medicins, contagiousDiseases, psychologicalDisorder, physicalInjury } = formValue;
  
    // Make sure to provide the image if required
    const img = image; // Assuming 'image' is a file or URL you're working with
  
    // Create the caseForm object with the required fields
    const caseForm = {
      name,
      dateOfBirth,
      address,
      phoneNumber,
      smoke,
      drink,
      prenent,
      bloodPressure,
      medicins,
      contagiousDiseases,
      psychologicalDisorder,
      physicalInjury,
      img
    };
  
    console.log(caseForm);
  
    try {
      const response = await axios.post("http://localhost:3333/api/case/patients", caseForm, {
        headers: {
          token: `Bearer ${access}`
        }
      });
  
      console.log(response.data); // Log the response data
  
      // Redirect user if a URL is returned from the server
      if (response.data.url) {
        window.location.href = response.data.url;
      }
  
      // Save tokens or user data in cookies
      Cookies.set("access", response.data.accessToken);
      Cookies.set("user", response.data.setUser);
  
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleImageUpload = async (e) => {
    console.log(e.file);
    // const formData = new FormData();
    // formData.append

    const res = await axios.post("http://localhost:3333/api/image/upload", { image: e.file },
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
    // console.log("data:", res.data);
    setImage(res.data)

  };


  return (
    <Form
      name="caseform"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={handleLogin}
    >

      <Form.Item
      label="Upload Your Latest Image"
      >
      
        <Upload
          listType='picture'
          className='upload'
          beforeUpload={() => false}
          onChange={handleImageUpload}
        >
          <Button icon={<UploadOutlined />}>UPLOAD</Button>

        </Upload>
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="dateOfBirth"
        rules={[{ required: true, message: 'Please input your date of birth!' }]}
      >
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please input your address!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        name="smoke"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Smoke</Checkbox>
      </Form.Item>

      <Form.Item
        name="drink"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Drink</Checkbox>
      </Form.Item>

      <Form.Item
        name="prenent"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Pregnant</Checkbox>
      </Form.Item>

      <Form.Item
        name="bloodPressure"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Blood Pressure</Checkbox>
      </Form.Item>

      <Form.Item
        name="medicins"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Medications</Checkbox>
      </Form.Item>

      <Form.Item
        name="contagiousDiseases"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Contagious Diseases</Checkbox>
      </Form.Item>

      <Form.Item
        name="psychologicalDisorder"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Psychological Disorder</Checkbox>
      </Form.Item>

      <Form.Item
        name="physicalInjury"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Physical Injury</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Caseform;
