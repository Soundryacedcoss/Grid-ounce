import { Grid } from "@cedcommerce/ounce-ui";
import React, { useEffect } from "react";
import { useState } from "react";
import { MyModal } from "./Modal";
export const LandingPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let arr = [];
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((val) => {
        for (let i = 0; i < val.length; i++) {
          let obj = {
            id: val[i].id,
            name: val[i].name,
            action: <MyModal value={val[i].email} />,
          };
          arr.push(obj);
          setData([...arr]);
        }
      });
  }, []);
  console.log(data);
  return (
    <div>
      <h2>Grid Ounce Ui</h2>
      <Grid
        columns={[
          {
            align: "center",
            dataIndex: "id",
            key: "id",
            title: "ID",
            width: 100,
          },
          {
            align: "center",
            dataIndex: "name",
            key: "name",
            title: "Name",
            width: 100,
          },
          {
            align: "center",
            dataIndex: "action",
            key: "action",
            title: "Button",
            width: 100,
          },
        ]}
        dataSource={data}
      />
    </div>
  );
};
