import Head from "next/head";
import { Global, css } from "@emotion/react";
import Nav from "./nav";
import { useContext } from "react";
import { SimpleShopContext } from "../utils/Provider";

export default function Layout({ children, title }) {
  const { state } = useContext(SimpleShopContext);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Sansita&display=swap");

          html {
            background-color: ${state.lightTheme ? null : "#1e1e1e"};
            font-family: "Sansita", sans-serif;
            margin: 0;
          }

          .topnav {
            overflow: hidden;
            background-color: ${state.lightTheme ? "#EAC9C1" : "#333333"};
            margin: 0;
          }

          .topnav a {
            float: left;
            display: block;
            color: ${state.lightTheme ? "#69626D" : "#FFFBFF"};
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
          }

          .topnav a:hover {
            background-color: ${state.lightTheme ? "#ebd8d0" : "#1e1e1e"};
          }

          .child {
            align-items: center;
            text-align: center;
            margin: auto;
            border: none;
            background-color: ${state.lightTheme ? "#EBD8D0" : "#333333"};
            border-radius: 10px;
            padding: 0 10px;
            min-height: 240px;
            width: 130px;
            cursor: pointer;
            color: ${!state.lightTheme && "#FFFBFF"};
          }

          h1 {
            text-align: center;
            color: ${state.lightTheme ? "#69626D" : "#ccae66"};
          }

          .column {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            @media (min-width: 1024px) {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
          }
        `}
      />
      <Nav />
      {children}
    </div>
  );
}
