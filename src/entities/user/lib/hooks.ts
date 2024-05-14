import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { RootState } from "@app/store";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { IAuthLoginRequest, IAuthRegisterRequest, IAuthActiveRequest, IAuthResponse, IUser, addCourseToCart, removeCourseToCart, getMe, login, register, setActiveUser, updateActiveUser } from "../model";
import { activate, transferCoursesFromCartToCourses } from "../model/api";

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
  const { mutate, data, isLoading, isError, error } = useMutation<IAuthResponse | null, Error, IAuthRegisterRequest>(
    (registerData) => register(registerData),
    {
      onSuccess: (data) => {
        if (data) {
          localStorage.setItem("token", data.token);
        }
      }
    }
  );

  return { mutate, data, isLoading, isError, error };
}

export const useAccountActivate = () => {
  const dispatch = useAppDispatch();
  const { mutate, data, isLoading, isError, error } = useMutation<IUser | null, Error, IAuthActiveRequest>(
    (activateData) => activate(activateData),
    {
      onSuccess: (data) => {
        if (data) {
          const token: string = localStorage.getItem("token")!.toString();
          dispatch(setActiveUser({ user: data, token }));
        }
      }
    }
  );

  return { mutate, data, isLoading, isError, error };
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

export const useRemoveCourseToCart = () => {
  const dispatch = useAppDispatch();
  const { mutate, isError } = useMutation<IUser, Error, string>((courseId: string) => removeCourseToCart(courseId), {
    onSuccess: (data) => {
      dispatch(updateActiveUser(data));
    }
  });
  return { mutate, isError };
}

export const useTransferCoursesFromCartToCourses = () => {
  const dispatch = useAppDispatch();
  const { mutate, isLoading, isError } = useMutation<IUser, Error>(() => transferCoursesFromCartToCourses(), {
    onSuccess: (data) => {
      console.log(data);
      dispatch(updateActiveUser(data));
    }
  });
  return { mutate, isLoading, isError };
}