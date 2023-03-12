import React, { useRef } from "react";
import { Button, FormControl, Input } from "@mui/material";
import { Stack } from "@mui/system";

type MealItemFormProps = {
  id: string;
  onAddItem: (arg0: number) => void;
};

const MealItemForm = ({ id, onAddItem }: MealItemFormProps) => {
  // Get amount input ref
  const amountInputRef = useRef<any>();

  /**
   * Submit add item
   * @param e
   * @returns void
   */
  const submitAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    onAddItem(enteredAmountNumber);
  };

  return (
    <FormControl
      sx={{
        textAlign: "right",
      }}
    >
      <Stack
        direction="column"
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "20rem",
          maxHeight: "3rem",
          pt: 2,
          mr: 2,
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "20rem",
            maxHeight: "3rem",
            pt: 2,
            mr: 2,
          }}
        >
          <label htmlFor={"Amount_" + id}>Amount</label>
          <Input
            inputRef={amountInputRef}
            id={"Amount_" + id}
            type="number"
            inputProps={{
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
            sx={{
              width: "3rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              font: "inherit",
              pl: "0.5rem",
            }}
          />
        </Stack>
        <Button
          onClick={submitAddItem}
          sx={{
            font: "inherit",
            cursor: "pointer",
            backgroundColor: "#8a2b06",
            border: "1px solid #8a2b06",
            color: "white",
            p: "0.25rem 2rem",
            borderRadius: "20px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#ad5502",
              border: "1px solid #ad5502",
            },
            active: {
              backgroundColor: "#641e03",
              borderColor: "#641e03",
            },
          }}
        >
          + Add
        </Button>
      </Stack>
    </FormControl>
  );
};

export default MealItemForm;
