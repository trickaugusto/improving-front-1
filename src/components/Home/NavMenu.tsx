import React from "react";

export default function NavMenu() {
  return (
    <div>
      <div className="flex items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Find a doctor</a>
            </li>
            <li>
              <a href="#">Apps</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
