import { Injectable } from '@angular/core';
import { ApiCallType } from '../models/ApiCallType';
import { ApiCallMethod } from '../models/ApiCallMethod';
import { HttpClient } from '@angular/common/http';
import { StateService } from './state.service';
import { ApiCallStatus } from '../models/ApiCallStatus';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private _http:HttpClient,
    private _stateService : StateService) { }

  logEvent(callType:ApiCallType,
    callMethod:ApiCallMethod,
    ApiCallUrl:string,
    callData:any,
    status:ApiCallStatus,
    error:string
    ){
      //logic for logger
      let clientId = this._stateService.appData.client;
      let userSessionId = this._stateService.appData.sessionId;
      console.log("______________________________________________");
      console.log("Log: API call");
      console.log({
        "userSessionId": userSessionId,
          "clientId": clientId,
          "timestamp":Date.now(),
          "ApiCallMethod":callMethod,
          "ApiCallType":callType,
          "ApiCallUrl":ApiCallUrl,
          "callData":callData,
          "error":error
      });
      console.log("______________________________________________");
  }

}
