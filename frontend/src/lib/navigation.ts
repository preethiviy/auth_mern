import { NavigateFunction, NavigateOptions } from "react-router-dom";

export let navigate = (to: string, options?: NavigateOptions) => {};

export const setNavigate = (fn: NavigateFunction) => {
  navigate = fn;
};
