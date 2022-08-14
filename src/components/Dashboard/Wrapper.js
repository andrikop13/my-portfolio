import styled from "styled-components";

const CenteredWrapper = styled.div`
  font-size: var(--fonts-md);
  color: var(--white);
  min-height: 75rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = (props) => {
  return <CenteredWrapper>{props.children}</CenteredWrapper>;
};

export default Wrapper;
