import React, { Component } from 'react';
import {
  TodosWrapper,
  TodosTitle,
  InputList
} from './style';
import Input from './Input';                        
import List from './InputList';
import Bottom from './InputBottom';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [],            //列表值和状态存储在list数组中，每一项第一个为列表值、第二个为是否被勾选状态、第三个为是否可编辑 
      status : 'All'        //列表显示状态，‘All’为全部显示、‘Active’为未完成显示、‘Completed’为已完成显示        
    }
  }

  getValue(value) {              //KeyPress触发事件，将新增值传入list数组中以列表形式显示，并且将input框值清空
    this.setState({ list : [...this.state.list, value] });
  }

  getList(value) {                               //改变列表值
    this.setState({ list : value });
  }

  getStatus(value) {                              //改变列表状态
    this.setState({ status : value });
  }

  deleteListEach(i) {                                //删除某一项
    this.setState({ list : this.state.list.filter((item, index) => {
      return i!==index;
    }) });
  }

  changeListEach(value, i) {                         //改变某一项的数据
    this.setState({ list : this.state.list.map((item, index) => {
      return (index!==i && item) || (index === i && value);
    }) });
  }

  render() {
    const showList = this.state.list.filter((item) => {
      switch(this.state.status) {
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
        <Input                     
          targetValue = { this.getValue.bind(this) }               //KeyPress触发事件，将新增值传入list数组中以列表形式显示，并且将input框值清空
          changeListContentAll = { this.getList.bind(this) }       //将列表所有设置为完成态或者未完成态
          listContent = { this.state.list }                        //将列表项传入
        ></Input>
        <InputList>               {/* 列表+列表底部 */}   
          {
            showList.map((item, index) => {
              return (
                <List
                  key = { index }
                  changeListContent = { this.changeListEach.bind(this) }       //将列表第n项设置为完成态或者未完成态
                  deleteListContent = { this.deleteListEach.bind(this) }       //将指定的某一项删除
                  editListContent = { this.changeListEach.bind(this) }         //键盘按键事件，当按下“enter”键时编辑完成某一项
                  editListContentY = { this.changeListEach.bind(this) }        //使某一项可编辑
                  editListContentPre = { this.changeListEach.bind(this) }      //undo撤销
                  editListContentLas = { this.changeListEach.bind(this) }      //redo前进
                  listContentEach = { item }                                   //将列表单项传入   
                  listKey = { index }                                          //将列表下标值传入
                ></List>
              );
            })
          }
          <Bottom                  
            clearListContentCom = { this.getList.bind(this) }      //将所有已完成项清空
            changeListStatus = { this.getStatus.bind(this) }       //将列表状态改变
            listContent = { this.state.list }                      //将列表项传入 
            listStatus = { this.state.status }                     //将列表显示状态传入
          ></Bottom>
        </InputList>              
      </TodosWrapper>
    );
  }
}

export default Todos;