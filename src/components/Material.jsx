import React from "react";
import "./custom.css";

const Material = () => {
  return (
    <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header mdl-color-text-white msl-color-light-blue-700">
        <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
          <div
            className="mdl-layout__header-row mdl-cell mdl-cell--12-col
                                mdl-cell--12-col-tablet mdl-cell--8-col-desktop"
          >
            <a href="#">
              <h3>Firebase authentication</h3>
            </a>
          </div>
        </div>
      </header>
      <main className="mdl-layout__content mdl-color-grey-100">
        <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
          <div
            className="sign-in-card"
            className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col
              mdl-cell--12-col-tablet mdl-cell--8-col-desktop"
          >
            <div className="mdl-card__title mdl-color-light-blue-600 mdl-color-text--white">
              <h2 className="card">
                Phone number auth with invisible Recaptcha
              </h2>
            </div>
            <div>
              <p>Sign in with your phone number</p>
              <form id="sign-in-form" action="#">
                <div>
                  <input
                    type="text"
                    // pattern="\+[0-9\s\-\(\)]+"
                    id="phone-number"
                  ></input>
                  <label>Enter your phone number</label>
                  <div>
                    <button id="sign-in-btn">Sign In</button>
                    <button id="sign-out-btn">Sign out</button>
                  </div>
                </div>
              </form>

              <form id="verfication-code-form" action="#">
                <div>
                  <input type="text" id="verfication-code"></input>
                  <label>Enter the verfication code</label>
                </div>
                <input
                  type="submit"
                  id="verify-code-btn"
                  value="Verify code"
                ></input>

                <button id="cancel-verify-code-btn">Canecl</button>
              </form>
            </div>
          </div>

          <div id="user-details-card">
            <h2>User Sign in status</h2>
          </div>
          <div>
            Firebase sign in status:
            <span id="sign-in-status"> unknown</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Material;
