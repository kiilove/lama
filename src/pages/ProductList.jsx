import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Title = styled.h1`
  margin: 20px;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>의류</Title>
      <FilterContainer>
        <Filter>
          <FilterText>상품분류</FilterText>
          <Select>
            <Option disabled selected>
              색상
            </Option>
            <Option>화이트</Option>
            <Option>블랙</Option>
            <Option>레드</Option>
            <Option>블루</Option>
            <Option>엘로우</Option>
            <Option>그린</Option>
          </Select>
          <Select>
            <Option disabled selected>
              사이즈
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>정렬</FilterText>
          <Select>
            <Option selected>신상</Option>
            <Option>가격높은순</Option>
            <Option>가격낮은순</Option>
            <Option>판매량</Option>
            <Option>리뷰많은순</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
