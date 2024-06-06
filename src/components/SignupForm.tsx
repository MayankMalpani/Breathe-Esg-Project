import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const SignupForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await authService.signup(values);
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form name="signup" onFinish={onFinish}>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
