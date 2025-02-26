'use client'
import React, { Fragment, useRef } from "react";
import { Navbar, Container } from "react-bootstrap";
import { usePathname } from "next/navigation";
import {
  FaAlignLeft,
  FaHourglassEnd,
  FaUserAlt,
} from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import {
  MdClosedCaptionDisabled,
  MdOutlineCreateNewFolder,
  MdOutlineDashboardCustomize,
} from "react-icons/md";


import { getUserDetails, removeSession } from "../../helper/SessionHelper";
import Link from "next/link";

const MasterLayout = (props) => {
  const pathname = usePathname();
  let sidebarRef,
    contentRef = useRef();

  const onLogout = () => {
    removeSession();
  };
  const menuCollapes = () => {
    let sideNav = sidebarRef;
    let content = contentRef;
    if (sideNav.classList.contains("sideNavbar")) {
      sideNav.classList.add("sideNavbar-close");
      sideNav.classList.remove("sideNavbar");
      content.classList.add("content-expand");
      content.classList.remove("content");
    } else {
      sideNav.classList.remove("sideNavbar-close");
      sideNav.classList.add("sideNavbar");
      content.classList.remove("content-expand");
      content.classList.add("content");
    }
  };

  return (
    <Fragment>
      <nav>
        <Container fluid={true}>
          <div className="row">
            <div className="col">
              <div className="logo__section">
                <BiMenuAltLeft onClick={menuCollapes} />
                <Navbar.Brand as={Link} href={"/"}>
                  {" "}
                  <img src="/assets/image/logo.png" alt="logo" className="img-fluid" />
                </Navbar.Brand>
              </div>
              <div className="user__section">
                <div className="user__display">
                  <div className="img__file">
                    <img src={getUserDetails()?.photo} alt="" />
                  </div>
                </div>
                <div className="user__dropdown">
                  <div className="item__container">
                    <div className="img__file">
                      <img
                        className="mb-10"
                        src={getUserDetails()?.photo}
                        alt=""
                      />
                      <h6>
                        {getUserDetails()?.fastName}{" "}
                        {getUserDetails()?.lastName}
                      </h6>
                    </div>
                    <hr />
                    <div className="text__items">
                      <div>
                        <Link href={"/profile"}>
                          <FaUserAlt className="mr-10" />
                          <span>Profile</span>
                        </Link>
                      </div>
                      <div>
                        <Link href={"/"} onClick={onLogout}>
                          <FiLogOut className="mr-10" />
                          <span>Logout</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Side Navbar */}
      <div
        ref={(div) => {
          sidebarRef = div;
        }}
        className="sideNavbar"
      >
        <Link
          href={"/"}
          className={pathname == "/" ? "navItems sideItemActive" : "navItems"}
        >
          <span>
            <MdOutlineDashboardCustomize className="mr-5" />
          </span>
          Dashboard
        </Link>
        <Link
          href={"/create"}
          className={pathname == "/create" ? "navItems sideItemActive" : "navItems"}
        >
          <span>
            <MdOutlineCreateNewFolder className="mr-5" />
          </span>
          Create New
        </Link>
        <Link
          href={"/new"}
          className={pathname == "/new" ? "navItems sideItemActive" : "navItems"}
        >
          <span>
            <FaAlignLeft className="mr-5" />
          </span>
          New Task
        </Link>
        <Link
          href={"/progress"}
          className={pathname == "/progress" ? "navItems sideItemActive" : "navItems"}
        >
          <span>
            <MdOutlineCreateNewFolder className="mr-5" />
          </span>
          In Progress
        </Link>
        <Link
          href={"/completed"}
          className={pathname == "/completed" ? "navItems sideItemActive" : "navItems"}
        >
          <span>
            <FaHourglassEnd className="mr-5" />
          </span>
          Completed
        </Link>
        <Link
          href={"/canceled"}
          className={pathname == "/canceled" ? "navItems sideItemActive" : "navItems"}
        >
          <span>
            <MdClosedCaptionDisabled className="mr-5" />
          </span>
          Canceled
        </Link>
      </div>

      {/* Layout Child */}

      <div
        ref={(div) => {
          contentRef = div;
        }}
        className="content"
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default MasterLayout;
