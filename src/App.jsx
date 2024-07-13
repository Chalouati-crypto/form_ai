import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Form from "./components/Form";
import { Container, CssBaseline, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const theme = createTheme();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="xs">
          <Form />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
