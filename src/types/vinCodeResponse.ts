import { VariableIdTypes, VariablesListTypes, VinCode } from "./vinCode";
export class VinCodeResponse {
  Results: VinCode[];

  constructor(Results: VinCode[]) {
    this.Results = Results;
  }
}
export class VariablesListResponse{
    Results: VariablesListTypes[];
    constructor(Results: VariablesListTypes[]) {
        this.Results = Results
    }
}

export class VariableIdResponse {
  Results: VariableIdTypes[];
  constructor(Results: VariableIdTypes[]) {
    this.Results = Results;
  }
}