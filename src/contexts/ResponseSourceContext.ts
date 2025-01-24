import { createContext } from "react";
import { ResponseSource } from "../models/ResponseModel";

const ResponseSourceContext = createContext<{
  source: ResponseSource[] | undefined;
  setSource: React.Dispatch<React.SetStateAction<ResponseSource[] | undefined>>;
}>({
  source: [],
  setSource: () => {},
});

export default ResponseSourceContext;
