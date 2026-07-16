export interface ResumeUploadResult {
  id: string;
  fileName: string;
  storagePath: string;
  createdAt: string;
}

export interface ResumeUploadError {
  message: string;
}

export interface ResumeUploadResponse {
  success: boolean;
  data?: ResumeUploadResult;
  error?: ResumeUploadError;
}