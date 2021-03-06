import React from "react";

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '10px',
  height: '20px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
                <p>© 2018 - Colin Henderson</p>
            </div>
        </div>
    )
}
// Test 

export default Footer;