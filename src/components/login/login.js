import React, { useState } from "react";
import "./login.css";
import { login } from "../../redux/reducers/user/user.actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CONSTANTS from '../../common/constants';

const USERNAME = "ADMIN";
const PASSWORD = "12345";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const cart = useSelector((state) => state.user.cart);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.elements.username.value === USERNAME &&
      e.target.elements.password.value === PASSWORD
    ) {
      setHasError(false);
      dispatch(login());
      if (cart.length) {
        navigate("/checkout");
      } else {
        navigate("/");
      }
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleOnSubmit}>
        <h4>{CONSTANTS.WELCOME_BACK}</h4>
        <div className="form-group row">
          <input
            name="username"
            className="input"
            type="text"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group row">
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group row">
          <button className="btn" type="submit">
          {CONSTANTS.LOGIN}
          </button>
        </div>
        {hasError && (
          <span className="error">{CONSTANTS.ICONRRECT_USER_PWD}</span>
        )}
      </form>
    </div>
  );
}
