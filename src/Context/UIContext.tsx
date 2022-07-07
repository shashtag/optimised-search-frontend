import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { get } from "../APIs/Get";

export const UIContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}
export const UIProvider: React.FC<Props> = ({ children }) => {
  const initialState: any = {
    loading: false,
    input: "",
    page: 1,
  };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "loading":
        return { ...state, loading: action.payload };
      case "input":
        return { ...state, input: action.payload, page: 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const debounce = (cb: Function, delay = 500) => {
    let timeout: any;
    return (...args: any) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  let searchCache: any = {};

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const postData = useCallback(
    debounce(async (input: string, page: number) => {
      let key: string = input + " " + page;
      if (searchCache[key]) {
        return searchCache[key];
      }
      const { result } = await get(
        `http://localhost:8000/search/${input ? input + "/" : ""}${page}`,
      );
      searchCache[key] = result;
      return searchCache[key];
    }),
    [],
  );

  useEffect(() => {
    if (state.input.length > 2 || state.input.length === 0) {
      postData(state.input, state.page);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.input, state.page]);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};
