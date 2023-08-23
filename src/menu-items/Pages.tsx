import InboxIcon from '@mui/icons-material/Inbox';
import IconListDetails from '@mui/icons-material/DashboardOutlined';

const Pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'pages caption',
  children: [
    {
      id: 'pages1',
      title: 'Pages1',
      url: '/pages/pages1',
      icon: InboxIcon
    },
    {
      id: 'pages2',
      title: 'Pages2',
      url: '/pages/pages2',
      icon: IconListDetails
    }
  ]
};

export default Pages;
