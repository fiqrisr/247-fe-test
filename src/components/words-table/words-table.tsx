import { Center, Table, Text } from "@mantine/core";

import { WordStatItem } from "@/types";

type WordsTableProps = {
  data: WordStatItem[];
};

export const WordsTable = ({ data = [] }: WordsTableProps) => {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Kata</Table.Th>
          <Table.Th>Jumlah Kata</Table.Th>
          <Table.Th>Hapus</Table.Th>
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
      </Table.Tbody>
    </Table>
  );
};
