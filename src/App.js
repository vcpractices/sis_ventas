import Icon from '@material-ui/core/Icon';
import { createMuiTheme, ThemeProvider, Button } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';

import './App.css';
import Cards from './components/cards/Cards';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      }
    }
  })

  return (
    <div className="App">
        <p>
          <h1>App</h1>
          <Icon>start</Icon>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">Start</Button>
            <Button variant="contained" color="secondary">Select</Button>
          </ThemeProvider>
          <Cards />

        </p>
    </div>
  );
}

export default App;
