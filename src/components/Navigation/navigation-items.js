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

const unauthenticatedNavItems = [
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

const authenticatedNavItems = [
  {
    text: 'Account',
    path: '/account',
    exact: true
  },
  {
    text: 'Logout',
    path: '/logout',
    exact: true
  }
 ];

const navItems = {
  mainNavItems: mainNavItems,
  unauthenticatedNavItems: unauthenticatedNavItems,
  authenticatedNavItems: authenticatedNavItems
};

export default navItems;