import react, {useState} from 'react';
import {Form, FormGroup, Input, Button, Label, Alert} from 'reactstrap';
import Header from '../Header';

const CadastroInfo = (props) => {
    const [mensagem, setMensagem] = useState("")
    const [cor, setCor] = useState("")
    const dadosDeCadastroInfo = {
        numeroProposta: "",
        qtdadeParcelas: "",
        tipoDeParcela:""
    }

    const register = () => {

        const url = "http://localhost:8080/infos";
        const data = {
            numeroProposta: dadosDeCadastroInfo.numeroProposta,
            qtdadeParcelas: dadosDeCadastroInfo.qtdadeParcelas,
            tipoDeParcela: dadosDeCadastroInfo.tipoDeParcela
        };

        const token = localStorage.getItem('token')

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
        };

        fetch(url, requestInfo)
        .then(response => {
            console.log(response.ok)
            if (!response.ok) {
                throw new Error("Não foi possível concluir o cadastro")
            }
            setMensagem('O cadastro foi realizado com sucesso!')
            setCor('success')
        })
        .catch( e => {
            console.log(e)
            setMensagem('Informações inválidas, tente novamente')
            setCor('danger')
        });
    }

    return(
        <div className='Content'>
            <Header title='Guardian Bank'/>
            {
                mensagem !== ''? (
                    <Alert color={cor} className='text-center'>{mensagem}</Alert>
                ) : ''
            }
            <Form>
                <FormGroup>
                    <Label for="numeroProposta">Digite o id da proposta:</Label>
                    <Input type='text' id='numeroProposta' onChange={e => dadosDeCadastroInfo.numeroProposta = e.target.value}/>
                </FormGroup>
                <FormGroup>
                    <Label for="qtdadeParcelas">Digite a quantidade de parcelas:</Label>
                    <Input type='number' id='qtdadeParcelas' onChange={e => dadosDeCadastroInfo.qtdadeParcelas = e.target.value}/>
                </FormGroup>
                <FormGroup>
                    <Label for="tipoDeParcela">Digite o tipo de parcela:</Label>
                    <Input type='text' id='tipoParcelas' onChange={e => dadosDeCadastroInfo.tipoDeParcela = e.target.value}/>
                </FormGroup>
                <Button color='primary' onClick={register}>Concluir</Button>
            </Form>
        </div>
    )
} 

export default CadastroInfo;