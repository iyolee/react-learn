import React, { Component } from 'react';
import { Row, Col } from 'antd';
import NavLink from './NavLink';

class Navigation extends Component {
  render() {
    return(
      <div className="navigation">
        <Row className="nav_row" type="flex" align="middle" justify="space-around">
          <Col span={6}>
            <NavLink to="/">
              全部&nbsp;
              { this.props.allMemos }
            </NavLink>
          </Col>
          <Col span={6}>
            <NavLink to="/todo">
              增加事项&nbsp;
              <span>{ this.props.todoNumber }</span>
            </NavLink>
          </Col>
          <Col span={6}>
            <NavLink to="/doing">
              正在进行&nbsp;
              <span>{ this.props.doingNumber }</span>
            </NavLink>
          </Col>
          <Col span={6}>
            <NavLink to="/done">
              已完成&nbsp;
              <span>{ this.props.doneNumber }</span>
            </NavLink>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Navigation;