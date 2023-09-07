import AppBar from "@mui/material/AppBar" ;
import Box from "@mui/material/Box" ;
import Toolbar from "@mui/material/Toolbar" ;
import Button from "@mui/material/Button" ;
import { useLocation, useNavigate } from "react-router-dom" ;

export default function Header() {

  const { pathname } = useLocation() ;

  const nav = useNavigate() ;

  return (

    <Box sx={{ flexGrow: 1 }}>

    <AppBar position="sticky" color="primary" enableColorOnDark>

    <Toolbar sx={{ display: "flex", justifyContent: "center", gap: "5%" }}>

    <Button color="inherit" sx={{ backgroundColor: pathname === "/products" ? "#c2c2c280" : "none" }}
            onClick={() => { nav("products") }}>
            Products
          </Button>

          <Button color="inherit" sx={{ backgroundColor: pathname === "/carts" ? "#c2c2c280" : "none" }}
                  onClick={() => { nav("carts") }}>
            Carts
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
