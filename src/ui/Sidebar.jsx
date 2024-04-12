import styled from "styled-components";

const StyledSidebar= styled.aside`
    background-color: blue;
    padding: 3.2rem 2.4rem;
    border: 1px solid var(--color-grey-100);
`

export default function Sidebar() {
  return <StyledSidebar>SIDEBAR</StyledSidebar>;
}
