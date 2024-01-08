import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'
import { Logo } from '../../components/Header/components/Logo'

export const SignIn = () => {
    return (
        <Container>
            <Logo />
            <Form>
                <h2 style={{ 
                    fontFamily: 'poppins', 
                    fontSize: '32px', 
                    fontWeight: '500', 
                    textAlign: 'center'
                }}>Crie sua conta</h2>
                <Input>
                    <label htmlFor="name">Seu nome</label>
                    <input type="text" placeholder="Exemplo: Maria da Silva" id="name" />
                </Input>
                <Input>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" id="email" />
                </Input>
                <Input>
                    <label htmlFor="password">Senha</label>
                    <input type="password" placeholder="No mínimo 6 caracteres" id="password" />
                </Input>
                <Button>
                    Criar conta
                </Button>
                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </Container>
    )
}