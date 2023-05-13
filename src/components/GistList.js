import React, { useEffect, useState } from "react";
import Gist from "./Gist";
import styled from "styled-components";
import { getPublicGists } from "../services/gistService";
import Loader from "./Loader";
const GistList = () => {
  const [gists, setGists] = useState(null);

  const getGists = async () => {
    const { data } = await getPublicGists();
    setGists(data);
  };

  console.log(gists);

  useEffect(() => {
    getGists();
  }, []);

  
  return (
    <ListContainer>
        {!gists && <Loader />}
      {gists?.map((gist) => (
        <Gist gist={gist} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GistList;
