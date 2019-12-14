import styled from 'styled-components';

export const TreeWrapper = styled.div`
  width : 100%;
  height : 100%;
  font-size : 12px;
  font-family: PingFangSC-Regular;
  color: #33383D;
  overflow : hidden;
`;

export const TreeContainer = styled.div`
  width : 218px;
  height : 443px;
  display : flex;
  justify-content : center;
  align-items : center;
  background : #fafbfc;
  margin : 50px auto auto auto;
  border-radius : 0.5px;
  overflow : hidden;
`;

export const TreeBody = styled.ul`
  width : 188px;
  height : 413px;
  background : #fff; 
  // margin : 21px auto;
  overflow : auto;
  padding-left : 10px;
`;

export const Node = styled.li`
  width : 188px;
  line-height : 28px;
  display : flex;
  flex-wrap : wrap;
  flex-shrink : 0;
  align-items : center;
  font-size : 12px;
  // margin : auto 16px auto 16px;
  div {
    width : 14px;
    height : 14px;
    border : 1px solid #bfc3c7;
    border-radius : 2px;
    cursor : pointer;
  }
  .expended {
    display : flex;
    justify-content : center;
    align-items : center;
    color : #bfc3c7;
    font-weight : 700;
    font-size : 16px;
    margin-right : 8px;
  }
  .checked {
    display : flex;
    justify-content : center;
    align-items : center;
    margin-right : 4px;
    .part {
      width : 8px;
      height : 8px;
      background-color : #1890ff;
      border : none;
    } 
    .all {
      background-color : #1890ff;
      color : #fff;
      font-size : 8px;
      border : none;
      text-align : center;
      line-height : 14px;
    }
  }
  .all {
    border : none;
  }
`;