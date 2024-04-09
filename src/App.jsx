import styled from "styled-components";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button=styled.button`
  font-size: 1.4rem;
  padding: 1.2rem  1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  margin: 10px;
  cursor: pointer;
`;

export default function App() {
  return <div>
    <H1>The wild oasis</H1>
    <Button onClick={()=> alert("Check in")}>Check in</Button>
    <Button onClick={()=> alert("Check out")}>Check out</Button>
    </div>;
}
