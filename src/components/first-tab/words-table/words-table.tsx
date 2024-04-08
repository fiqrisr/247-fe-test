import { Center, Table, Text } from "@mantine/core";

import { WordStatItem } from "@/types";

type WordsTableProps = {
  data: WordStatItem[];
  onDelete: (word: string) => void;
};

export const WordsTable = ({ data = [], onDelete }: WordsTableProps) => {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Center>Kata</Center>
          </Table.Th>
          <Table.Th>
            <Center>Jumlah Kata</Center>
          </Table.Th>
          <Table.Th>
            <Center>Hapus</Center>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {!data.length && (
          <Table.Tr>
            <Table.Td colSpan={3}>
              <Center>
                <Text py="xl">Data Kosong</Text>
              </Center>
            </Table.Td>
          </Table.Tr>
        )}
        {data.map((w) => (
          <Table.Tr key={w.word}>
            <Table.Td align="center">{w.word}</Table.Td>
            <Table.Td align="center">{w.count}</Table.Td>
            <Table.Td align="center">
              <Text
                onClick={() => onDelete(w.word)}
                c="red"
                size="sm"
                style={{ cursor: "pointer" }}
              >
                Hapus
              </Text>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
