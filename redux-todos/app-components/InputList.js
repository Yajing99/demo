import React, { Component } from 'react';
import {
  ListTable
} from '../style';
import { connect } from 'react-redux';
import  * as actionCreators  from '../app-store/action-creators';

class List extends Component {

  getEditPreValue() {         //undo撤销
    if(this.state.editValue[0] > 1 && !this.props.listContent[2]) {
      let editCode = [];
      editCode.push(...this.state.editValue);
      editCode[0] -= 1;
      this.setState({ editValue : editCode });
      this.props.handleEditValue(this.props.listKey, this.props.listContent, editCode[editCode[0]]);
    }
  }

  getEditLasValue() {        //redo前进
    if(this.state.editValue.length > this.state.editValue[0]+1 && !this.props.listContent[2]) {
      let editCode = [];
      editCode.push(...this.state.editValue);
      editCode[0] += 1;
      this.setState({ editValue : editCode });
      this.props.handleEditValue(this.props.listKey, this.props.listContent, editCode[editCode[0]]);
    }
  }

  render() {
    const { listContent, listKey, PastContent, FutureContent } = this.props;
    const { handleTick, handleEdit, handleEditTrue, handleEditPreValue, handleEditLasValue, handleDelete } = this.props;
    return (
      <ListTable
        className = { listContent[1] ? 'focus' : null }                        
      >
        <div
          className = { listContent[1] ? 'tick focus' : 'tick' }
          onClick = { () => handleTick(listKey, listContent) }
        ></div>
        { 
          listContent[2] ? 
          <input onKeyPress={ (e) => handleEdit(e, listContent, listKey) }></input> : 
          <div onClick = { () => handleEditTrue(PastContent, listContent, listKey) } >{ listContent[0] }</div> 
        }
        <div className='undo' onClick={ () => handleEditPreValue(PastContent, FutureContent, listContent, listKey) }>undo</div>
        <div className='redo' onClick={ () => handleEditLasValue(PastContent, FutureContent, listContent, listKey) }>redo</div>
        <div className='delete' onClick={ () => handleDelete(listKey) }>X</div>
      </ListTable>
    );
  }
}

const mapDispatch = (dispatch) => ({
  handleTick(listKey, item) {                           //将列表某一单项设置为完成态或者未完成态
    dispatch(actionCreators.getChange([item[0], item[1] ? false : true, item[2]], listKey));
  },

  handleDelete(listKey) {                               //将指定的某一项删除
    dispatch(actionCreators.getDelete(listKey));
  },

  handleEdit(e, item, listKey) {                               //将编辑成功的项更改到list中
    if(e.nativeEvent.keyCode === 13 && e.target.value !== '') { 
      dispatch(actionCreators.getChangeFuture([], [e.target.value, item[1], false], listKey));     
    }
  },

  handleEditTrue(past, item, listKey) {                         //使某一项可编辑,且同步更新历史值
    dispatch(actionCreators.getChangePast((past.length ? past.concat(item[0]) : [item[0]]), [item[0], item[1], true], listKey));  
  },

  handleEditPreValue(past, future, item, listKey) {                                    //undo更改list
    if(past.length) {
      dispatch(actionCreators.getChangeAll(past.slice(0, past.length-1), [item[0]].concat(future), [past[past.length-1], item[1], item[2]], listKey));
    }                                                   
  },

  handleEditLasValue(past, future, item, listKey) {                                   //redo更改list
    if(future.length) {
      dispatch(actionCreators.getChangeAll(past.concat(item[0]), future.slice(1), [future[0], item[1], item[2]], listKey));
    }
  }
});

export default connect(null, mapDispatch)(List);