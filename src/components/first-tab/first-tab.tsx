import { Box, Button, Flex, Grid, Textarea } from "@mantine/core";

import { WordsTable } from "../words-table";

import classes from "./first-tab.module.css";

export const FirstTab = () => {
  return (
    <Grid>
      <Grid.Col span={6}>
        <Box className={classes.panel}>
          <Textarea
            placeholder="Ketik sebuah kalimat"
            mb="md"
            autosize
            minRows={3}
            maxRows={10}
          />
          <Flex justify="flex-end">
            <Button>Hitung Kata</Button>
          </Flex>
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box className={classes.panel}>
          <WordsTable />
        </Box>
      </Grid.Col>
    </Grid>
  );
};
