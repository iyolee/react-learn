import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Row, Col, Icon, Button } from 'antd';

class DoneMemos extends Component {
  constructor(props) {
    super(props);
    this.handleToDoing = this.handleToDoing.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleDel(e) {
    const delindex = e.target.getAttribute('data-key');
    this.props.onDel(delindex);
    }

  handleToDoing(e) {
    const changeIndex = e.target.getAttribute('data-key');
    this.props.onDoneToDoing(changeIndex);
  }

  render() {
    let number = 0;
    this.props.todolist.map((item) => {
      if (item.done) {
        number += 1;
      }
      return true;
    });
    const collapseStyle = {
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto'
    };
    const panelContent = (
      <Row>
        <Col span={22}>
          <h3>已完成</h3>
        </Col>
        <Col span={2}>
          <Button 
            size="small"
            shape="circle"
          >
            {number}
          </Button>
        </Col>
      </Row>
    );
    const Panel = Collapse.Panel;

    return(
      <main>
        <Collapse style={collapseStyle}>
          <Panel header={panelContent}>
            <ul>{
              this.props.todolist.map((item, i) => {
                if (item.done) {
                  return (
                    <li
                      key={i}
                      style={{
                        opacity: '0.4'
                      }}>
                      <Row>
                        <Col span={3}>
                          <input type="checkbox"
                                  checked={item.done}
                                  disabled/>
                        </Col>
                        <Col span={20}>
                          <p 
                            data-key={i}
                            onClick={this.handleToDoing}
                            style={{
                              textDecoration: 'line-through'
                            }}>
                            {item.todo}
                          </p>
                        </Col>
                        <Col>
                            <Incon 
                              type="close-circle"
                              data-key={i}
                              style={{
                                fontSize: '20px'
                              }}
                              onClick={this.handleDel}/>
                        </Col>
                      </Row>
                      </li>
                  )
                }
                return true;
              })
            }</ul>
          </Panel>
        </Collapse>
      </main>
    )
  }
}

DoneMemos.propTypes = {
  onDel: PropTypes.func.isRequired,
  onDoneToDoing: PropTypes.func.isRequired
}

export default DoneMemos;