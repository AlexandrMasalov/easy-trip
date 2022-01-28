/* eslint-disable no-extra-boolean-cast */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import {
  Space, Switch, Button, Tabs,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useThemeContext } from '../../context/themeContext';
import { logoutUserStart } from '../../store/actions/user';
import * as actionsIndex from '../../store/actions';
import store from '../../store';

const { TabPane } = Tabs;

export default function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.user);
  console.log(data);
  const [isAuth, setIsAuth] = useState(data.auth);
  const { switchTheme } = useThemeContext();

  function onChange(checked) {
    switchTheme();
  }

  function logout() {
    try {
      dispatch(logoutUserStart());
      store.subscribe(() => setIsAuth(store.getState().user.data.auth));
      navigate('/');
    } catch (error) {
      navigate('/error');
    }
  }
  useEffect(() => {
    if (data.auth?.email) {
      console.log(data.auth);
      setIsAuth(data.auth);
    }
  }, [data.auth]);

  return (
    <Space direction="horizontal" align="center" size="large">
      <Link to="/" className="title-fint-adler">Главная</Link>
      <Link to="/map" className="title-fint-adler">Карта низких цен</Link>
      <Link to="/excursions" className="title-fint-adler">Экскурсии</Link>
      {isAuth && <Link to="/personalarea" className="title-fint-adler" onClick={() => dispatch(actionsIndex.getSliderResSuccess([]))}>Личный кабинет</Link>}
      {isAuth ? (
        <Button className="title-fint-adler" type="link" onClick={() => logout()}>
          Выход
        </Button>
      ) : <Link to="/login" className="title-fint-adler">Вход</Link>}
      <Switch defaultChecked onChange={onChange} />
    </Space>

  );
}
