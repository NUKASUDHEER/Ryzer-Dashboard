import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/styles/Login.module.css";


const Login = ({setIsAuth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    
    alert("Login successful");
    setIsAuth(true);
    navigate("/");
  };

  const handleForgotPassword = () => {
    alert("Forgot Password functionality not implemented yet.");
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Login to your account</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <label className={styles.label}>Email<span>*</span></label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <label className={styles.label}>Password<span>*</span></label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.loginButton}>LOGIN</button>
        <p className={styles.forgotPassword}>
          Forgot your password? <span onClick={handleForgotPassword} className={styles.resetLink}>Reset here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
