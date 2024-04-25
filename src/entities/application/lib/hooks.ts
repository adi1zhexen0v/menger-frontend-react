import { useMutation } from 'react-query';
import { IApplication, ICreateApplicationRequest, createNewApplication } from '..';

export const useCreateApplication = () => {
  const {
    mutate,
    isLoading,
    data,
    error,
  } = useMutation<IApplication | null, Error, ICreateApplicationRequest>(
    (data) => createNewApplication(data)
  );

  return {
    mutate,
    isLoading,
    data,
    error,
  };
};

export default useCreateApplication;
