import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";
import "./TableData.css";
import { Box } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Username", width: 120 },
  { field: "name", headerName: "Name", width: 170 },
  { field: "email", headerName: "Email", width: 210 },
  {
    field: "phone",
    headerName: "Phone No.",
    width: 180,
  },
];
const DemoPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: "rgb(232, 230, 230)",
  color: "red",
}));

export default function TableData({ searchInput }) {
  const [posts, setPosts] = useState([]);
  // Fetching data from api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="table-container">
      <DemoPaper>
        <Box
          sx={{
            width: {
              xs: "354px",
              sm: "580px",
              md: "750px",
              lg: "800px",
              xl: "850px",
            },
          }}
        >
          <DataGrid
            rows={posts
              .filter((item) => {
                //Filtering data for search result
                if (searchInput === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  return item;
                } else if (
                  item.username
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((post) => post)}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            css={css`
              color: "white";
            `}
          />
        </Box>
      </DemoPaper>
    </div>
  );
}
