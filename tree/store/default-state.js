import { fromJS } from 'immutable';

export const defaultState = fromJS({
  treeData : [{
    title : '北森',
    key : '0-0',
    checked : 'NOT_SELECTED'
  }, {
    title : '经理室',
    key : '0-1',
    checked : 'NOT_SELECTED'
  }, {
    title : 'PaaS平台事业部',
    key : '0-2',
    expended : false,
    checked : 'NOT_SELECTED',
    children : [{
      title : 'PaaS体验部',
      key : '0-2-0',
      expended : false,
      checked : 'NOT_SELECTED',
     children : [{
        title : '视觉设计组',
        key : '0-2-0-0',
        expended : false,
        checked : 'NOT_SELECTED',
        children : [{
          title : '规范设计组',
          key : '0-2-0-0-0',
          checked : 'NOT_SELECTED'
        }, {
          title : '业务设计组',
          key : '0-2-0-0-1',
          checked : 'NOT_SELECTED' 
        }]    
      }, {
        title : '交互设计组',
        key : '0-2-0-1',
        checked : 'NOT_SELECTED',
        }]
    }, {
      title : 'PaaS前端资源部',
      key : '0-2-1',
      expended : false,
      checked : 'NOT_SELECTED',
     children : [{
        title : '前端架构组',
        key : '0-2-1-0',
        checked : 'NOT_SELECTED',
        }, {
        title : '流量引擎前端开发组',
        key : '0-2-1-1',
        checked : 'NOT_SELECTED',
        }, {
        title : 'Ocean前端开发组',
        key : '0-2-1-2',
        checked : 'NOT_SELECTED'   
      }]
    }]
  }, {
    title : '市场部',
    key : '0-3',
    expended : false,
    checked : 'NOT_SELECTED',
    children : [{
      title : '电话营销部',
      key : '0-3-0',
      checked : 'NOT_SELECTED',   
    }, {
      title : '数字营销部',
      key : '0-3-1',
      checked : 'NOT_SELECTED',     
    }, {
      title : '整合营销部',
      key : '0-3-2',
      expended : false,
      checked : 'NOT_SELECTED',
     children : [{
        title : 'MSG市场业务组',
        key : '0-3-2-0',
        checked : 'NOT_SELECTED'
      }, {
        title : 'ESG市场业务组',
        key : '0-3-2-1',
        checked : 'NOT_SELECTED'
      }, {
        title : 'NSG市场业务组',
        key : '0-3-2-2',
        checked : 'NOT_SELECTED'
      }]   
    }, {
      title : '品牌公关部',
      key : '0-3-3',
      checked : 'NOT_SELECTED'
    }]
  }]
});