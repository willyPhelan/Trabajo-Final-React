import { Box, CardMedia, CardContent, Typography } from "@mui/material" ;
import PropTypes from "prop-types" ;

CardP.propTypes = {
  singleProduct: PropTypes.object,
} 

export default function CardP({ singleProduct }) {

  const prod = singleProduct.data 

  
  if (prod) {

    return (

      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "start", }}>
       
        <CardMedia component="img" alt='no-img' height="250" image={prod.image} sx={{ flex: "1 0", objectFit: "contain", maxWidth: "15vmax" }}/>
        
        <CardContent sx={{ flex: "2 0" }}>
          <Typography
            variant="h4"
            component="h3"
            fontWeight="bold"
            align="right">
            {prod.title}
          </Typography>

          <Typography
            gutterBottom
            variant="body1"
            color="text.primary"
            fontWeight="bold"
            align="right">
            {prod.category}
          </Typography>

          <Typography
            gutterBottom
            paragraph
            component="p"
            variant="body2"
            color="text.primary"
            align="right"
            my="1.5rem">
            {prod.description}
          </Typography>

          <Typography
            variant="h4"
            component="div"
            fontWeight="bold"
            align="right">
            {prod.price + " USD"}
          </Typography>

        </CardContent>
      </Box>
    )
  }
}

 
