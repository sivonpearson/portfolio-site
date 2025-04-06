import { Link } from "gatsby";
import React, { useState } from "react";

const SecondaryHeader: React.FC = () => {
  return (
    <nav className="py-6 w-full flex flex-no-wrap items-center justify-between sticky top-0">
      <div className="flex w-full flex-wrap items-center justify-between px-12 text-lg">
        <Link to="/" className="header-primary">
          Sivon | Software Developer
        </Link>
        <div className="relative flex gap-2 items-center">
          <Link to="/#contact" className="header-secondary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryHeader;
