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
  
  export default function Leftbar() {
    return (
      <div className={styles.leftbar}>
        <div className={styles.leftbarWrapper}>
          <MenuLink icon={<HomeOutlined />} text="Homepage" />
          <MenuLink icon={<List />} text="Lists" />
          <MenuLink icon={<ShoppingBasketOutlined />} text="Products" />
          <MenuLink icon={<GroupOutlined />} text="Groups" />
          <MenuLink icon={<FileCopyOutlined />} text="Pages" />
          <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
          <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
          <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
          <MenuLink icon={<HearingOutlined />} text="Wishlist" />
          <MenuLink icon={<Settings />} text="Settings" />
          <MenuLink icon={<ExitToAppOutlined />} text="Logout" />
        </div>
      </div>
    );
  }