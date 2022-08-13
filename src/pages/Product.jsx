import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``;

const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec tempor dapibus ipsum, vitae porttitor metus
                        lacinia in. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.{" "}
                    </Desc>
                    <Price> 20€</Price>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
