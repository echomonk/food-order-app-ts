import { List, Typography, Box, Button } from "@mui/material";

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
        justifyContent: " space-between",
        alignItems: "center",
        borderCottom: "2px solid #8a2b06",
        padding: "1rem 0",
        margin: "1rem 0",
      }}
    >
      <Box>
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
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          disabled={itemHasNoAmount}
          sx={{
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
            marginLeft: "1rem",
            margin: "0.25rem",
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
            marginLeft: "1rem",
            margin: "0.25rem",
            "&:hover": {
              backgroundColor: "#8a2b06",
              color: "white",
            },
          }}
          onClick={onAdd}
        >
          +
        </Button>
      </Box>
    </List>
  );
};

export default CartItem;
