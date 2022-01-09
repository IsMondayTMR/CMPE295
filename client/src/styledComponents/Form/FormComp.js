import React from 'react'
import * as Style from './StyleForm'
function FormComp ({children, ...restProps}) {
    return <Style.BackGround {...restProps}> {children} </Style.BackGround>

}

export default FormComp

FormComp.Modal = function Modal({children, ...restProps}) {
    return <Style.Modal {...restProps}> {children}</Style.Modal>
}
FormComp.Container = function Container({children, ...restProps}) {
    return <Style.Container {...restProps}> {children}</Style.Container>
}

FormComp.Form = function Form({children, ...restProps}) {
    return <Style.Form {...restProps}> {children}</Style.Form>
}

FormComp.Header = function Header({children, ...restProps}) {

    return <Style.Header {...restProps}> {children}</Style.Header>
}

FormComp.TabButton = function TabButton({focus, children, ...restProps}) {
    
    return <Style.TabButton  {...restProps} > {children}</Style.TabButton>
}

FormComp.TabButtonContainer = function TabButtonContainer({children, ...restProps}) {
    
    return <Style.TabButtonContainer {...restProps}> {children}</Style.TabButtonContainer>
}

FormComp.InputContainer = function InputContainer({children, ...restProps}) {

    return <Style.InputContinaer {...restProps}> {children} </Style.InputContinaer>
}

FormComp.Input = function Input({...restProps}) {
    return <Style.Input {...restProps}/>
}

FormComp.Label = function Label({children, ...restProps}) {

    return <Style.Label {...restProps}> {children} </Style.Label>
}

FormComp.SubmitButton = function SubmitButton({children, ...restProps}) {
    return <Style.SubmitButton {...restProps}>{children}</Style.SubmitButton>
}

FormComp.Line = function Line({...restProps}) {
    return <Style.LINE {...restProps}/>
}

FormComp.ConnectText = function ConnectText({children, ...restProps}) {
    return <Style.ConnectText {...restProps}>{children}</Style.ConnectText>
}

FormComp.PasswordHint = function PasswordHint({children, ...restProps}) {
    return <Style.PasswordHint {...restProps}>{children}</Style.PasswordHint>
}

FormComp.HintContainer = function HintContainer({children, ...restProps}) {
    return <Style.HintContainer {...restProps}>{children}</Style.HintContainer>
}

FormComp.CloseButton = function HighLight({ ...restProps}) {
    return <Style.CloseButton {...restProps}><i className="fas fa-times"></i></Style.CloseButton>
}