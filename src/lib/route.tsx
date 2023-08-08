import { FiFile, FiHome, FiLayers, FiLock } from 'react-icons/fi';
export const sidebarRoute = [
  {
    name: 'Dashboard',
    icon: <FiHome color={'#919EAB'} />,
    path: '#',
    child: [
      {
        name: 'Project',
        path: '/dashboard/projects',
      },
    ],
  },
  {
    name: 'Pages',
    icon: <FiLayers color={'#919EAB'} />,
    path: '#',
    child: [
      {
        name: 'Profile',
        path: '/asdad',
      },
      {
        name: 'Accounts',
        path: '#Accounts',
      },
      {
        name: 'Invoice',
        path: '#Invoice',
      },
    ],
  },
  {
    name: 'Authentication',
    icon: <FiLock color={'#919EAB'} />,
    path: '#',
    child: [
      {
        name: 'Sign in',
        path: '#sign-in',
      },
      {
        name: 'Sign up',
        path: '#sign-up',
      },
      {
        name: 'Reset Password',
        path: '#Reset-Password',
      },
    ],
  },
  {
    name: 'Blank pages',
    icon: <FiFile color={'#919EAB'} />,
    path: '/blank',
  },
];
