

import { signOut } from "@/auth";
import React from "react";
import { Button } from "./ui/button";

const LogoutBtn = () => {
  return (
    <form
      className="mb-10"
      action={async () => {
        

        //await signOut();
      }}
    >
      <Button>Logout</Button>
    </form>
  );
};

export default LogoutBtn;
