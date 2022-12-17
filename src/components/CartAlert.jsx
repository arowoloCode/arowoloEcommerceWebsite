import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function CartAlert({ open, handleClose }) {
  return (
    <Snackbar open={open.status} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={open.severity}
        sx={{ width: "100%" }}
      >
        {open.message}
      </Alert>
    </Snackbar>
  );
}
export default CartAlert;
