import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  .main-title {
    text-align: center;
    margin: 0 !important;
    font-weight: 800;
  }
  .date {
    text-align: center;
    color: #00000078;
    margin-bottom: 0;
    padding-top: 16px;
    margin-top: 24px;
    border-top: 1px solid #999;
  }
  .result {
    text-align: center;
    margin-top: 0 !important;
    color: #2625258a;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #999;
  }
  .container {
    margin-top: 40px;
  }
`;

export const SearchBar = styled.div`
  border: 1px solid #999999;
  border-radius: 4px;
  height: 40px;
  width: 320px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;
export const Icon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  height: 100%;
  width: 40px;
  border-left: 1px solid #999999;
  cursor: pointer;
`;
export const Row = styled.div(({ children, ...props }) => {
  return {
    ...props,
    display: "flex",
    width: "100%",
  };
});
export const Col = styled.div(({ children, ...props }) => ({
  ...props,
}));
export default Wrapper;
