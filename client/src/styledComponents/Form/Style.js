import styled from "styled-components";

const SubmitBtnNormal = '#006eff'
const SubmitBtnHover = '#00459e'

const inputBackground = '#f5f5f5'
const inputBorder = '1px solid #d6d6d6'

const passwordHintColor = '#41729c'

export const BackGround = styled.div `
    
    position: fixed;
    width: 450px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 5%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 20px #808080;
    display: ${props => props.hide};
`

export const Container = styled.div `
    width: 90%;
    margin: 0 auto 3% auto;
    padding: 0;
    text-align: center;

`

export const Form = styled.form `
    display: ${props => props.active}
`

export const Header = styled.p `
    margin: 0;
    font-size: 25px;
    margin: 30px;
    font-weight: bolder;
`
export const TabButtonContainer = styled.div `
    width: 200px;
`
export const TabButton = styled.button `
    font-size: 18px;
    background-color: white;
    border: none;
    padding-bottom: 15px;
    border-bottom: ${props => props.borderActive};
    &:hover {
        color: blue;
    }
`

export const InputContinaer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: start;
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;
`
export const Input = styled.input`
    height: 40px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: ${inputBorder};
    padding-left: 10px;
    font-size: 18px;
    background-color: ${inputBackground};

    ::-webkit-input-placeholder {
        font-size: 15px;
    }
    &:focus {
        outline: none;
    }
`
export const Label = styled.label`
    font-size: 20px;
    width:50px; 
    margin-bottom: 10px;

    
`
export const Link = styled.a `

`

export const SubmitButton = styled.button`
    height: 45px;
    width: 95%;
    margin: 20px auto;
    background-color: ${SubmitBtnNormal};
    font-size: 18px;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: ${SubmitBtnHover};
    }
`

export const LINE = styled.hr`
    height: 1px;
    background-color: #ccc;
    border: none;
    margin: 0;
`

export const HintContainer = styled.div`

    text-align: start;
    margin-left: 30px;
`
export const PasswordHint = styled.p`
    font-size: 12px;
    color: ${passwordHintColor};
    margin: 0;
    margin-bottom: 2px;
    
`

export const ConnectText = styled.p`
    margin: 20px 0 20px 0;
    font-size: 20px;
    color: #8f8f8f;
`

export const CloseButton = styled.div `
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
`