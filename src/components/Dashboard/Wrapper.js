import styled from "styled-components";

const CenteredWrapper = styled.div`
  min-height: calc(100vh - var(--nav-height) - 4rem);
  overflow-y: scroll;
  font-size: var(--fonts-md);
  color: var(--white);
  overflow: auto;
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = (props) => {
  return <CenteredWrapper>{props.children}</CenteredWrapper>;
};

export default Wrapper;
