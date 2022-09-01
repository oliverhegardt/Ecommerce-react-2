import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            center;

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 45%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
    border-width: 1px;
`;

const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    border-radius: 10px;
    width: 20%;
    border: none;
    padding: 15px 0px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    ${mobile({ width: "65%" })}
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    text-align: center;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" />

                    <Input placeholder="Password" />

                    <ButtonContainer>
                        <Button>LOGIN</Button>
                    </ButtonContainer>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
