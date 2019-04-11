const mainNavItems = [
  {
    text: 'About',
    path: '/about',
    exact: true
  },
  {
    text: 'Tasks',
    path: '/tasks',
    exact: true
  },
  {
    text: 'AddTask',
    path: '/addTask',
    exact: true
  },
];

const authNavItems = [
 {
   text: 'Login',
   path: '/login',
   exact: true
 },
 {
   text: 'Sign Up',
   path: '/signup',
   exact: true
 }
];

const navItems = {
  mainNavItems: mainNavItems,
  authNavItems: authNavItems
};

export default navItems;