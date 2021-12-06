import React, { useState, useEffect, Component } from "react";
// import PetsIcon from '@material-ui/icons/Pets';
import { CircularProgress } from "@mui/material";
import "./loadingSpinner.css";

const LoadingSpinner = (props) => {
  return (
    <div className="loading">
      <p>점심 나가서 먹을거 가테~</p>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default LoadingSpinner;
