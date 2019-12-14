import React, { Component } from 'react';
import {
  ListTable
} from './style';

class List extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      editValue : []                //记录每一项的历史值
    }
  }

  getTick() {                      //将列表某一单项设置为完成态或者未完成态
    this.props.changeListContent(
      [this.props.listContentEach[0], (this.props.listContentEach[1] ? false : true), this.props.listContentEach[2]], 
      this.props.listKey
    );
  }

  getDelete() {            //将指定的某一项删除
    this.props.deleteListContent(this.props.listKey);
  }

  getEdit(e) {            //键盘按键事件，当按下“enter”键时编辑完成某一项
    if(e.nativeEvent.keyCode === 13 && e.target.value !== '') { 
      let editCode = [];
      if(this.state.editValue.length > this.state.editValue[0] + 1) {
        editCode = this.state.editValue.slice(0, this.state.editValue[0]+1);
      } else {
        editCode.push(...this.state.editValue);
      }
      editCode.push(e.target.value);
      editCode[0] += 1;
      this.setState({ editValue : editCode });
      this.props.editListContent([e.target.value, this.props.listContentEach[1], false], this.props.listKey); 
    }
  }

  getEditTrue() {           //使某一项可编辑,且同步更新历史值
    if(!this.state.editValue.length) {
      this.setState({ editValue : [1, this.props.listContentEach[0]] });
    } 
    this.props.editListContentY([this.props.listContentEach[0], this.props.listContentEach[1], true], this.props.listKey);
  }

  getEditPreValue() {         //undo撤销
    if(this.state.editValue[0] > 1 && !this.props.listContentEach[2]) {
      let editCode = [];
      editCode.push(...this.state.editValue);
      editCode[0] -= 1;
      this.setState({ editValue : editCode });
      this.props.editListContentPre(
        [editCode[editCode[0]], this.props.listContentEach[1], this.props.listContentEach[2]],
        this.props.listKey
      );
    }
  }

  getEditLasValue() {        //redo前进
    if(this.state.editValue.length > this.state.editValue[0]+1 && !this.props.listContentEach[2]) {
      let editCode = [];
      editCode.push(...this.state.editValue);
      editCode[0] += 1;
      this.setState({ editValue : editCode });
      this.props.editListContentPre(
        [editCode[editCode[0]], this.props.listContentEach[1], this.props.listContentEach[2]],
        this.props.listKey
      );
    }
  }

  render() {
    return (
      <ListTable
        className = { this.props.listContentEach[1] ? 'focus' : null }                        
      >
        <div
          className = { this.props.listContentEach[1] ? 'tick focus' : 'tick' }
          onClick = { () => this.getTick() }
        ></div>
        { 
          this.props.listContentEach[2] ? 
          <input onKeyPress={ (e) => this.getEdit(e) }></input> : 
          <div onClick = { () => this.getEditTrue() } >{ this.props.listContentEach[0] }</div> 
        }
        <div className='undo' onClick={ () => this.getEditPreValue() }>undo</div>
        <div className='redo' onClick={ () => this.getEditLasValue() }>redo</div>
        <div className='delete' onClick={ () => this.getDelete() }>X</div>
      </ListTable>
    );
  }
}

export default List;