import styled from "styled-components";

const Wrapper = styled.div`
  .title {
    text-align: center;
    font-weight: 800;
    font-size: 24px;
    opacity: 0.6;
    margin: 8px 0;
  }
  .list-data:last-child {
    border-bottom: 1px solid transparent;
  }
  .list-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #999;
  }
  p {
    color: #48484a;
    margin: 0;
    width: 40%;
  }
  .light-text {
    color: #48484a94 !important;
    font-size: 11px;
  }
`;
export default Wrapper;
