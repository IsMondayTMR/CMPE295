import styled from "styled-components";

export const ChatContainer = styled.div`
    position: relative;
    height: 100px;
    width:100%;
    border-radius: 10px;
    display: flex;
    &:hover {
        background-color: #ededed;
    }
`
export const ContentContainer = styled.div`
`
export const ChatTitle = styled.h1`
    font-size: 30px;
    margin: 10px;
    color :  rgb(12, 125, 231);;
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

export const Image = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
`

export const ImageName = styled.div`
    min-width: 100px;
    min-height: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-weight: bolder;
    background-color: #462bb3;
`

export const ChatListTitle = styled.h2`
    font-size: 30px;
    margin: 10px 0;
    color :  rgb(12, 125, 231);;
`