import { useMutation, useQuery } from 'react-query';
import { IApplication, ICreateApplicationRequest, createNewApplication, getAllApplications } from '..';

export const useCreateApplication = () => {
  const {
    mutate,
    isLoading,
    data,
    isError,
  } = useMutation<IApplication, Error, ICreateApplicationRequest>(
    (data) => createNewApplication(data)
  );

  return {
    mutate,
    isLoading,
    data,
    isError,
  };
};

export const useGetAllApplications = () => {
  return useQuery("courses", getAllApplications);
}