import ExitToAppOutlined from '@mui/icons-material/ExitToApp';
import FileCopyOutlined from '@mui/icons-material/FileCopyOutlined';
import GroupOutlined from '@mui/icons-material/GroupOutlined';
import HearingOutlined from '@mui/icons-material/HearingOutlined';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import List from '@mui/icons-material/List';
import MovieCreationOutlined from '@mui/icons-material/MovieCreationOutlined';
import PhotoSizeSelectActualOutlined from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import ScheduleOutlined from '@mui/icons-material/ScheduleOutlined';
import Settings from '@mui/icons-material/Settings';
import ShoppingBasketOutlined from '@mui/icons-material/ShoppingBasketOutlined';

  import React from "react";
  import MenuLink from "./menuLink";
  import styles from '../styles/Leftbar.module.css';
  import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Link from 'next/link';

  export default function Leftbar() {
    return (
      // 
      <div className={styles.sidebar}>
        <div className={styles.center}> 
          <ul className={styles.List}>
            <p className={styles.title}>MAIN</p>
            <li className={styles.li}>
            <Link href="/profile" style={{ textDecoration: "none" }}>
                <a style={{ textDecoration: "none" }}>
                <DashboardIcon className={styles.icon} />
              <span className={styles.span}>Homepage</span>
                </a>
                
              </Link>
              
            </li>
            <p className="title">LISTS</p>
            <li className={styles.li}>
            <Link href="/profile/modifyUsers" style={{ textDecoration: "none" }}>
                <a style={{ textDecoration: "none" }}>
                <PersonOutlineIcon className={styles.icon} />
                <span className={styles.span}>Users</span>
                </a>
                
              </Link>
              
            </li>
            <li className={styles.li}>
              <Link href="/profile/modifyMenu" style={{ textDecoration: "none" }}>
                <a style={{ textDecoration: "none" }}>
                  <PersonOutlineIcon className={styles.icon} />
                  <span className={styles.span}>Menu</span>
                </a>
                
              </Link>
            </li>
            <li className={styles.li}>
            <Link href="/profile/modifyHomepage" style={{ textDecoration: "none" }}>
                <a style={{ textDecoration: "none" }}>
                <CreditCardIcon className={styles.icon} />
                <span className={styles.span}>Homepage</span>
                </a>
            </Link>
            </li>
            <li className={styles.li}>
            <LocalShippingIcon className={styles.icon} />
              <span className={styles.span}>Delivery</span>
            </li>
            <li className={styles.li}>
            <SettingsApplicationsIcon className={styles.icon} />
            <span className={styles.span}>Settings</span>
            </li>
            <li className={styles.li}>
            <AccountCircleOutlinedIcon className={styles.icon} />
              <span className={styles.span}>Profile</span>
            </li>
            <li className={styles.li}>
            <ExitToAppIcon className={styles.icon} />
              <span className={styles.span}>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }