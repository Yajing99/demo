import React, { Component } from 'react';
import {
  TodosInputContent,
  TodosInput
} from './style';

class Input extends Component {
  getUnTickAccount() {                 //得到未完成项还有多少个
    return this.props.listContent.filter((item) => {
      return !item[1];
    }).length;
  }

  getAll() {                           //将列表所有设置为完成态或者未完成态
    const listCode = [];
    const itemTick = this.props.listContent.filter((item) => {
      return item[1];
    }).length;
    if(this.props.listContent.length === itemTick) {
      for(let i = 0, len = this.props.listContent.length; i < len; i++) {
        listCode.push([this.props.listContent[i][0], false, this.props.listContent[i][2]]);
      }
    } else {
      for(let i = 0, len = this.props.listContent.length; i < len; i++) {
        listCode.push([this.props.listContent[i][0], true, this.props.listContent[i][2]]);
      }
    }
    this.props.changeListContentAll(listCode);
  }

  getValue(e) {              //KeyPress触发事件，将新增值传入list数组中以列表形式显示，并且将input框值清空
    if(e.nativeEvent.keyCode === 13 && e.target.value !== '') {
      this.props.targetValue([e.target.value, false, false]);
      e.target.value = '';
    }
  }

  render() {
    return (
      <TodosInputContent>                     
        { this.props.listContent.length !== 0 ? 
          <div 
            className = { !this.getUnTickAccount() ? 'delete all' : 'delete' }   //若列表全完成即勾选状态时，此时小标签颜色加深
            onClick = { () => this.getAll() }         //将列表项全部勾选或者不勾选(即全部完成状态或者全部未完成状态)
          >❯</div> : null }
        <TodosInput                                         // 输入待做事件框
          placeholder = 'What needs to be done?'
          onKeyPress = { (e) => this.getValue(e) }           //键盘按键事件
        ></TodosInput>   
      </TodosInputContent>   
    );
  }
}

export default Input;