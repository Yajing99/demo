import React, { Component } from 'react';
import {
  ListBottom
} from '../style';
import { connect } from 'react-redux';
import  * as actionCreators  from '../app-store/action-creators';

class Bottom extends Component {
  getUnTickAccount() {      //得到未完成项还有多少个
    return this.props.list.filter((item) => {
      return !item[1];
    }).length;
  }

  render() {
    return (
      this.props.list.length ? (
        <ListBottom key='listBottom'>                           
        <div className='left'>{ this.getUnTickAccount() } item left</div>
        <div 
          className = { this.props.status === 'All' ? 'all focused' : 'all' }
          onClick = { () => this.props.handleDisplay('All') }      //显示所有项
        >All</div>
        <div 
          className = { this.props.status === 'Active' ? 'active focused' : 'active' }
          onClick = { () => this.props.handleDisplay('Active') }       //显示未完成项
        >Active</div>
        <div 
          className = { this.props.status === 'Completed' ? 'completed focused' : 'completed' }
          onClick = { () => this.props.handleDisplay('Completed') }       //显示已完成项
        >Completed</div>
        { this.props.list.length - this.getUnTickAccount() ? 
            <div 
              className = 'clear'
              onClick = { () => this.props.handleClear(this.props.list) }                  
            >Clear completed</div> 
        : null }
        </ListBottom> 
        ) : ''
    );
  }
}

const mapState = (state) => {
  return {
    list : state.get('list').toJS(),
    status : state.get('status')
  }
};

const mapDispatch = (dispatch) => ({
  handleClear(list) {              //将所有已完成项清空
    const listCode = list.filter((item) => {
      return !item[1];
    });
    dispatch(actionCreators.getChangeList(listCode));
  },
  handleDisplay(status) {         //更改显示状态是全部或者已完成或者未完成
    dispatch(actionCreators.getDisplay(status));
  }
});

export default connect(mapState, mapDispatch)(Bottom);