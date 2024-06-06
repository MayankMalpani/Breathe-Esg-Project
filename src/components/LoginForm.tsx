import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await authService.login(values);
      navigate('/tracker');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form name="login" onFinish={onFinish}>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
