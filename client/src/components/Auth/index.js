import { useState } from 'react';
import {
  Button, Row, Col, Space, Card,
} from 'antd';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import FormLogin from './FormLogin';
import FormRegistrate from './FormRegister';
import './FormLogin.scss';

export default function Authentication() {
  const [visibleFormLogin, setvisibleFormLogin] = useState(false);
  const showRegForm = () => {
    setvisibleFormLogin((prev) => !prev);
  };
  return (
    <div className="login-form-wrap">
      <Row justify="center" align="middle">
        <Col span={6}>
          <Row>
            <Card
              hoverable
              style={{ textAlign: 'end', paddingTop: 20 }}
            >
              {visibleFormLogin ? <FormRegistrate /> : <FormLogin />}
              <Button type="link" size="small" onClick={() => showRegForm()}>{!visibleFormLogin ? 'Создать профиль' : 'Войти в профиль' }</Button>
            </Card>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
