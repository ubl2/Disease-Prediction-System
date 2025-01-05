import { RouteInfo } from './sidebar.metadata';
export const ROUTES1: RouteInfo[] = [
  {
    path: '',
    title: 'Home',
    icon: 'fas fa-home',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/dashboard/admin-patient',
        title: 'Manage Patient',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/dashboard/admin-home',
        title: 'Manage Doctors',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/dashboard/admin-feedback',
        title: 'Manage Feedback',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/dashboard/admin-symptoms',
        title: 'Manage Symptoms',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/dashboard/admin-diseases',
        title: 'Manage Diseases',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  }
];
export const ROUTES2: RouteInfo[] = [
  {
    path: '',
    title: 'Home',
    icon: 'fas fa-home',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/dashboard/doc-home',
        title: 'Doctor',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/dashboard/doc-feedback',
        title: 'feedback',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  }
];
export const ROUTES3: RouteInfo[] = [
  {
    path: '',
    title: 'Home',
    icon: 'fas fa-home',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/dashboard/main',
        title: 'Disease Prediction',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/dashboard/pat-feedback',
        title: 'feedback',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/dashboard/insurance',
        title: 'insurance',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  }
];
