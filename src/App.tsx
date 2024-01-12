import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@mui/material";
// import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { themeOptions } from "./style/styles";

function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider theme={themeOptions}>
          <div className={"App"}>
            {/* <BrowserRouter> */}
            <AppRoutes />
            {/* </BrowserRouter> */}
          </div>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
