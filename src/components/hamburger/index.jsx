import React, { useState } from "react";
import Icon from "../icon";
import DrawerMenu from "../drawer";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Icon name={"hambergermenu"} onClick={() => setOpen(true)} />
      <DrawerMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Hamburger;
