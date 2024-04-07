import { WordStatItem } from "@/types";

export const sortWords = (arr: WordStatItem[]) => {
  return arr.sort((a, b) => {
    const wordA = a.word.toLowerCase();
    const wordB = b.word.toLowerCase();

    if (wordA < wordB) return -1;
    if (wordA > wordB) return 1;

    return 0;
  });
};
