
import { handleActions } from 'redux-actions';
interface StateType {
    loading: boolean;
    error: any;
    data: any;
  }
  
  const initialState: StateType = {
    loading: false,
    error: null,
    data: null,
  };
  
  const myApiReducer = handleActions(
    {
      MY_API_REQUEST_START: (state: StateType) => ({
        ...state,
        loading: true,
      }),
      MY_API_REQUEST_SUCCESS: (state: StateType, action: any) => ({
        ...state,
        loading: false,
        data: action.payload,
      }),
      MY_API_REQUEST_FAILURE: (state: StateType, action: any) => ({
        ...state,
        loading: false,
        error: action.payload,
      }),
    },
    initialState
  );
  


export default myApiReducer;