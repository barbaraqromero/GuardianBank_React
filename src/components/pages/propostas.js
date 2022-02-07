import react, {Component} from 'react';
import {Form, FormGroup, Input, Button, Label, Alert} from 'reactstrap';
import Header from '../Header';

export default class Propostas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message : this.props.state?this.props.state.message: '',
        };
    }   

    getPropostas = () => {
        const url = "http://localhost:8080/propostas/id";
        const data = {
            email: this.qtdadeDeParcelas,
            senha: this.valorParcela,
        };
        const requestInfo = {
            method: 'GET',
           // body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };
        fetch(url, requestInfo)
        .then(token => {
            localStorage.setItem('token', token);
            this.props.history.push("/");
        }).catch( e => {
            this.setState({message: e.message})
            console.log(this.qtdadeDeParcelas, this.valorParcela)
        });
    }

    render() {
        return(
            <div>
                <Header title='Opções de parcelamento'/>
                {
                    this.state.message !== ''? (
                        <Alert color='danger' className='text-center'>{this.state.message}</Alert>
                    ) : ''
                }
               
                    <Button color='primary' onClick={this.getPropostas}>Selecionar</Button>
            
            </div>
        )
    }
}