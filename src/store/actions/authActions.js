import API from '../../utils/api';

export const login = (email, pass) => {
  return (dispatch) => {
    API.login(email, pass, res => {
      console.log("Result is ", res.data);
      dispatch({
        type: 'LOGIN',
        payload: { 
          email,
          token: res.data.id,
          userId: res.data.userId
        }
      })
    })
  }
}

export const register = (email, pass) => {
  return {
    type: 'REGISTER',
    payload: { email, pass }
  }
}