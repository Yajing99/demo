import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TreeWrapper,
  TreeContainer,
  TreeBody
} from './style';
import TreeNode from './treeNode';

class Tree extends Component {

  renderTreeNodes = data =>
    data.map(item => {
      if(item.children) {
        return (
          <React.Fragment key={ item.key }>
            <TreeNode                                     //树的单枝
              key = { item.key } 
              title = { item.title } 
              nodeKey = { item.key }
              checked = { item.checked }
              expended = { item.expended }
            >
            </TreeNode>
            { item.expended ? <ul>{ this.renderTreeNodes(item.children) }</ul> : '' }
          </React.Fragment>
        );
      }
      return <TreeNode  
                key = { item.key }
                title = { item.title } 
                nodeKey = { item.key }
                checked = { item.checked }
                expended = { item.expended }
              />;
    });

  render() {
    const { treeData } = this.props;
    return (
      <TreeWrapper>
        <TreeContainer>
          <TreeBody>
            { this.renderTreeNodes(treeData) } 
          </TreeBody>
        </TreeContainer>
      </TreeWrapper>
    );
  }

}

const mapState = (state) => {
  return {
    treeData : state.get('treeData').toJS()
  }
};

export default connect(mapState, null)(Tree);