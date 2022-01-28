import {
  Form, Input, Button, Checkbox, Avatar,
} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { red } from '@ant-design/colors';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../store/actions/user';

export default function FormRegistrate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log({ values });
    dispatch(actions.regUserStart(values));
    navigate('/');
    form.resetFields();
  };
  return (
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onReset
    >
      <Avatar size={64} icon={<UserOutlined />} style={{ marginBottom: '20px' }} />
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Введите вашу почту' }]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Введите Вашe имя' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Введите ваш пароль' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" className="login-form-button">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
}
