import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "../components_css/login.css";

export default function AuthDialog({ open, setopen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State to track if login or signup dialog is shown

  const handleClose = () => {
    setopen(false);
  };

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    handleClose();
  };

  const handleSignup = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Mobile Number:", mobileNumber);
    handleClose();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const switchToSignup = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <Dialog open={open} onClose={handleClose} className="login-dialog">
      <Box className="dialog-container">
        <Box className="form-container">
          <DialogTitle className="title"></DialogTitle>
          <DialogContent className="login-dialog-content">
            <Typography variant="h5" className="login-title">
              {isLogin ? "Welcome Back!" : "Create an Account"}
            </Typography>
            <Typography variant="body2" className="login-subtitle">
              {isLogin ? "Please log in to your account" : "Please sign up to create an account"}
            </Typography>
            <Box component="form" noValidate className="login-form">
              {!isLogin && (
                <TextField
                  autoFocus
                  margin="normal"
                  id="mobile-number"
                  label="Mobile Number"
                  type="tel"
                  fullWidth
                  variant="outlined"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="login-input"
                />
              )}
              <TextField
                margin="normal"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
              <TextField
                margin="normal"
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {isLogin && (
                <a href="#" className="forgot-password-link">
                  <Button
                    className="forgot"
                    style={{
                      backgroundColor: "#white",
                      color: "red",
                      fontSize: "0.8rem",
                      "&:hover": {
                        backgroundColor: "#ff1f49",
                      },
                      "&:active": {
                        backgroundColor: "#d8315b",
                      },
                    }}
                  >
                    Forgot password?
                  </Button>
                </a>
              )}
              <button onClick={isLogin ? handleLogin : handleSignup} className="btn login-button">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </Box>
          </DialogContent>
          <div className="login-dialog-actions">
            <div className="signupc">
              <h5 className="h6">
                {isLogin ? "If you are a new user, then please " : "If you already have an account, then please "}
                <span onClick={isLogin ? switchToSignup : switchToLogin} className="signup">
                  {isLogin ? "Sign Up" : "Login"}
                </span>
              </h5>
            </div>
          </div>
        </Box>
        <Box className="image-container">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="close-button"
          >
            <CloseIcon />
          </IconButton>
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*UaPpNO3v2vnQcrFvzsqe4Q.png"
            alt="Auth Illustration"
            className="login-image"
          />
        </Box>
      </Box>
    </Dialog>
  );
}
