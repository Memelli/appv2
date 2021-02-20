import '../auth/auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userRegister } from '../auth/authActions'
import Grid from '../common/layout/grid'


import Messages from '../common/msg/msgs'
import Input from '../common/form/inputAuth'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'



class Users extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMode: false }
    }
    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }
    onSubmit(values) {
        const { userRegister } = this.props
        this.state.loginMode ? login(values) : userRegister(values)
    }

    render() {
        
        const { handleSubmit } = this.props
        return (
            <div>
                <ContentHeader title='Cadastro de novos usuários' small='É possível cadastrar, modificar e excluir novos usuarios' />
                <Content>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field component={Input} type="input" name="name"
                            placeholder="Nome" icon='user' />
                        <Field component={Input} type="email" name="email"
                            placeholder="E-mail" icon='envelope' />
                        <Field component={Input} type="password" name="password"
                            placeholder="Senha" icon='lock' />
                        <Field component={Input} type="password" name="confirm_password"
                            placeholder="Confirmar Senha" icon='lock' />
                        <div className="row">
                            <Grid cols="2">
                                <button type="submit"
                                    className="btn btn-primary btn-block btn-flat">
                                    Cadastrar
                                </button>
                            </Grid>
                        </div>
                    </form>
                </Content>
                <Messages />
            </div>
        )
    }
}

Users = reduxForm({ form: 'authForm' })(Users)
const mapDispatchToProps = dispatch => bindActionCreators({ userRegister }, dispatch)
export default connect(null, mapDispatchToProps)(Users)