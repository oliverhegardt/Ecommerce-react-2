import styled from "styled-components";

const Container = styled.div``;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Last name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
