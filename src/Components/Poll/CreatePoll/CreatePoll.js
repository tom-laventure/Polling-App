import React, { useState, useContext, useEffect } from 'react'
import classes from './CreatePoll.module.css'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import SubContainer from '../../Section/SubContainer/SubContainer'
import Header from '../../UI/Header/Header'
import { StoreContext } from '../../../Store/StoreContext'
import AuxDiv from '../../../hoc/AuxDiv/AuxDiv'
import { withRouter } from 'react-router-dom'


const CreatePoll = (props) => {
    const { state, fire } = useContext(StoreContext)
    const [userInfo, setUserInfo] = useState({
        formInfo: {
            title: "Create Poll"
        },
        form: {
            name: {
                elementConfig: {
                    type: 'text',
                    inputType: 'text',
                    label: 'Name'
                },
                validation: {
                },
                valid: false,
                value: '',

            },
            limit: {
                elementConfig: {
                    type: 'number',
                    inputType: 'text',
                    label: 'Limit'
                },
                validation: {
                },
                valid: false,
                value: '',
            }
        }
    })

    useEffect(() => {

    }, [userInfo])

    const submit = (e) => {
        e.preventDefault()
        let temp = { ...userInfo }
        const poll = {
            name: temp.form.name.value,
            limit: temp.form.limit.value,
            members: [{ name: state.user.displayName, id: state.user.uid }]
        }

        fire.createPoll(poll, (res) => {
            let pollId = encodeURIComponent(res.key);
            props.history.push({
                pathname: '/Poll',
                search: pollId
            })
        })
    }

    const change = (e, i) => {
        let temp = { ...userInfo }
        temp.form[i].value = e.target.value
        setUserInfo(temp)
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
        <AuxDiv>
            <SubContainer>
                <form onSubmit={(e) => submit(e)}>
                    <div className={classes.headerContainer}>
                        <Header headerType="h4" content={userInfo.formInfo.title} />
                    </div>
                    {Inputs}
                    <div className={classes.buttonContainer}>
                        <Button value="Create Poll" type="submit" />
                    </div>
                </form>
            </SubContainer>
        </AuxDiv>
    )
}

export default withRouter(CreatePoll)