import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import Aside from "../Aside/Aside";
import TopNavBar from "../TopNavBar/TopNavBar";
interface LayoutProps {
  children?: ReactNode;
  className?: string;

  // any props that come into the component
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Aside />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
