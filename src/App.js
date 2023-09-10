import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "./Pages/Home/Home";
import Rotas from "./routes/Rotas";

function App() {
  const styles ={
    global:()=>({
      body:{
        fontFamily: 'Work Sans',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    })
  }

  const theme = extendTheme({styles})

  return (
    <ChakraProvider theme={theme}>
      <Rotas/>
    </ChakraProvider>
  );
}

export default App;
