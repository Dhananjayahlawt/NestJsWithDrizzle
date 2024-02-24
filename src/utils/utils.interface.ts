export interface ResponseObject {
  statusCode: number;
  message: string;
  data: any;
}

export interface FunctionReturnObject {
  status: boolean;
  data: any;
  message: string;
  error:any
}
