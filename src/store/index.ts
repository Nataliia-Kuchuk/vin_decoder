import { makeObservable, observable, action } from "mobx";
import VinService from "../service/vinService";
import { LastVinsTypes, VariableIdTypes, VariablesListTypes, VinCode as VinCodeTypes } from "../types/vinCode";
import { makePersistable } from "mobx-persist-store";

class VinCode {
  vinInfo: VinCodeTypes[] | null;
  error = null;
  pending = false;
  vinCodeService: VinService;
  vinValue = "";
  fiveLastVins = [] as LastVinsTypes[];
    variablesList?: VariablesListTypes[] | null;
    variableId: VariableIdTypes[] | null;

  constructor(
    vinInfo: VinCodeTypes[] | null,
      variablesList: VariablesListTypes[] | null,
     variableId: VariableIdTypes[] | null,
    VinService: any
  ) {
    this.vinInfo = vinInfo;
    this.vinCodeService = VinService;
      this.variablesList = variablesList;
      this.variableId = variableId

    makeObservable(this, {
      vinInfo: observable,
      variablesList: observable,
      error: observable,
      pending: observable,
      vinValue: observable,
      fiveLastVins: observable,
      variableId: observable,
      getVinValue: action,
      getVariableId: action
    });
    makePersistable(this, {
      name: "fiveLastVins",
      properties: ["fiveLastVins"],
      storage: window.localStorage,
    });
  }

  async getVinCode(vin: string) {
    try {
      this.pending = true;
      const response = await this.vinCodeService.getDecodeVin(vin);
      this.vinInfo = response;
      this.pending = false;
    } catch (error) {
      this.pending = false;
      console.log(error);
    }
  }
  getVinValue(vin: string) {
    this.vinValue = vin;
  }
  getLastVins(vin: string) {
    if (this.fiveLastVins.length >= 5) {
      this.fiveLastVins.shift();
    }
    this.fiveLastVins.push(vin);
  }
  async getVariablesList() {
    try {
      this.pending = true;
      const response = await this.vinCodeService.getVariablesList();
      this.variablesList = response;
      this.pending = false;
    } catch (error) {
      this.pending = false;
      console.log(error);
    }
  }
  async getVariableId(id: string) {
    try {
      this.pending = true;
      const response = await this.vinCodeService.getVariableId(id);
      this.variableId= response;
      this.pending = false;
    } catch (error) {
      this.pending = false;
      console.log(error);
    }
  }
}

export default VinCode;
