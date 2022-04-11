import React from "react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  let left = (
    <div className="left">
        <a className="bold"  href="https://github.com/NCMoseley/fullstack-zip-codes" target="_blank">
          See my Git Hub
        </a>
      <style jsx>{`
        .bold {
          font-weight: bold;
          color: gray;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active="true"] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Header;
