import API from "../api/API";
import { VariableIdResponse, VariablesListResponse, VinCodeResponse } from "../types/vinCodeResponse";

class VinService {
  async getDecodeVin(vin: string) {
    try {
      const response = await API.get<VinCodeResponse>(
        `/vehicles/DecodeVin/${vin}?format=json`
      );
      return response.data.Results;
    } catch (error) {
      throw error;
    }
  }
  async getVariablesList() {
    try {
      const response = await API.get<VariablesListResponse>(
        `/vehicles/getvehiclevariablelist?format=json`
      );
      return response.data.Results;
    } catch (error) {
      throw error;
    }
  }
  async getVariableId(id: string) {
    try {
      const response = await API.get<VariableIdResponse>(
        `vehicles/getvehiclevariablevalueslist/${id}?format=json`
      );
        return response.data.Results
    } catch (error) {
      throw error;
    }
  }
}

export default VinService;
