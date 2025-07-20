// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: string;
  name: string;
  email: string;
  // Add other user fields as needed
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => "user",
    }),
  }),
});

export const { useGetUserQuery } = userApi;
