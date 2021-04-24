import { createContext } from "react";

const authContextDefaultValues: { state: any; dispatch: any } = {
  state: {},
  dispatch: null,
};

const authContext = createContext(authContextDefaultValues);

export default authContext;
