import { Button, Card, FlexLayout, Modal } from "@cedcommerce/ounce-ui";
import React from "react";
import { useState } from "react";

export const MyModal = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Card>
        <Button
          onClick={function noRefCheck() {
            setOpen(true);
          }}
        >
          {" "}
          View
        </Button>
        <Modal
          open={open}
          close={function noRefCheck() {
            setOpen(false);
          }}
          heading="Description(Email)"
          modalSize="large"
          secondaryAction={{
            content: "Close",
            loading: false,
          }}
        >
          <h2>{props.value}</h2>
        </Modal>
      </Card>
    </div>
  );
};
