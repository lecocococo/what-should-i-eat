import React, { useState, useEffect, Component } from "react";
// import PetsIcon from '@material-ui/icons/Pets';
import { CircularProgress } from "@mui/material";
import "./loadingSpinner.css";

const LoadingSpinner = (props) => {
  return (
    <div className="loading">
      <p>로딩중입니다...</p>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default LoadingSpinner;
