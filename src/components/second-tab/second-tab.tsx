import { useState, useRef } from "react";
import { Box, Button, Flex, NumberInput } from "@mantine/core";

import classes from "./second-tab.module.css";

export const SecondTab = () => {
  const numberInputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);

  const handleChange = () => {
    const value = parseInt(numberInputRef.current?.value ?? "0");
    if (!isNaN(value) && value > 0 && value <= 10000) {
      setCount(value);
    }
  };

  const calculateBoxSize = (
    panelWidth: number,
    panelHeight: number,
    numberOfBoxes: number,
  ) => {
    const boxCountPerRow = Math.ceil(Math.sqrt(numberOfBoxes));
    const boxSize = Math.min(
      panelWidth / boxCountPerRow,
      panelHeight / boxCountPerRow,
    );
    return boxSize;
  };

  const renderBoxes = () => {
    const boxes = [];
    for (let i = 0; i < count; i++) {
      boxes.push(<Box key={i} className={classes.box}></Box>);
    }

    return boxes;
  };

  return (
    <Flex direction="column">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
        }}
      >
        <Flex align="flex-end" gap="md">
          <NumberInput
            ref={numberInputRef}
            label="Jumlah Kotak"
            placeholder="Maksimal 10000"
            min={0}
            max={10000}
            value={count}
          />
          <Button type="submit" onClick={() => handleChange()}>
            Tampilkan
          </Button>
        </Flex>
      </form>
      <Box
        mt="md"
        className={classes.panel}
        ref={(ref) => {
          if (ref) {
            const panelWidth = ref.offsetWidth;
            const panelHeight = ref.offsetHeight;
            const boxSize = calculateBoxSize(panelWidth, panelHeight, count);
            ref.style.setProperty("--box-size", `${boxSize}px`);
          }
        }}
      >
        {count < 1 && <span>Masukkan jumlah kotak</span>}
        {count > 0 && (
          <Box className={classes["box-container"]}>{renderBoxes()}</Box>
        )}
      </Box>
    </Flex>
  );
};
