import React, { Component } from 'react';
import {
  TodosWrapper,
  TodosTitle,
  InputList
} from './style';
import Input from './app-components/Input';                        
import List from './app-components/InputList';
import Bottom from './app-components/InputBottom';
import { connect } from 'react-redux';

class Todos extends Component {
  render() {
    const showList = this.props.list.filter((item) => {
      switch(this.props.status) {
        case 'Active' :
          return !item[1];
        case 'Completed' :
          return item[1];
        default :
          return item;
      }
    });

    return ( 
      <TodosWrapper>
        <TodosTitle>todos</TodosTitle>  
        {/* 输入框  */}
        <Input></Input>
        <InputList>               {/* 列表+列表底部 */}   
          {
            showList.map((item, index) => {
              return (
                <List 
                  key = { index }
                  listKey = { index }
                  listContent = { item }
                  PastContent = { this.props.PastValue[index] }
                  FutureContent = { this.props.FutureValue[index] }
                ></List>
              );
            })
          }
          <Bottom></Bottom>
        </InputList>              
      </TodosWrapper>
    );
  }
}

const mapState = (state) => {
  return {
    list : state.get('list').toJS(),
    status : state.get('status'),
    PastValue : state.get('PastValue').toJS(),
    FutureValue : state.get('FutureValue').toJS()
  }
};

export default connect(mapState)(Todos);