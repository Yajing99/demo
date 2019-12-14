import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  PastValue : [],               //记录过去状态数组 
  FutureValue : [],             //记录未来状态数组
  status : 'All',                //列表显示状态，‘All’为全部显示、‘Active’为未完成显示、‘Completed’为已完成显示  
  list : []                     //列表值和状态存储在list数组中，每一项第一个为列表值、第二个为是否被勾选状态、第三个为是否可编辑 
});

export default(state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_LIST :
      return state.set('list', fromJS(action.list));
    case constants.ADD_LIST_ITEM :
      return state.merge({
        list : fromJS([...state.get('list').toJS(), action.data]),
        PastValue : fromJS([...state.get('PastValue').toJS(), []]),
        FutureValue : fromJS([...state.get('FutureValue').toJS(), []])
      });
    case constants.DELETE_LIST_ITEM :
      return state.merge({
        list : fromJS(state.get('list').toJS().filter((item, index) => {
          return index !== action.index;
        })),
        PastValue : fromJS(state.get('PastValue').toJS().filter((item, index) => {
          return index !== action.index;
        })),
        FutureValue : fromJS(state.get('FutureValue').toJS().filter((item, index) => {
          return index !== action.index;
        }))
      });
    case constants.CHANGE_LIST_ITEM :
      return state.set('list', fromJS(state.get('list').toJS().map((item, index) => {
          return index === action.index ? action.item : item;
      })));
    case constants.CHANGE_DISPLAY :
      return state.set('status', action.status);
    case constants.CHANGE_FUTURE :
      return state.merge({
        FutureValue : fromJS(state.get('FutureValue').toJS().map((item, index) => {
          return index === action.index ? action.future : item;
        })),       
        list : fromJS(state.get('list').toJS().map((item, index) => {
          return index === action.index ? action.item : item;
        }))
      });
    case constants.CHANGE_PAST :
      return state.merge({
        PastValue : fromJS(state.get('PastValue').toJS().map((item, index) => {
          return index === action.index ? action.past : item;
        })),
        list : fromJS(state.get('list').toJS().map((item, index) => {
          return index === action.index ? action.item : item;
        }))
      });
    case constants.CHANGE_ALL :
      return state.merge({
        PastValue : fromJS(state.get('PastValue').toJS().map((item, index) => {
          return index === action.index ? action.past : item;
        })),
        FutureValue : fromJS(state.get('FutureValue').toJS().map((item, index) => {
          return index === action.index ? action.future : item;
        })),          
        list : fromJS(state.get('list').toJS().map((item, index) => {
          return index === action.index ? action.item : item;
        }))
      });
    default : 
      return state;
  }
}

