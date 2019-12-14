import * as constants from './constants';

export const getExpended = (keyArr) => ({             //将某个列表的expended修改为展开或收起
  type : constants.CHANGE_EXPENDED,
  keyArr : keyArr
});

export const getChecked = (keyArr, checked) => ({         //将某项全选或未选或未全选，同时改变与其相关的父与子
  type : constants.CHANGE_CHECKED, 
  keyArr : keyArr,
  checked : checked
});