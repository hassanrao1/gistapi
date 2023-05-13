import { getGistForUser, getPublicGists } from "../../services/gistService";
import {
  getGistsFailure,
  getGistsStart,
  getGistsSuccess,
  searchGistsSuccess,
} from "./gistReducer";

export const fetchGists = () => async (dispatch) => {
  try {
    dispatch(getGistsStart());
    const { data } = await getPublicGists();
    dispatch(getGistsSuccess(data));
  } catch (error) {
    dispatch(getGistsFailure(error.message));
  }
};

export const searchGists = (searchValue) => async (dispatch) => {
  if (searchValue) {
    try {
      dispatch(getGistsStart());
      const { data } = await getGistForUser(searchValue);
      dispatch(searchGistsSuccess(data));
    } catch (error) {
      dispatch(getGistsFailure(error.message));
    }
  } else {
    dispatch(fetchGists());
  }
};
