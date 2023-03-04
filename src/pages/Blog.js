import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './Blog.css'

const HeaderButton = ({ to, children }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
    >
      <Link to={to}>{children}</Link>
    </motion.li>
  )
}



const BlogPage = () => {
  return (
    <div className="blog-page">
      <header>
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <ul>
              <li>
                <HeaderButton className="btn btn-primary" to="/about">About</HeaderButton>
              </li>
              <li>
                <HeaderButton className="btn btn-primary" to="/projects">Projects</HeaderButton>
              </li>
              <li>
                <HeaderButton className="btn btn-primary" to="/">Home</HeaderButton>
              </li>
            </ul>
          </motion.nav>
        </header>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       🚧 This page is still under construction. 🚧
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Please check back later for updates!
      </motion.p>
    </div>
  );
};

export default BlogPage;
