import React from "react";

import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";

import Upload from "./components/Upload";
import FileList from "./components/FileList";

import { FileProvider } from "./context/files";

const App: React.FC = () => (
  <FileProvider>
    <Container>
      <Content>
        <Upload />
        <FileList />
      </Content>
      <GlobalStyle />
    </Container>
  </FileProvider>
);

export default App;
