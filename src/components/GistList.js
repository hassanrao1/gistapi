import React, { useEffect } from "react";
import Gist from "./Gist";
import styled from "styled-components";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchGists } from "../redux/gist/gistActions";
import Error from "./Error";
const GistList = () => {
  const dispatch = useDispatch();
  const { loading, gists, error } = useSelector((state) => state.gists);

  const getGists = async () => {
    dispatch(fetchGists());
  };

  useEffect(() => {
    getGists();
  }, []);

  console.log(loading, gists);
  return (
    <ListContainer>
      {error && <Error error={error} />}
      {!loading && !gists.length && !error && (
        <NoData>No Data Available</NoData>
      )}
      {loading ? <Loader /> : gists?.map((gist) => <Gist gist={gist} />)}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoData = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
  font-weight: bold;
`;

export default GistList;
