import axios, { AxiosRequestConfig } from "axios";

export class BaseService {
  async requestGet<T>(
    url: string,
    config: AxiosRequestConfig<T> = {}
  ): Promise<T> {
    try {
      const result = await axios.get<T>(url, config);
      return result.data;
    } catch (err: unknown) {
      console.error("BaseService Err: ", err);
      /// TODO: Handle error
      throw err;
    }
  }
}
