import { uploadFile, downloadFile } from './api';

export interface BulkUploadResponse {
  success: boolean;
  message: string;
  summary: {
    total: number;
    successful: number;
    failed: number;
  };
  successfulRecords: Array<{
    rowNumber: number;
    data: any;
    id?: string;
  }>;
  failedRecords: Array<{
    rowNumber: number;
    data: any;
    errors: Array<{
      field: string;
      message: string;
      code?: string;
    }>;
  }>;
  timestamp: Date;
}

export const bulkUploadService = {
  // Download product template
  async downloadProductTemplate(): Promise<void> {
    return downloadFile(
      '/bulk/products/template',
      'product-bulk-upload-template.xlsx'
    );
  },

  // Download user template
  async downloadUserTemplate(): Promise<void> {
    return downloadFile(
      '/bulk/users/template',
      'user-bulk-upload-template.xlsx'
    );
  },

  // Upload products Excel file
  async uploadProducts(file: File): Promise<BulkUploadResponse> {
    return uploadFile('/bulk/products/upload', file);
  },

  // Upload users Excel file
  async uploadUsers(file: File): Promise<BulkUploadResponse> {
    return uploadFile('/bulk/users/upload', file);
  },
};
