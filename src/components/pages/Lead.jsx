import react, {Component} from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import Header from '../Header';

export default class Lead extends Component {
    render() {
        return(
            <div>
                <Header title='Cadastro Lead'/>
                <Form>
                    <FormGroup>
                        <Input type='name' id='name' placeholder='Nome'/>
                    </FormGroup>
                    <FormGroup>
                        <Input type='text' id='email' placeholder='Email'/>
                    </FormGroup>
                    <FormGroup>
                        <Input type='textarea' id='textarea' placeholder='Observações'/>
                    </FormGroup>
                    <Button color='primary'>Entrar</Button>
                </Form>
            </div>
        )
    }
}