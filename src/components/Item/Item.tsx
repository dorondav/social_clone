import React, { ReactNode } from "react";

interface ItemProps {
  children?: ReactNode;
  className?: string;
}

const Item = ({ children, ...props }: ItemProps) => {
  return <div>{children}</div>;
};

export default Item;
