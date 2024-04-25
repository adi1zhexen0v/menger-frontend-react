import { useMutation } from "react-query";
import { useAppDispatch } from "@shared/lib/hooks";
import { IAuthLoginRequest, IAuthRegisterRequest, IAuthResponse, login, register, setActiveUser } from "../model";

const dispatch = useAppDispatch();

export const useLogin = () => {
  const { mutate, data, isLoading, error } = useMutation<IAuthResponse | null, Error, IAuthLoginRequest>((data) => login(data));
  dispatch(setActiveUser(data!));
  return { mutate, data, isLoading, error };
}

export const useRegister = () => {
  const { mutate, data, isLoading, error } = useMutation<IAuthResponse | null, Error, IAuthRegisterRequest>((data) => register(data));
  return { mutate, data, isLoading, error };
}