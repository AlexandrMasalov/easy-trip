import React, { cloneElement } from 'react';
import {
  Button, Row, Col, Card, Typography,
} from 'antd';
import { Link } from 'react-router-dom';
import MainForm from '../MainForm';
import CarouselComponent from '../Carousel';
import TicketList from '../TicketList';

const { Title } = Typography;

function StartComponent() {
  return (
    <>
      <Row justify="center" align="middle">
        <Col>
          <img src="bg6.png" style={{ maxHeight: '250px', marginBottom: 50, marginRight: 50 }} />
        </Col>
        {/* <Col>
          <img src="22.png" alt="title" style={{ maxHeight: '300px', marginLeft: 50 }} />
        </Col> */}
        <Col style={{ textAlign: 'center' }}>
          <Title level={1} className="title-font-playlist" style={{ color: '#004aad', fontSize: 80, margin: 0 }}>EasyTrip</Title>
          <Title level={2} className="title-fint-adler" style={{ color: '#13c2c2', marginBottom: 50, paddingTop: 0 }}>ПУТЕШЕСТВУЙТЕ С НАМИ ЛЕГКО!</Title>
        </Col>
        <Col>
          <img src="bg7.png" style={{ maxHeight: '250px', marginLeft: 50 }} />
        </Col>
      </Row>
      <MainForm />
      <Row justify="center">
        <Title className="title-fint-adler" level={2} style={{ color: '#004aad', marginBottom: 30 }}> Популярные направления</Title>
      </Row>

      <CarouselComponent style={{ margin: 'auto' }} />

      {/* <Row justify="center" align="bottom" style={{ margin: '50px' }}>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt="map" src="/map2.png" style={{ width: '200px' }} />}
          >
            <Link to="/map" key="map">
              <Button size="large" type="primary">Карта низких цен</Button>
            </Link>
          </Card>
        </Col>
        <Col span={4}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt="excursions" src="/car.png" style={{ width: '200px' }} />}
          >
            <Link to="/excursions" key="excursions">
              <Button size="large" type="primary">Экскурсии города</Button>
            </Link>
          </Card>
        </Col>
      </Row> */}
      {/* <TicketList /> */}
    </>
  );
}

export default StartComponent;
