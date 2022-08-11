import styled from "styled-components";
import Announcment from "../components/Announcement";
import Navbar from "../components/Navbar";

const Containter = styled.div``;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;

const ProductList = () => {
    return (
        <Containter>
            <Announcment />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>filter</Filter>
                <Filter>filter2</Filter>
            </FilterContainer>
        </Containter>
    );
};

export default ProductList;
