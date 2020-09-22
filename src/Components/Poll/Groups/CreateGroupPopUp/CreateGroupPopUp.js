import React, { useContext, useState, useEffect } from 'react'
import AuxDiv from '../../../../hoc/AuxDiv/AuxDiv'
import FormPopUp from '../../../UI/PopUps/FormPopUp/FormPopUp'
import { StoreContext } from '../../../../Store/StoreContext'
import Input from '../../../UI/Input/Input'
import classes from './CreateGroupPopUp.module.css'
import Header from '../../../UI/Header/Header'
import Button from 'react-bootstrap/Button'
import AuxBackground from '../../../../hoc/AuxBackground/AuxBackground'
import { withRouter } from 'react-router-dom'

const CreateGroupPopUp = (props) => {
    const { actions, state, fire } = useContext(StoreContext)
    const [userInfo, setUserInfo] = useState({
        form: {
            name: {
                elementConfig: {
                    type: 'name',
                    inputType: 'text',
                    label: 'Group Name'
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

    const createGroup = (e) => {
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

    const click = () => {
        actions.createGroup(false)
    }

    const form = (e) => {
        e.stopPropagation()
    }

    let formElementsArray = [];
    for (let element in userInfo.form) {
        formElementsArray.push(element)
    }
    let Inputs = formElementsArray.map((i) => {
        let temp = userInfo.form[i];
        return <Input inputtype={temp.elementConfig.inputType} type={temp.elementConfig.type} onChange={(e) => change(e, i)} label={temp.elementConfig.label} key={i} />
    })

    useEffect(() => {

    }, [userInfo])

    return (
        <AuxBackground zIndex="low" click={() => click()}>
            <FormPopUp onClick={(e) => form(e)}>
                <form onSubmit={(e) => createGroup(e)}>
                    <div className={classes.headerContainer}>
                        <Header headerType="h3" content="Create Group" />
                    </div>
                    {Inputs}
                    <div className={classes.buttonContainer}>
                        <Button value="Create Group" type="submit">Create</Button>
                    </div>
                </form>
            </FormPopUp>
        </AuxBackground>
    )
}

export default withRouter(CreateGroupPopUp)