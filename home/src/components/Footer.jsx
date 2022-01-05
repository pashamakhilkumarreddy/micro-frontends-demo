import React from "react";

function Footer({ content }) {
  return (
    <footer className="absolute bottom-0 w-screen p-5 bg-blue-500 text-white text-center text-3xl font-bold">
      &copy; {content}
    </footer>
  );
}

export default Footer;
