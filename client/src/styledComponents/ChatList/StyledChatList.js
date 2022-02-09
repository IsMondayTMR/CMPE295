import styled from "styled-components";

export const ChatContainer = styled.div`
    position: relative;
    height: 100px;
    width:100%;
    border-radius: 10px;
    
    &:hover {
        background-color: #ededed;
    }
`

export const ChatTitle = styled.h1`
    font-size: 30px;
    margin: 10px;
`

export const ChatNewMessageSign = styled.div`
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: #6bd0ff;
    top: 10px;
    right: 20px;
    border-radius: 5px;
`

export const ChatNewMessage = styled.div`
    font-size: 20px;
    margin: 0 20px 0 20px;
`