import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Polygon } from "../../components/Polygon"
import { Container, Form } from "./styles"

export const SignUp = () => {
    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px'}}>
                <Polygon />
                <h1 style={{ fontSize: '42px', fontWeight: '700'}}>Food Explorer</h1>
            </div>
            <Form>
                <h2 style={{ 
                    fontFamily: 'poppins', 
                    fontSize: '32px', 
                    fontWeight: '500', 
                    textAlign: 'center'
                }}>Faça login</h2>
                <Input>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" id="email" />
                </Input>
                <Input>
                    <label htmlFor="password">Senha</label>
                    <input type="password" placeholder="No mínimo 6 caracteres" id="password" />
                </Input>
                <Button>
                    Entrar
                </Button>
                <a href=''>Criar uma conta</a>
            </Form>
        </Container>
    )
}