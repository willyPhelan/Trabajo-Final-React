import { ImageListItem, ImageListItemBar } from "@mui/material" ;
import { styled } from "@mui/material/styles" ;
import PropTypes from "prop-types" ;
import { Link } from "react-router-dom" ;
import './Product.css'

Product.propTypes = {
  product: PropTypes.object,
}

const Imagen = styled("img")({
  width: "100%",
  height: "20vmin",
  objectFit: "contain",
  objectPosition: "center",
} ) ;

export default function Product({product}) {
  return (

    <Link className="link" to={`/products/${product.id}`}>

    <ImageListItem sx={{ width: "14vw" }}>

    <Imagen src={product.image} alt='no-img'/>

    <ImageListItemBar title={product.title} subtitle={<span>Price: {product.price} USD</span>} position="below"
          sx={{ fontWeight: "bold", textDecoration: "none", color: "text.primary" }}/>
    </ImageListItem>
    </Link>
  )
}


