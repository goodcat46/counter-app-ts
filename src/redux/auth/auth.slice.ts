import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthErrorType } from 'redux/reduxTypes.types';
import { getCurrentUserThunk, logInUserThunk, logOutUserThunk, registerUserThunk } from './auth.thunks';
import { IAuthState } from './auth.types';
import { karina_avatar } from '../../img';

const initialState: IAuthState = {
  user: {
    _id: '',
    avatarURL: karina_avatar,
  },
  permission: { _id: '' },
  access_token: '',
  isLoading: true,
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(logInUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.access_token = payload.access_token;
        state.isLoggedIn = true;
        state.user = {
          ...payload,
          avatarURL:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fuk.wikipedia.org%2Fwiki%2F%25D0%259F%25D1%2596%25D0%25B4%25D0%25B4%25D1%2583%25D0%25B1%25D0%25BD%25D0%25B8%25D0%25B9_%25D0%2586%25D0%25B2%25D0%25B0%25D0%25BD_%25D0%259C%25D0%25B0%25D0%25BA%25D1%2581%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25B2%25D0%25B8%25D1%2587&psig=AOvVaw1bKwdWzf52CXjh_Q27FYn5&ust=1692433465292000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLjq9I7k5YADFQAAAAAdAAAAABAQ',
        };
      })
      .addCase(registerUserThunk.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(logOutUserThunk.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.user = initialState.user;
        state.permission = initialState.permission;
        state.access_token = '';
      })
      .addCase(logOutUserThunk.rejected, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.user = initialState.user;
        state.permission = initialState.permission;
        state.access_token = '';
      })
      .addCase(getCurrentUserThunk.fulfilled, state => {
        state.isLoading = false;
        state = initialState;
      })
      .addMatcher(inPending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(inError, (state, action: PayloadAction<AuthErrorType>) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

function inPending(action: AnyAction) {
  return action.type.endsWith('pending');
}

function inError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const authReducer = authSlice.reducer;
// extraReducers: {
//   //* РЕЄСТРАЦІЯ
//   [registerUserThunk.fulfilled]: (state, { payload }) => {
//     state.isLoading = false;
//     state.isLoggedIn = false;

//     console.log(payload);
//   },
//   [registerUserThunk.pending]: (state, action) => {
//     state.isLoading = true;
//   },
//   [registerUserThunk.rejected]: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload.error;
//   },
//   // * РЕЄСТРАЦІЯ АДМІНІСТРАТОРОМ
//   [registerUserByAdminThunk.fulfilled]: (state, { payload }) => {
//     state.isLoading = false;
//   },
//   [registerUserByAdminThunk.pending]: (state, action) => {
//     state.isLoading = true;
//   },
//   [registerUserByAdminThunk.rejected]: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload.error;
//   },
//   //* ВХІД
//   [logInUserThunk.fulfilled]: (state, { payload }) => {
//     state.isLoading = false;
//     state.isLoggedIn = true;
//     state.token = payload.access_token;
//   },
//   [logInUserThunk.pending]: (state, { payload }) => {
//     state.isLoading = true;
//   },
//   [logInUserThunk.rejected]: (state, action) => {
//     state.isLoading = false;
//     state.isLoggedIn = false;
//     state.error = action.payload.error;
//   },

//   //* ВИХІД
//   [logOutUserThunk.fulfilled]: (state, action) => {
//     state.isLoading = false;
//     state.isLoggedIn = false;
//     state.user = initialState.user;
//     state.token = null;
//   },
//   [logOutUserThunk.pending]: (state, action) => {
//     state.isLoading = true;
//   },
//   [logOutUserThunk.rejected]: (state, action) => {
//     state.isLoading = true;
//     state.error = action.payload.error;
//   },
//   //* ПОТОЧНИЙ ЮЗЕР
//   [getCurrentUserThunk.fulfilled]: (state, { payload }) => {
//     state.isLoading = false;
//     state.isLoggedIn = true;

//     state.user = { ...state.user, ...payload };
//   },
//   [getCurrentUserThunk.pending]: (state, action) => {
//     state.isLoading = true;
//   },
//   [getCurrentUserThunk.rejected]: (state, action) => {
//     state.isLoading = false;
//     state.error = action.error;
//     state.isLoggedIn = false;
//   },
// },
