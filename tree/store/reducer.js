import * as constants from './constants';
import { defaultState } from './default-state';
import { fromJS } from 'immutable';

export default(state = defaultState, action) => {
  let treeDataCode = JSON.parse(JSON.stringify(state.get('treeData').toJS()));   //深拷贝state中的treeData树
  let treeCode = '', treeCodeArr = [];                  //treeCode为遍历treeDataCode的指针，treeCodeArr为到点击节点经过节点的数组（倒序）
  //递归子树将checked改变
  let recursiveTree = (root, checked) => {                                    
    root && root.forEach((item) => {
      item.checked = checked;
      item.children && recursiveTree(item.children, checked);
    });
  }
  //递归子树比较各节点的checked值若有一个不同返回false，同时将之前已经递归得出的checked值部分忽略只看最顶上的节点checked值进行比较
  let recursiveAccount = (root, stopRoot, checked) => {                
    return root.children ? root.children.every((item) => {
      if(item.checked !== checked) {
        return false;
      } else if(item !== stopRoot) {
        return recursiveAccount(item, stopRoot, checked);
      } else {
        return true;
      }
    }) : true;
  }
  //遍历数组直到找到点击节点, 同时需要时将经过的节点存进数组treeCodeArr
  let findTargetNode = (keyArr, treeCodeArr = '') => {
    let target = treeDataCode[keyArr[0]];
    for(let i = 1, len = keyArr.length; i < len; i++) {
      treeCodeArr !== ''  && treeCodeArr.unshift(target);
      target = target.children[keyArr[i]];
    }
    return target;
  }

  switch(action.type) {
    case constants.CHANGE_EXPENDED :                          //修改某个expended值，使得某一列展开或收起
      treeCode = findTargetNode(action.keyArr);
      treeCode.expended = treeCode.expended ? false : true;
      return state.set('treeData', fromJS(treeDataCode));
    case constants.CHANGE_CHECKED :                          //修改某项全选或未选或未全选，同时改变与其相关的父与子
      action.checked = action.checked === 'ALL_SELECTED' ? 'NOT_SELECTED' : 'ALL_SELECTED';  
      treeCode = findTargetNode(action.keyArr, treeCodeArr);
      treeCode.checked = action.checked;    //将点击的节点checked值改变
      treeCodeArr.unshift(treeCode);        //将点击的节点进入数组
      //遍历数组treeCodeArr
      for(let i = 1, len = treeCodeArr.length; i < len; i++) {
        let pos = recursiveAccount(treeCodeArr[i], treeCodeArr[i-1], action.checked);
        treeCodeArr[i].checked = pos ? action.checked : 'PART_SELECTED';
      }                           
      recursiveTree(treeCode.children, action.checked);       //递归树将子节点checked值改为和点击节点一样的值            
      return state.set('treeData', fromJS(treeDataCode));
    default : 
      return state;
  }
};