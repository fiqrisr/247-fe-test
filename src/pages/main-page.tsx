import { Tabs } from "@mantine/core";

import { FirstTab, SecondTab } from "@/components";

export const MainPage = () => {
  return (
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">Tab Pertama</Tabs.Tab>
        <Tabs.Tab value="second">Tab Kedua</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" mt="md">
        <FirstTab />
      </Tabs.Panel>
      <Tabs.Panel value="second" mt="md">
        <SecondTab />
      </Tabs.Panel>
    </Tabs>
  );
};
