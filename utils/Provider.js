import Cookies from "js-cookie";
import { useReducer, createContext, useEffect } from "react";

export const SimpleShopContext = createContext();

const initialState = {
  lightTheme: true,
  allData: [],
  myDatas: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "THEME_SWITCHER":
      return { ...state, lightTheme: action.payload };

    case "SAVE_ALL_DATA":
      return {
        ...state,
        allData: action.payload,
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        myDatas: [
          ...state.myDatas,
          {
            img: action.img,
            name: action.name,
            desc: action.desc,
            id: action.id,
            price: action.price,
            color: action.color,
            material: action.material,
          },
        ],
      };

    case "REMOVE_PRODUCT":
      const newData = state.myDatas.filter((data) => data.id !== action.id);
      return {
        ...state,
        myDatas: newData,
      };

    default:
      return state;
  }
};

const SimpleShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const localData = Cookies.get("smpl-app");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    Cookies.set("smpl-app", JSON.stringify(state));
  }, [state]);

  const body = (
    <SimpleShopContext.Provider value={{ state, dispatch }}>
      {children}
    </SimpleShopContext.Provider>
  );

  return body;
};

export default SimpleShopContextProvider;
