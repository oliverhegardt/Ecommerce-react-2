import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Containter = styled.div``;

const Product = () => {
    return (
        <Containter>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title></Title>
                    <Description></Description>
                    <Price> 20€</Price>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Containter>
    );
};

export default Product;
