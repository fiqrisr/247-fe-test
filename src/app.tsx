import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import { MainLayout } from "@/layouts";

function App() {
  return (
    <MantineProvider>
      <MainLayout>test</MainLayout>
    </MantineProvider>
  );
}

export default App;
