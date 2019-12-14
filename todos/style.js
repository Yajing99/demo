import styled from 'styled-components';

export const TodosWrapper = styled.div`
    width : 100%;
    height : 100%;
    overflow : auto;
    font : 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight : 100;
`;

export const TodosTitle = styled.div`
    width : 270px;
    margin : 50px auto auto auto;
    text-align : center;
    font-size : 100px;
    color : rgba(175, 47, 47, 0.15); 
`;

export const TodosInputContent = styled.div`
    position : relative;
    width : 550px;
    height : 65px;
    margin : auto;
    .delete {
        position : absolute;
        left : 25px;
        top : 20px;
        transform : rotate(90deg);
        font-size : 22px; 
        cursor : pointer;
        color : #bfbfbf;
        z-index : 1;
    }
    .all {
        color : #4d4d4d;
    }
`;

export const TodosInput = styled.input`
    display : block;
    width : 474px;
    height : 33px;
    background : rgba(255, 255, 255, .5);
    box-shadow : inset 0 -2px 1px rgba(0 ,0 , 0, 0.08);
    padding : 16px 16px 16px 60px;
    border : none;
    outline : none;  
    font-size : 24px;
    font-weight : 100;
    &::placeholder {
        font-style : italic; 
        color : #bfbfbf;
    }
`;

export const InputList = styled.div`
    margin : auto;
    width : 550px;
`;

export const ListTable = styled.div`
    position : relative;
    width : 369px;
    min-height : 30px;   
    font-size : 24px;
    padding : 15px 170px 15px 10px;
    color : #4d4d4d;
    font-weight : 300;
    border-bottom : 1px solid #eee;
    background-color : #fff;
    word-wrap : break-word;
    &.focus {
        color : #d9d9d9;
        text-decoration : line-through;
    }
    .tick {
        float : left;
        width : 40px;
        height : 40px;  
        padding-right : 10px;
        background-position : center left;
        background-image : url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
        background-repeat : no-repeat;
    }
    .focus {
        background-image : url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
    }
    :hover .delete {
        position : absolute;
        top : 20px;
        left : 510px;
        transform : rotate(90deg);
        font : 24px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight : 300;
        cursor : pointer;
    }
    :hover .undo {
        position : absolute;
        top : 25px;
        left : 420px;
        padding : 1px 2px;
        font-weight : 300;
        font : 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        border : 1px solid rgba(175, 47, 47, 0.2);
        cursor : pointer;
    }
    :hover .redo {
        position : absolute;
        top : 25px;
        left : 460px;
        padding : 1px 2px;
        font-weight : 300;
        font : 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        border : 1px solid rgba(175, 47, 47, 0.2);
        cursor : pointer;
    }
    .delete, .undo, .redo {
        font-size : 0;
    }
`;

export const ListBottom = styled.div`
    position : relative;
    width : 550px;
    height : 30px;
    background-color : #fff;
    box-shadow : 
        0 1px 1px rgba(0, 0, 0, 0.2), 
        0 8px 0 -3px #f6f6f6, 
        0 9px 1px -3px rgba(0, 0, 0, 0.2), 
        0 16px 0 -6px #f6f6f6, 
        0 17px 2px -6px rgba(0, 0, 0, 0.2);
    color : #777;
    font-weight : 300;
    .left {
        position : absolute;
        left : 10px;
        top : 7px;
    }
    .all {
        position : absolute;
        left : 180px;
        top : 5px;
        padding : 2px 7px;
        cursor : pointer;
    }
    .active {
        position : absolute;
        left : 220px;
        top : 5px;
        padding : 2px 7px;
        cursor : pointer;
    }
    .completed {
        position : absolute;
        left : 270px;
        top : 5px;
        padding : 2px 7px;
        cursor : pointer;
    }
    .focused {
        border : 1px solid rgba(175, 47, 47, 0.2);
    }
    .clear {
        position : absolute;
        left : 430px;
        top : 7px;
        padding : 2px 7px;
        cursor : pointer;
        :hover {
            text-decoration : underline;
        }
    }
`;