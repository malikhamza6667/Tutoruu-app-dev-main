import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { Dispatch, AnyAction } from "redux";
import { createAction } from 'redux-actions';
import { ThunkAction } from "redux-thunk";

const httpLink = new HttpLink({
  uri: "https://sentinel.tutoruu.com/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

type ThunkType = ThunkAction<Promise<void>, {}, {}, AnyAction>;

export const fetchMyData = (): ThunkType => {
  return async (dispatch: Dispatch) => {
    const actionStart = createAction("MY_API_REQUEST_START");
    const actionSuccess = createAction("MY_API_REQUEST_SUCCESS");
    const actionFailure = createAction("MY_API_REQUEST_FAILURE");
    try {
      dispatch(actionStart());
      const response = await client.query({
        query: gql`
          query {
            classes {
              _id
              name
              desc
              courses_length
            }
          }
        `,
      });
      if (response.data) {
        dispatch(actionSuccess(response.data));
      } else {
        throw new Error("No data returned from server");
      }
    } catch (error) {
      dispatch(actionFailure(error));
    }
  };
};
