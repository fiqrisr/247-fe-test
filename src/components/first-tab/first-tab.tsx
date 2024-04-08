import { useState, useCallback } from "react";
import { Box, Button, Flex, Grid, Textarea } from "@mantine/core";

import { WordStatItem } from "@/types";
import { sortWords } from "@/utils";

import { WordsTable } from "./words-table";
import classes from "./first-tab.module.css";

export const FirstTab = () => {
  const [text, setText] = useState("");
  const [words, setWords] = useState<WordStatItem[]>([]);

  const countWords = useCallback(() => {
    const wordCountMap: Record<string, number> = {};
    const trimmedText = text.trim().toLocaleLowerCase();
    const filteredWords = trimmedText
      .split(/\s+/)
      .filter((word) => word !== "");

    filteredWords.forEach((w) => {
      if (wordCountMap[w]) wordCountMap[w]++;
      else wordCountMap[w] = 1;
    });

    const uniqueWords = Object.keys(wordCountMap).map((w) => ({
      word: w,
      count: wordCountMap[w],
    }));

    setWords(sortWords(uniqueWords));
  }, [text]);

  const onWordDelete = (word: string) => {
    setWords(words.filter((w) => w.word !== word));
    const regex = new RegExp("\\b" + word + "\\b", "gi");
    const newText = text.replace(regex, "");
    const cleanedText = newText.replace(/\s+/g, " ");
    setText(cleanedText.trim());
  };

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
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Flex justify="flex-end">
            <Button onClick={() => countWords()}>Hitung Kata</Button>
          </Flex>
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box
          className={classes.panel}
          mah="70vh"
          style={{
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <WordsTable data={words ?? []} onDelete={onWordDelete} />
        </Box>
      </Grid.Col>
    </Grid>
  );
};
