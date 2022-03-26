import React from "react";
import * as Style from "./StyledForm";
function FormComp({ children, ...restProps }) {
    return <Style.BackGround {...restProps}>{children} </Style.BackGround>

}

export default FormComp

FormComp.Modal = function Modal({ children, ...restProps }) {
    return <Style.Modal {...restProps}>{children}</Style.Modal>
}
FormComp.Container = function Container({ children, ...restProps }) {
    return <Style.Container {...restProps}>{children}</Style.Container>
}

FormComp.Form = function Form({ children, ...restProps }) {
    return <Style.Form {...restProps}>{children}</Style.Form>
}

FormComp.Header = function Header({ children, ...restProps }) {

    return <Style.Header {...restProps}>{children}</Style.Header>
}

FormComp.TabButton = function TabButton({ focus, children, ...restProps }) {

    return <Style.TabButton  {...restProps} >{children}</Style.TabButton>
}

FormComp.TabButtonContainer = function TabButtonContainer({ children, ...restProps }) {

    return <Style.TabButtonContainer {...restProps}>{children}</Style.TabButtonContainer>
}

FormComp.InputContainer = function InputContainer({ children, ...restProps }) {

    return <Style.InputContinaer {...restProps}>{children} </Style.InputContinaer>
}

FormComp.AddressContainer = function IAddressContainernputContainer({ children, ...restProps }) {

    return <Style.AddressContainer {...restProps}>{children} </Style.AddressContainer>
}
FormComp.FormContainer = function FormContainer({ children, ...restProps }) {

    return <Style.FormContainer {...restProps}>{children} </Style.FormContainer>
}
FormComp.Input = function Input({ ...restProps }) {
    return <Style.Input {...restProps} />
}

FormComp.Select = function Select({ children, ...restProps }) {
    return <Style.Select {...restProps} >
        {children}
    </Style.Select>
}

FormComp.Option = function Option({ children, ...restProps }) {
    return <Style.Option {...restProps}>
        {children}
    </Style.Option>
}

FormComp.RadioGroup = function RadioGroup({ ...restProps }) {
    return <Style.RadioGroup {...restProps} />
}

FormComp.RadioInput = function RadioInput({ ...restProps }) {
    return <Style.RadioInput {...restProps} />
}

FormComp.RadioLabel = function RadioLabel({ ...restProps }) {
    return <Style.RadioLabel {...restProps} />
}

FormComp.ImageGroup = function ImageGroup({ children, ...restProps }) {
    return <Style.ImageGroup {...restProps} >{children} </Style.ImageGroup>
}

FormComp.FileInputLabel = function FileInputLabel({ children, ...restProps }) {
    return <Style.FileInputLabel {...restProps} > {children} </Style.FileInputLabel>
}

FormComp.FileInput = function FileInput({ handleChange, fileType, ...restProps }) {
    return <Style.FileInput onChange={handleChange} accept={fileType} {...restProps} />
}
FormComp.AvatarPreview = function AvatarPreview({ ...restProps }) {
    return <Style.AvatarPreview {...restProps} />
}
FormComp.MainImagePreview = function MainImagePreview({ ...restProps }) {
    return <Style.MainImagePreview {...restProps} />
}
FormComp.Label = function Label({ children, ...restProps }) {

    return <Style.Label {...restProps}> {children} </Style.Label>
}

FormComp.SubmitButton = function SubmitButton({ children, ...restProps }) {
    return <Style.SubmitButton {...restProps}>{children}</Style.SubmitButton>
}

FormComp.Line = function Line({ ...restProps }) {
    return <Style.LINE {...restProps} />
}

FormComp.ConnectText = function ConnectText({ children, ...restProps }) {
    return <Style.ConnectText {...restProps}>{children}</Style.ConnectText>
}

FormComp.PasswordHint = function PasswordHint({ check, children, ...restProps }) {

    return <Style.PasswordHint {...restProps}>
        <i className="fas fa-check" style={{ color: "green", marginRight: "10px", display: check ? "inline" : "none" }}></i>
        <i className="fas fa-times" style={{ color: "red", marginRight: "10px", display: check ? "none" : "inline" }}></i>
        {children}</Style.PasswordHint>
}

FormComp.HintContainer = function HintContainer({ children, ...restProps }) {
    return <Style.HintContainer {...restProps}>{children}</Style.HintContainer>
}

FormComp.CloseButton = function HighLight({ ...restProps }) {
    return <Style.CloseButton {...restProps}><i className="fas fa-times"></i></Style.CloseButton>
}

FormComp.PostImageGroup = function ImageGroup({ children, ...restProps }) {
    return <Style.PostImageGroup {...restProps} >{children} </Style.PostImageGroup>
}