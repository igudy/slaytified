import { apiSlice } from './apiSlice';

export interface FieldError {
  field: string;
  message: string;
  code?: string;
}

export interface FailedRecord {
  rowNumber: number;
  data: any;
  errors: FieldError[];
}

export interface BulkUploadResponse {
  summary: {
    total: number;
    successful: number;
    failed: number;
  };
  failedRecords: FailedRecord[];
}

export const bulkUploadApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadProducts: builder.mutation<BulkUploadResponse, File>({
      query: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: '/bulk/products/upload',
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: ['Products'],
    }),
    uploadUsers: builder.mutation<BulkUploadResponse, File>({
      query: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: '/bulk/users/upload',
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: ['Users'],
    }),
    downloadProductTemplate: builder.mutation<Blob, void>({
      query: () => ({
        url: '/bulk/products/template',
        method: 'GET',
        responseHandler: (response) => response.blob(),
      }),
    }),
    downloadUserTemplate: builder.mutation<Blob, void>({
      query: () => ({
        url: '/bulk/users/template',
        method: 'GET',
        responseHandler: (response) => response.blob(),
      }),
    }),
  }),
});

export const {
  useUploadProductsMutation,
  useUploadUsersMutation,
  useDownloadProductTemplateMutation,
  useDownloadUserTemplateMutation,
} = bulkUploadApi;
