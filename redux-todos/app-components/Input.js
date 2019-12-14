import React, { Component } from 'react';
import {
  TodosInputContent,
  TodosInput
} from '../style';
import { connect } from 'react-redux';
import  * as actionCreators  from '../app-store/action-creators';

class Input extends Component {

  getUnTickAccount() {                                                 //得到未完成项还有多少个
    return this.props.list.filter((item) => {
      return !item[1];
    }).length;
  }

  render() {
    return (
      <TodosInputContent>                     
        { this.props.list.length !== 0 ? 
          <div 
            className = { !this.getUnTickAccount() ? 'delete all' : 'delete' }   //若列表全完成即勾选状态时，此时小标签颜色加深
            onClick = { () => this.props.handleAll(this.props.list) }            //将列表项全部勾选或者不勾选(即全部完成状态或者全部未完成状态)
          >❯</div> : null }
        <TodosInput                                                   //输入待做事件框
          placeholder = 'What needs to be done?'
          onKeyPress = { (e) => this.props.handleValue(e) }           //键盘按键事件
        ></TodosInput>   
      </TodosInputContent>   
    );
  }
}

const mapState = (state) => {
  return {
    list : state.get('list').toJS()
  }
};

const mapDispatch = (dispatch) => ({
  handleAll(list) {                           //将列表所有设置为完成态或者未完成态
    const listCode = [];
    const itemTick = list.filter((item) => {
      return item[1];
    }).length;
    if(list.length === itemTick) {
      for(let i = 0, len = list.length; i < len; i++) {
        listCode.push([list[i][0], false, list[i][2]]);
      }
    } else {
      for(let i = 0, len = list.length; i < len; i++) {
        listCode.push([list[i][0], true, list[i][2]]);
      }
    }
    dispatch(actionCreators.getChangeList(listCode));
  },
  handleValue(e) {                           //KeyPress触发事件，将新增值传入list数组中以列表形式显示，并且将input框值清空
    if(e.nativeEvent.keyCode === 13 && e.target.value !== '') {
      dispatch(actionCreators.getValue([e.target.value, false, false]));
      e.target.value = '';
    }
  }
});

export default connect(mapState, mapDispatch)(Input);