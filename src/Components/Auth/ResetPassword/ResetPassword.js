import React, { useState, useContext } from 'react'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import classes from './ResetPassword.module.css'
import PopUp from '../../UI/PopUps/FormPopUp/FormPopUp'
import Header from '../../UI/Header/Header'
import { StoreContext } from '../../../Store/StoreContext'

const ResetPassword = (props) => {
    const { state, dispatch, actions, fire } = useContext(StoreContext)
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

    const change = (e, i) => {
        let temp = { ...userInfo }
        temp.form[i].value = e.target.value
        setUserInfo(temp)
    }


    const ResetPassword = (e) => {
        e.preventDefault();
        fire.doPasswordReset(userInfo.form.email.value).then(data => {
        }).catch(error => {
            actions.setErrorState(error)
        })
    }

    let formElementsArray = [];
    for (let element in userInfo.form) {
        formElementsArray.push(element)
    }
    let Inputs = formElementsArray.map((i) => {
        let temp = userInfo.form[i];
        return <Input inputtype={temp.elementConfig.inputType} type={temp.elementConfig.type} onChange={(e) => change(e, i)} label={temp.elementConfig.label} key={i} />
    })

    return (
        <PopUp>
            <form onSubmit={(e) => ResetPassword(e)}>
                <div className={classes.headerContainer}>
                    <Header headerType="h3" content="Reset Password" />
                </div>
                {Inputs}
                <div className={classes.buttonContainer}>
                    <Button value="Reset Password" type="submit" />
                    <Button onClick={(e) => props.switch("login", e)} value="Return to Login" type="button" />
                </div>
            </form>
        </PopUp>
    )
}

export default ResetPassword