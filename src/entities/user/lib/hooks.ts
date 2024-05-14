import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { RootState } from "@app/store";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { IAuthLoginRequest, IAuthRegisterRequest, IAuthResponse, IUser, addCourseToCart, getMe, login, register, setActiveUser, updateActiveUser } from "../model";

export const useAuth = () => {
  const user: IUser | null = useAppSelector((state: RootState) => state.user.user);
  const isAuth: boolean = !!user;
  return isAuth;
}

export const useAuthUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getMe();
        if (user) {
          dispatch(setActiveUser({ token: localStorage.getItem("token")!, user }));
        }
      } catch (error) {
        console.error('Error fetching user', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [dispatch]);

  return isLoading;
};

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const { mutate, isLoading, isError } = useMutation<IAuthResponse, Error, IAuthLoginRequest>(
    (loginData) => login(loginData),
    {
      onSuccess: (data) => {
        if (data) {
          localStorage.setItem("token", data.token);
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

export const useAddCourseToCart = () => {
  const dispatch = useAppDispatch();
  const { mutate, isLoading, isError } = useMutation<IUser, Error, string>((courseId: string) => addCourseToCart(courseId), {
    onSuccess: (data) => {
      dispatch(updateActiveUser(data));
    }
  });
  return { mutate, isLoading, isError };
};
