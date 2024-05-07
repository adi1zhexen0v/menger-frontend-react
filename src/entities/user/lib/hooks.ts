import { useMutation } from "react-query";
import { RootState } from "@app/store";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { IAuthLoginRequest, IAuthRegisterRequest, IAuthResponse, IUser, login, register, setActiveUser } from "../model";

export const useAuth = () => {
  const user: IUser | null = useAppSelector((state: RootState) => state.user.user);
  const isAuth: boolean = !!user;
  return isAuth;
}

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const { mutate, isLoading, isError } = useMutation<IAuthResponse, Error, IAuthLoginRequest>(
    (loginData) => login(loginData),
    {
      onSuccess: (data) => {
        if (data) {
          dispatch(setActiveUser(data));
        }
      }
    }
  );

  return { mutate, isLoading, isError };
}

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const { mutate, data, isLoading, isError } = useMutation<IAuthResponse | null, Error, IAuthRegisterRequest>(
    (registerData) => register(registerData),
    {
      onSuccess: (data) => {
        if (data) {
          dispatch(setActiveUser(data));
        }
      }
    }
  );

  return { mutate, data, isLoading, isError };
}
