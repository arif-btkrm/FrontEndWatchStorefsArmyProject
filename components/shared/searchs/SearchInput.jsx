import styled from "styled-components";

const InputStyle = styled.input`
  padding: 6px 20px;
  font-size: 0.9rem;
  border: none;
  outline: none;
  border-radius: 10px 0 0 10px;
`;

const SearchInput = ({ placeholder }) => {
  return <InputStyle placeholder={placeholder} />;
};

export default SearchInput;