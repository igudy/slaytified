// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type IUser = {
  id: string;
  name: string;
  email: string;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => "user",
    }),
  }),
});

export const { useGetUserQuery } = userApi;
