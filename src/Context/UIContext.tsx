import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { get } from "../APIs/Get";
import moment from "moment";

type StateType = {
  loading: boolean;
  input: string;
  page: number;
};
interface Props {
  children: React.ReactNode;
}

export const UIContext = createContext<any>(null);
console.log(UIContext);

export const UIProvider: React.FC<Props> = ({ children }) => {
  const initialState: StateType = {
    loading: false,
    input: "",
    page: 1,
  };
  const reducer = (
    state: StateType,
    action: { type: string; payload: any },
  ) => {
    switch (action.type) {
      case "loading":
        return { ...state, loading: action.payload };
      case "input":
        return { ...state, input: action.payload, page: 1 };
      case "data":
        return { ...state, data: action.payload };
      case "prev":
        return { ...state, page: state.page - 1 };
      case "next":
        return { ...state, page: state.page + 1 };
      case "setPage":
        return { ...state, page: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const debounce = (cb: Function, delay = 500) => {
    let timeout: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  const searchCache: any = useMemo(() => ({}), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const postData = useCallback(
    debounce(async (input: string, page: number) => {
      let key: string = input + " " + page;
      if (
        searchCache[key] &&
        moment(searchCache[key].endTime).isAfter(moment())
      ) {
        dispatch({ type: "loading", payload: false });
        dispatch({ type: "data", payload: searchCache[key] });
        return;
      }
      const { result } = await get(`${input ? input + "/" : ""}${page}`);
      searchCache[key] = result;
      searchCache[key].endTime = moment().add(10, "minutes");
      dispatch({ type: "loading", payload: false });
      dispatch({ type: "data", payload: searchCache[key] });
    }),
    [],
  );

  useEffect(() => {
    if (state.input.length > 2 || state.input.length === 0) {
      dispatch({ type: "loading", payload: true });
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
