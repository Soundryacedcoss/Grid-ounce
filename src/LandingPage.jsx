import { Grid } from "@cedcommerce/ounce-ui";
import React, { useEffect } from "react";
import { useState } from "react";
export const LandingPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((val) => setData(val));
  }, []);
  return (
    <div>
      <h2>Grid Ounce Ui</h2>
      <Grid
        columns={[
          {
            align: "center",
            dataIndex: "id",
            key: "name",
            title: "ID",
            width: 100,
          },
          {
            align: "center",
            dataIndex: "name",
            key: "age",
            title: "Name",
            width: 100,
          },
          {
            align: "center",
            dataIndex: "username",
            key: "address",
            title: "User Name",
            width: 100,
          },
        ]}
        dataSource={data}
      />
    </div>
  );
};
