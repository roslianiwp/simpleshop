import { useContext } from "react";
import { SimpleShopContext } from "../utils/Provider";
import Link from "next/link";

export default function Nav() {
  const { state, dispatch } = useContext(SimpleShopContext);

  const changeTheme = () => {
    dispatch({ type: "THEME_SWITCHER", payload: !state.lightTheme });
  };

  return (
    <div className="topnav" id="myTopnav">
      <Link href="/">Home</Link>
      <Link href="/my-list">Cart</Link>

      <div
        style={{
          float: "right",
          padding: "15px 10px 0px 0px",
        }}
      >
        <button
          id="change-theme"
          aria-label="change-theme"
          style={{
            borderRadius: "40%",
            border: "none",
            backgroundColor: state.lightTheme ? "#333333" : "white",
          }}
          onClick={changeTheme}
        >
          {state.lightTheme ? (
            <svg
              style={{
                width: "15px",
                color: "white",
                marginTop: "2px",
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          ) : (
            <svg
              style={{
                color: "black",
                width: "15px",
                marginTop: "3px",
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
