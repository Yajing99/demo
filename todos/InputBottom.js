import React, { Component } from 'react';
import {
  ListBottom
} from './style';

class Bottom extends Component {
  getClear() {              //将所有已完成项清空
    this.props.clearListContentCom(this.props.listContent.filter((item) => {
      return !item[1];
    }));
  }

  getUnTickAccount() {      //得到未完成项还有多少个
    return this.props.listContent.filter((item) => {
      return !item[1];
    }).length;
  }

  render() {
    return (
      this.props.listContent.length ? (
        <ListBottom key='listBottom'>                           
        <div className='left'>{ this.getUnTickAccount() } item left</div>
        <div 
          className = { this.props.listStatus === 'All' ? 'all focused' : 'all' }
          onClick = { () => this.props.changeListStatus('All') }      //显示所有项
        >All</div>
        <div 
          className = { this.props.listStatus === 'Active' ? 'active focused' : 'active' }
          onClick = { () => this.props.changeListStatus('Active') }       //显示未完成项
        >Active</div>
        <div 
          className = { this.props.listStatus === 'Completed' ? 'completed focused' : 'completed' }
          onClick = { () => this.props.changeListStatus('Completed') }       //显示已完成项
        >Completed</div>
        { this.props.listContent.length - this.getUnTickAccount() ? 
            <div 
              className = 'clear'
              onClick = { () => this.getClear() }                  
            >Clear completed</div> 
        : null }
        </ListBottom> 
        ) : ''
    );
  }
}

export default Bottom;