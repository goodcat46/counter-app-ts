import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosErrorCheck } from 'utils';
import {
  IAuthState,
  ICurrentUser,
  ICurrentUserInfoRes,
  ILoggedUserInfo,
  ILoginUserData,
  IRegisteredUser,
  IRegisteredUserInfoRes,
  IRegistrationData,
} from '../../types/auth.types';
import { ThunkPayload } from '../store.store';
import AuthApi from '../../api/auth.api';

export const registerUserThunk = createAsyncThunk<IRegisteredUser, ThunkPayload<IRegistrationData>>(
  'auth/registerUserThunk',
  async ({ data, onSuccess, onError }, thunkAPI) => {
    try {
      const response: IRegisteredUserInfoRes = await AuthApi.registerUser(data);

      onSuccess && onSuccess(response.data.data);

      return response.data.data;
    } catch (error) {
      onError && onError(error);

      return thunkAPI.rejectWithValue(axiosErrorCheck(error));
    }
  }
);

export const logInUserThunk = createAsyncThunk<
  ILoggedUserInfo,
  ThunkPayload<ILoginUserData>,
  {
    state: { auth: IAuthState };
  }
>('auth/logInUserThunk', async ({ data, onSuccess, onError }, thunkAPI) => {
  try {
    const response = await AuthApi.logInUser(data as ILoginUserData);

    onSuccess && onSuccess(data);
    return response.data.data;
  } catch (error) {
    onError && onError(error);

    return thunkAPI.rejectWithValue(axiosErrorCheck(error));
  }
});

export const logOutUserThunk = createAsyncThunk<any, ThunkPayload>(
  'auth/logOutUserThunk',
  async ({ data, onSuccess, onError }, thunkAPI) => {
    try {
      const response = await AuthApi.logOutUser();
      onSuccess && onSuccess(response);
    } catch (error) {
      onError && onError(error);
      return thunkAPI.rejectWithValue(axiosErrorCheck(error));
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk<
  ICurrentUser,
  ThunkPayload<
    {
      permissionId: string;
    },
    ICurrentUserInfoRes
  >
>('auth/getCurrentUserThunk', async ({ onSuccess, onError, onLoading, data }, thunkAPI) => {
  try {
    const response = await AuthApi.getCurrentUser();

    onSuccess && onSuccess(response);

    return response.data.data;
  } catch (error) {
    onError && onError(error);

    return thunkAPI.rejectWithValue(axiosErrorCheck(error));
  }
});
