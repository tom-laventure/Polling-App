import React, { useState, useContext, useEffect } from 'react'
import FormPopUp from '../../UI/PopUps/FormPopUp/FormPopUp'
import Input from '../../UI/Input/Input'
import Header from '../../UI/Header/Header'
import Button from '../../UI/Button/Button'
import classes from './Register.module.css'
import { StoreContext } from '../../../Store/StoreContext'

const Register = (props) => {
    const { state, dispatch, actions, fire, axiosInstance } = useContext(StoreContext)
    const [userInfo, setUserInfo] = useState({
        form: {
            firstName: {
                elementConfig: {
                    type: 'firstName',
                    inputType: 'text',
                    label: 'First Name'
                },
                validation: {
                },
                valid: false,
                value: '',
            },
            lastName: {
                elementConfig: {
                    type: 'lastName',
                    inputType: 'text',
                    label: 'Last Name'
                },
                validation: {
                },
                valid: false,
                value: '',
            },
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
            },
            password: {
                elementConfig: {
                    type: 'password',
                    inputType: 'text',
                    label: 'Password'
                },
                validation: {
                    match: 'confirmPassword',
                    minLength: 5
                },
                valid: false,
                value: '',
            },
            confirmPassword: {
                elementConfig: {
                    type: 'password',
                    inputType: 'text',
                    label: 'Confirm Password'
                },
                validation: {
                    match: 'password',
                    minLength: 5
                },
                valid: false,
                value: '',
            }
        }
    })

    useEffect(()=> {

    }, [userInfo])

    const change = (e, i) => {
        let temp = { ...userInfo }
        temp.form[i].value = e.target.value
        setUserInfo(temp)
    }

    const checkValid = () => {
        let flag = true;
        for (let element in userInfo.form) {
            for (let rule in userInfo.form[element].validation) {
                if (flag) {
                    flag = checkRule(rule, userInfo.form[element].validation[rule], userInfo.form[element].value)
                }
                else {
                    return flag;
                }
            }
        }
        return flag;
    }

    const checkRule = (rule, ruleValue, value) => {
        let flag;
        switch (rule) {
            case "match":
                flag = userInfo.form[ruleValue].value === value
                break;
            case "minLength":
                flag = ruleValue <= value.length
                break;
            default:
                flag = false;
                break;
        }
        return flag
    }

    const registerNewUser = (user) => {
        console.log(user, fire.getCurrentUser())
        user.updateProfile({
            displayName: userInfo.form.firstName.value + " " + userInfo.form.lastName.value,
            email: userInfo.form.email.value
        }).then(() => {
            console.log("success")
        }).catch((error) => {
            actions.setErrorState({error: error})
        })
        const newUser = {
            id: user.uid,
        }
        axiosInstance.addNewUser(newUser)
    }

    const register = (e) => {
        e.preventDefault();
        let flag = checkValid();
        if (flag) {
            fire.doCreateUserWithEmailAndPassword(userInfo.form.email.value, userInfo.form.password.value).then((data) => {
                registerNewUser(data.user)
            }).catch((error) => {
                actions.setErrorState({error: error})
            })
        }

    }


    let formElementsArray = [];
    for (let element in userInfo.form) {
        formElementsArray.push(element)
    }
    let Inputs = formElementsArray.map((i) => {
        let temp = userInfo.form[i];
        return <Input inputtype={temp.elementConfig.inputType} type={temp.elementConfig.type} onChange={(e) => change(e, i)} label={temp.elementConfig.label} key={i} required />
    })
    return (
        <FormPopUp>
            <form onSubmit={(e) => register(e)}>
                <Header headerType="h3" content="Register" />
                {Inputs}
                <div className={classes.buttonContainer}>
                    <Button type="submit" value="Register" />
                    <Button type="button" value="Return to Login" onClick={(e) => props.switch("login", e)} />
                </div>
            </form>
        </FormPopUp>
    )
}

export default Register