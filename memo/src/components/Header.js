import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true```,
      hint: ''
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  
  /**
   * @method handleKeyUp 响应键盘事件
   */
  handleKeyUp(e) {
    if (e.keyCode !== '13') {
      this.setState({ hidden: true });
    }
  }

  /**
   * @method handleSearch 搜索
   */
  handleSearch(e) {
    e.preventDefault();
    const inputNode = findDOMNode(this.refs.inputnew);
    const text = inputNode.value.trim();
    this.props.onSearch(text);
    inputNode.value = '';
  }

  /** 
   * @method handleClick
  */
  handleClick(e) {
    e.preventDefault();
    const inputNode = findDOMNode(this.refs.inputnew);
    const text = inputNode.value.trim();
    if (text.length > 30) {
      this.setState({ 
        hidden: false,
        hint: '请输入20字以内！' 
      });
    } else if (text !== '') {
      this.props.onAdd(text);
      this.setState({ hidden: true });
    } else {
      this.setState({
        hidden: false,
        hint: '请输入内容！'
      });
    }
    inputNode.value = '';
  }

  render() {
    return (
      <header>
        <section>
          <form onSubmit={e => this.handleClick(e)}>
            <label htmlFor="new-todo">备忘录</label>
            <Input 
              onKeyUp={this.handleKeyUp}
              ref='inputnew'
              type='text'
              placeholder="添加事项（30字以内）"
              defaultValue={this.props.text}
              id="new-todo"
              style={{width: '40%'}}
            />
            <div>
              <Button 
                type="default"
                ghost
                onClick={e => this.handleClick(e)}>
                添加
              </Button>
              <Button
                type="default"
                ghost
                icon="search"
                onClick={e => handleSearch(e)}>
                搜索
              </Button>
            </div>
          </form>
        </section>
        <div
          className="hint"
          style={{
            display: this.state.hidden ? 'none' : 'inline-block'
          }}>
          <div>{ this.state.hint }</div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default Header;