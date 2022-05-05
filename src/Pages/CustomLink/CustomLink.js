import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          paddingBottom: "0px",
          margin: "10px",
          textTransform: "uppercase",
          color: match ? "#0D6EFD" : "white",
          textDecoration: "none",
          borderBottom: match ? "2px solid #0D6EFD" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
