import { useMutation, useQuery } from 'react-query';
import { IApplication, ICreateApplicationRequest, createNewApplication, getAllApplications } from '..';
import { acceptApplication, denyApplication } from '../model/api';

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

export const useApplications = () => {
  return useQuery("applications", getAllApplications);
}

export const useAcceptApplication = () => {
  const {
    mutate,
    isLoading,
    isError,
  } = useMutation<IApplication, Error, string>(
    (applicationId: string) => acceptApplication(applicationId)
  );

  return {
    mutate,
    isLoading,
    isError,
  }
}

export const useDenyApplication = () => {
  const {
    mutate,
    isLoading,
    isError,
  } = useMutation<IApplication, Error, string>(
    (applicationId: string) => denyApplication(applicationId)
  );

  return {
    mutate,
    isLoading,
    isError,
  }
}