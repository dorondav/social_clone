import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import Aside from "../Aside/Aside";
interface LayoutProps {
  children?: ReactNode;
  className?: string;

  // any props that come into the component
}
const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <Aside />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
