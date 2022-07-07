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

  const postData = useCallback(
    debounce(async (input: string, page: number) => {
      const { result } = await get(
        `http://localhost:8000/search/${input ? input + "/" : ""}${page}`,
      );
      console.table(result);
    }),
    [],
  );

  useEffect(() => {
    if (state.input.length > 2 || state.input.length === 0) {
      postData(state.input, state.page);
    }
    return () => {};
  }, [state.input, state.page]);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};
