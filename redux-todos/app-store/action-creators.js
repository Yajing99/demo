import * as constants from './constants';

export const getChangeList = (list) => ({                  //更改list
  type : constants.CHANGE_LIST,
  list : list
});

export const getValue = (data) => ({                       //添加一项新的值
  type : constants.ADD_LIST_ITEM,
  data : data 
});

export const getDisplay = (status) => ({                  //更改status显示状态
  type : constants.CHANGE_DISPLAY,
  status : status
});

export const getDelete = (index) => ({                     //将指定一项删除
  type : constants.DELETE_LIST_ITEM,
  index : index
});

export const getChange = (item, index) => ({               //改变一项list 
  type : constants.CHANGE_LIST_ITEM,
  item : item,
  index : index
});

export const getChangeFuture = (future, item, index) => ({
  type : constants.CHANGE_FUTURE,
  future : future,
  item : item,
  index : index
});

export const getChangePast = (past, item, index) => ({
  type : constants.CHANGE_PAST,
  past : past,
  item : item,
  index : index 
});

export const getChangeAll = (past, future, item, index) => ({
  type : constants.CHANGE_ALL,
  past : past,
  future : future,
  item : item,
  index : index
});