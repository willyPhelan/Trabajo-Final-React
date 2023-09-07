import {Paper,Table ,TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PropTypes from "prop-types";

Cart.propTypes = {
  cart: PropTypes.object
}

function Cart({ cart }) {

  const totalProducts = () => cart.products.reduce((sum, curr) => sum + curr.quantity, 0) ;

  const date = new Date(cart.date).toLocaleDateString("en-GB") ;

  return (

    <Grid container spacing={2} sx={{ backgroundColor: "#c2c2c250", padding: "20px" }}>

      <Grid xs={6}>

        <Typography variant="h5" component="h3">
          {date}
        </Typography>

      </Grid>

      <Grid xs={6} display="flex" justifyContent="space-evenly">

        <Typography variant="h5" component="h3" align="center">
          Total
        </Typography>

        <Typography variant="h5" component="h3" align="center">
          {totalProducts()}
        </Typography>

      </Grid>

      <Grid xs={12}>
        <BasicTable products={cart.products} />
      </Grid>
    </Grid>
  )
}

const BasicTable = ({ products }) => {
  
  return (

    <TableContainer component={Paper} elevation={0} sx={{ backgroundColor: "#c2c2c210" }}>

    <Table aria-label="simple table">

    <TableHead>

     <TableRow sx={{ "td, th": { borderColor: "#000" } }}>

     <TableCell>ID</TableCell>

     <TableCell align="right">Quantity</TableCell>

      </TableRow>
      </TableHead>

        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.productId}
              sx={{
                "td, th": { borderColor: "#000" },
                "&:last-child td, &:last-child th": { border: 0 },
              }}>

              <TableCell>{product.productId}</TableCell>

              <TableCell align="right">{product.quantity}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

BasicTable.propTypes = {
  products: PropTypes.array,
}

export default Cart ;
