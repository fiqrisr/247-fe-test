import { AppShell, Center, Container, Text } from "@mantine/core";

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Center h="100%">
          <Text size="xl" fw={500}>
            Fiqri Syah Redha
          </Text>
        </Center>
      </AppShell.Header>
      <AppShell.Main>
        <Container size="lg">{children}</Container>
      </AppShell.Main>
      <AppShell.Footer>
        <Center h="100%">Senin, 8 April 2024</Center>
      </AppShell.Footer>
    </AppShell>
  );
};
