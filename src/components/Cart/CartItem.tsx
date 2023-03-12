import { List, Typography, Box, Button, Stack, Grid } from "@mui/material";

type Props = {
  name: string;
  price: number;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
  itemHasNoAmount: boolean;
};

const CartItem = ({
  name,
  price,
  amount,
  onRemove,
  onAdd,
  itemHasNoAmount,
}: Props) => {
  const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <List
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #8a2b06",
        width: "100%",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Stack direction={"column"} spacing={1}>
            <Typography
              sx={{
                margin: "0 0 0.5rem 0",
                color: "#363636",
              }}
            >
              {name}
            </Typography>
            <Box
              sx={{
                width: "10rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#8a2b06",
                }}
              >
                {fixedPrice}
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            border: "1px solid #ccc",
            padding: "0.25rem 0.75rem",
            borderRadius: "6px",
            color: "#363636",
          }}
        >
          {amount}
        </Typography>
        <Button
          disabled={itemHasNoAmount}
          sx={{
            ml: 1,
            height: "1rem",
            minWidth: "2rem",
            font: "inherit",
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: " #8a2b06",
            border: "1px solid #8a2b06",
            textAlign: "center",
            border$adius: "6px",
            backgroundColor: "transparent",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#8a2b06",
              color: "white",
            },
          }}
          onClick={onRemove}
        >
          −
        </Button>
        <Button
          sx={{
            ml: 1,
            height: "1rem",
            minWidth: "2rem",
            font: "inherit",
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: " #8a2b06",
            border: "1px solid #8a2b06",
            textAlign: "center",
            borderRadius: "6px",
            backgroundColor: "transparent",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#8a2b06",
              color: "white",
            },
          }}
          onClick={onAdd}
        >
          +
        </Button>
      </Stack>
    </List>
  );
};

export default CartItem;
