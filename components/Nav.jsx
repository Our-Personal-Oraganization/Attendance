import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div>
        <a>Attendance Website</a>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Attendance Sheets</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Navbar