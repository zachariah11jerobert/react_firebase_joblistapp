import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container justify="center">
        <Grid item xs={10}>
          <SearchBar />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
