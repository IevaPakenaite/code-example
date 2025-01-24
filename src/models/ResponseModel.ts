export interface ResponseModel {
  response: string;
  sources: ResponseSource[];
}

export interface ResponseSource {
  text: string;
  fileName: string;
  score: number;
  createdDate: string;
  modifiedDate: string;
}
