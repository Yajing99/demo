import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Node
} from './style';
import * as actionCreators from './store/action-creators';

class TreeNode extends Component {
  render() {
    const { expended, nodeKey, checked } = this.props;
    const  { handleExpended, handleChecked } = this.props;
    return (
      <Node>                         
        { expended !== undefined && 
            <div  
              className = 'expended'
              onClick = { () => handleExpended(nodeKey) }
            >{ expended ? '-' : '+' }</div> 
        }
        <div 
          className = { checked === 'ALL_SELECTED' ? 'checked all' : 'checked' }
          onClick = { () => handleChecked(nodeKey, checked) }
        >
          { checked === 'PART_SELECTED' ? <div className = 'part'></div> : '' }
          { checked === 'ALL_SELECTED' ? <div className = 'all'>✔</div> : '' }
        </div>
        { this.props.title }
      </Node>
    );
  }
}

const mapDispatch = (dispatch) => ({
  handleExpended(key) {                                       //将某个列表展开或收起
    const keyArr = key.split('-').slice(1);
    dispatch(actionCreators.getExpended(keyArr));
  },
  handleChecked(key, checked) {                               //将某项全选或未选或未全选，同时改变与其相关的父与子
    const keyArr = key.split('-').slice(1);
    dispatch(actionCreators.getChecked(keyArr, checked));
  }
});

export default connect(null, mapDispatch)(TreeNode);