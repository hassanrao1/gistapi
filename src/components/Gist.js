import styled from "styled-components";
import { BiMessage } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { GoRepoForked, GoCode } from "react-icons/go";
import { HiDocumentText } from "react-icons/hi";
import Loader from "./Loader";

const Gist = ({ gist }) => {
  const numberOfFiles = Object.keys(gist?.files).length;

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1; // getMonth() returns a zero-based index, so add 1
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  };
  return (
    <Card>
      <Header>
        <Header>
          <Image src={gist?.owner?.avatar_url} />
          <Text color="#0265d6">{gist?.owner?.login}</Text>
        </Header>
        <Header>
          <Text color="#0265d6">
            <GoCode size={20} />
            {numberOfFiles} Files
          </Text>
          <Text color="#0265d6">
            <GoRepoForked size={20} />
            Forks
          </Text>
          <Text color="#0265d6">
            <BiMessage size={20} />
            Comments
          </Text>
          <Text color="#0265d6">
            <BsFillStarFill size={20} />
            Stars
          </Text>
        </Header>
      </Header>
      <ContainerFlex>
        <Text
          color="#808080"
          paddingLeft={`0px`}
          fontWeight={"100"}
          marginRight="10px"
        >
          Created At: {getFormattedDate(gist?.created_at)}
        </Text>
        <Text color="#808080" paddingLeft={`0px`} fontWeight={"100"}>
          Last Updated: {getFormattedDate(gist?.updated_at)}
        </Text>
      </ContainerFlex>
      <Container>
        <Description>{gist?.description}</Description>
      </Container>
      <ContainerFlex>
        {Object.keys(gist?.files).map((file) => (
          <Text color="#0265d6">
            <HiDocumentText size={20} />
            {file}
          </Text>
        ))}
      </ContainerFlex>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  width: 50%;
  margin: 10px 0;
  border-radius: 10px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
const Text = styled.span`
  color: ${(props) => props.color || "black"};
  font-weight: bold;
  font-size: medium;
  padding-left: ${(props) => props.paddingLeft || `20px`};
  margin-right: ${(props) => props.marginRight || `0`};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.fontWeight || "bold"};
  & > svg {
    margin-right: 8px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.div`
  font-size: 22px;
  font-weight: 500;
`;
const Container = styled.div`
  margin-top: ${(props) => props.marginTop || "20px"};
`;
const ContainerFlex = styled(Container)`
  display: flex;
`;

export default Gist;
