import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../Product';
const HomeScreen = () => {
  return (
    //Map the products and store it to a variable called product in line 13
    <>
      <h1>latest products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
