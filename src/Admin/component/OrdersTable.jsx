import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../State/Admin/Order/Action";
import {
    Avatar,
    AvatarGroup,
    Card,
    CardHeader,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import Button from "@mui/material/Button";

const OrdersTable = () => {
    const dispatch = useDispatch()
    const { adminOrder } = useSelector(store => store)
    useEffect(() => {
        dispatch(getOrders)
    }, [])
    console.log("admin Orders ",adminOrder)
    return (
        <div>
             <Card>
        <CardHeader title="All Products">

        </CardHeader>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Catigory</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Delete</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {adminOrder.orders?.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <AvatarGroup>
                    {item.orderItem.map((orderItem) => <Avatar src={
                     orderItem.products.imageUrl
                    }>
                    </Avatar>)}
                  </AvatarGroup>
                  
                </TableCell>

                <TableCell align="left" scope="row">
                  {item.orderItems.map((orderItem)=><Avatar src={orderItem.product.imageUrl}></Avatar>)}
                  {item.title}
                </TableCell>
                {/* <TableCell align="left">{item.category.name}</TableCell> */}
                <TableCell align="left">{item.totalPrice}</TableCell>
                {/* <TableCell align="left">{item.quantity}</TableCell> */}
                <TableCell align="left">
                  <Button variant="outlined">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        </Card>
        </div>
    )
    }
export default OrdersTable;
