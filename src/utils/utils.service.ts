import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { ResponseObject} from './utils.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UtilsService {
  constructor(
    private config: ConfigService,
  ) { }

  sendResponse(res: Response, statusCode: number, data: any, message: string) {
    const responseObject: ResponseObject = {
      statusCode,
      message,
      data,
    };
    return res.status(statusCode).json(responseObject);
  }

}