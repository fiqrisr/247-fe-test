import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import { MainLayout } from "@/layouts";
import { MainPage } from "@/pages";

function App() {
  return (
    <MantineProvider>
      <MainLayout>
        <MainPage />
      </MainLayout>
    </MantineProvider>
  );
}

export default App;
