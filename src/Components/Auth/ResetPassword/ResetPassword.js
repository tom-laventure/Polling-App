import React, { useState } from 'react'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import classes from './Login.module.css'
import PopUp from '../../PopUps/FormPopUp/FormPopUp'
import Header from '../../UI/Header/Header'

const Login = (props) => {
    const [userInfo, setUserInfo] = useState({
        form: {
            email: {
                elementConfig: {
                    type: 'email',
                    inputType: 'text',
                    label: 'Email'
                },
                validation: {
                },
                valid: false,
                value: '',

            }
        }
    })

    // const Login = () => {

    // }

    const change = (e) => {
        let temp = { ...userInfo }
        temp.email = e.target.value;
        setUserInfo(temp)
    }


    let formElementsArray = [];
    for(let element in userInfo.form){
        formElementsArray.push(element)
    }
    let Inputs = formElementsArray.map((i) => {
        let temp = userInfo.form[i];
        return <Input inputtype={temp.elementConfig.inputType} type={temp.elementConfig.type} onChange={(e) => change(e, i)} label={temp.elementConfig.label} key={i} />
    })

    return (
            <PopUp>
                <div className={classes.headerContainer}>
                    <Header headerType="h3" content="Reset Password"/>
                </div>
                {Inputs}
                <div className={classes.buttonContainer}>
                    <Button value="Rset Password" type="submit"/>
                    <Button onClick={props.switch} value="Register" type="button" />
                </div>
            </PopUp>
    )
}

export default Login