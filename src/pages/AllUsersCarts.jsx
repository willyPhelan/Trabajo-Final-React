import {Box, Container, FormControl, InputLabel, MenuItem, Select, Stack, Typography, Divider} from "@mui/material" ;
import Cart from "../components/Cart" ;
import { useMutation, useQuery } from "react-query" ;
import Service from "../Service" ;
import { Fragment } from "react" ;

export default function AllUsersCarts() {

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => Service.getUsers()
  })

  const cartsMutation = useMutation((selectedUser) => {
    return Service.getUserCarts(selectedUser)
  })

  const handleChange = (event) => {
    if (event.target.value) {
      cartsMutation.mutate(event.target.value)
    }
  }

  return (

    <Container maxWidth="md">

      <Typography
        variant="h4"
        component="h2"
        align="center"
        my="2.5rem"
        fontWeight="bold">
        Carts
      </Typography>

      <Box display="flex" justifyContent="center" sx={{marginBottom: "30px", marginTop: "30px" }}>
        
        <FormControl sx={{ width: "50%" }}>
         
          <InputLabel id="user-select-label">User</InputLabel>
          
          <Select
            labelId="user-select-label"
            id="user-select"
            label="User"
            onChange={handleChange}
            defaultValue={-1}>
            <MenuItem value={-1} sx={{ display: "none" }}></MenuItem>

            {usersQuery.data?.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name.firstname.replace(/^./, user.name.firstname[0].toUpperCase()) + " " +
                  user.name.lastname.replace(/^./,
                    user.name.lastname[0].toUpperCase())}
              </MenuItem>
            ))}

          </Select>
        </FormControl>
      </Box>

      <Stack spacing={2} divider={
          <Divider
            sx={{
              width: "50vw",
              minHeight: "6px",
              backgroundColor: "#c2c2c2",
              alignSelf: "center",
            }}/>
        }>
          
        {cartsMutation.data?.map((cart) => (
          <Fragment key={cart.id}>
            <Cart cart={cart} />
          </Fragment>
        ))}
      </Stack>
    </Container>
  )
}
