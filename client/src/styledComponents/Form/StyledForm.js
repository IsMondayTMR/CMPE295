import styled from "styled-components";

const SubmitBtnNormal = '#006eff'
const SubmitBtnHover = '#00459e'

const inputBackground = '#f5f5f5'
const inputBorder = '1px solid #d6d6d6'

const passwordHintColor = '#41729c'
const backgroundColor = 'white'

export const Modal = styled.div`
    position: fixed;
    display: ${props => props.hide};
    height: 100vh;
    width: 100vw;
    top:0;
    left:0;
    background-color:black;
    opacity:0.6;
    z-index: 30;
`
export const BackGround = styled.div`
    position: fixed;
    width: ${(props) => props.width ? props.width : "450px"};
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 5%;
    background-color: ${backgroundColor};
    border-radius: 10px;
    display: ${props => props.hide};
    box-shadow: 5px 5px 20px #808080;
    z-index: 40;
    display: flex;

`

export const Container = styled.div`
    width: 90%;
    margin: 0 auto 3% auto;
    padding: 0;
    text-align: center;

`

export const Form = styled.form`
    display: ${props => props.active};
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
`

export const Header = styled.p`
    margin: 0;
    font-size: 25px;
    margin: 30px;
    font-weight: bolder;
`
export const TabButtonContainer = styled.div`
    width: 200px;
`
export const TabButton = styled.button`
    font-size: 18px;
    background-color: white;
    border: none;
    padding-bottom: 15px;
    border-bottom: ${props => props.borderActive};
    &:hover {
        color: blue;
        cursor: pointer;
    }
`
export const AddressContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
`
export const InputContinaer = styled.div`
    display: flex;
    flex-direction:${(props) => props.row ? "row" : "column"};
    justify-content: start;
    width: 95%;
    margin: 0 auto;
    margin-top: 10px;
`



export const FormContainer = styled.div`
    max-height:${(props) => props.maxHeight ? props.maxHeight : "500px"};
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
        width: 0 !important;
        background-color: transparent;
        background: transparent;
    }

    `
export const RadioGroup = styled.div`
    display: flex;
    align-items: flex-start;
`
export const RadioInput = styled.input`

`

export const RadioLabel = styled.label`
    font-size: 20px;
    width: 100%; 
    margin-bottom: 10px;
    text-align: left;
`
export const Input = styled.input`
    height: 40px;
    width: ${props => props.width ? props.width : null};
    margin: ${props => props.margin ? props.margin : null};
    margin-bottom: 20px;
    border-radius: 5px;
    border: ${props => props.touched ? "red 1px solid" : inputBorder};
    padding-left: 10px;
    font-size: 18px;
    background-color: ${inputBackground};
    ::-webkit-input-placeholder {
        font-size: 15px;
    }
    &:focus {
        outline: none;
    }

    &:hover {
        border: 1px solid #949494;
        cursor: pointer;
    }
`

export const FileInput = styled.input`
    display: ${(props) => props.display ? props.display : "none"};
`


export const FileInputLabel = styled.label`
    position: relative;
    bottom: 80px;
    display: none;
    &:hover {
        cursor: pointer;
    }
    
`
export const AvatarPreview = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    
`

export const MainImagePreview = styled.img`
    min-height: 150px;
    min-width: 150px;
    max-height: 150px;
    max-width: 150px;
    object-fit: cover;
`
export const ImageGroup = styled.div`
    display: flex;
    height: 150px;
    width: 150px;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    border-radius: 50%;
    &:hover {
        cursor: pointer;
    }
    &:hover  ${FileInputLabel}{
        display: block;
        opacity: 0.5;
    }
`
export const PostImageGroup = styled.div`

    width: 90%;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    border-radius: 50%;

`


export const Label = styled.label`
    font-size: ${props => props.fontSize ? props.fontSize : "20px"};
    width: 100%; 
    margin-bottom: 10px;
    text-align: left;
`
export const Link = styled.a`

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
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
    
`

export const LINE = styled.hr`
    height: 1px;
    background-color: #ccc;
    border: none;
    margin: 0;
`

export const HintContainer = styled.div`
    display: ${props => props.showHints ? "block" : "none"};
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

export const CloseButton = styled.button`
    position: absolute;
    border: none;
    background-color: ${backgroundColor};
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    &:hover {
        cursor: pointer;
    }
`

export const Select = styled.select`
`
export const Option = styled.option`
`
export const CardsContainer = styled.div`
    max-height:${(props) => props.maxHeight ? props.maxHeight : "500px"};
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0 !important
    }
    `
export const CardTitle = styled.h3`
    font-size: 20px;
`

export const CardInforContainer = styled.div`
    width: 60%;
`
export const Card = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    height: 75px;
    margin: 10px;
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const FormTitle = styled.h2`
    margin: 15px 0;

`

export const ItemImage = styled.img`
    width: 75px;
    height: 75px;
    object-fit: cover;
`

