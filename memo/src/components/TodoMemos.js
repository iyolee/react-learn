import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Row, Col, Icon, Button } from 'antd';

class TodoMemos extends Component {
  constructor(props) {
    super(props);
    this.handleTodoing = this.handleTodoing.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleDel(e) {
    const delindex = e.target.getAttribute('data-key');
    this.props.onDel(delindex);
  }

  handleTodoing(e) {
    const changeIndex = e.target.getAttribute('data-key');
    this.props.onTodoToDoing(changeIndex);
  }

  render() {
    let number = 0;
    this.props.todolist.map((item) => {
      if (item.istodo) {
        number += 1;
      }
      return true;
    });
    const CollapseStyle = {
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto'
    };
    const Panel = Collapse.Panel;
    const panelContent = (
      <Row>
        <Col span={22}>
          <h3>新建事项</h3>
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

    return (
      <main>
        <Collapse style={CollapseStyle}>
          <Panel header={panelContent}>
            <ul>{
              this.props.todolist.map((item, i) => {
                if (item.istodo) {
                  return (
                    <li
                      key={i}
                      style={{
                        opacity: item.istodo ? '0.7' : ''
                      }}>
                        <Row>
                          <Col span={3}>
                            <input type="checkbox"
                                    checked={!item.istodo}
                                    onChange={this.handleTodoing}
                                    data-key={i}/>
                          </Col>
                          <Col span={20}>
                            <Icon 
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

TodoMemos.propTypes = {
  onTodoToDoing: PropTypes.func.isRequired,
  onDel: PropTypes.func.isRequired
};