import { ThemeProvider } from "styled-components";
import { useState } from "react";

import { lightTheme } from "./theme/light";
import { darkTheme } from "./theme/dark";

import { GlobalStyles } from "./Styles/GlobalsStyles";
import { Input } from "./Components/Input";
import { Button } from "./Components/Button";
import { Badge } from "./Components/Badge";
import { Card } from "./Components/Card";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button onClick={() => setDark((prev) => !prev)}>Toggle Theme</Button>
      <h1>Design System 🚀</h1>

      <Card>
        <h2>Demo Card</h2>

        <Input placeholder="Enter text..." />

        <br />
        <br />

        <Button>Primary</Button>
        <Button variant="danger">Delete</Button>

        <br />
        <br />

        <Badge>Active</Badge>
      </Card>
    </ThemeProvider>
  );
}

export default App;
