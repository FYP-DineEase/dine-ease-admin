// Icons
import SummarizeIcon from '@mui/icons-material/Summarize';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export const NAV_HEIGHT = 85;
export const DASHBOARD_DRAWER_FULLWIDTH = 350;
export const DASHBOARD_DRAWER_RESPONSIVEWIDTH = 70;

export const Status = {
  PENDING: { value: 'pending', text: 'Pending' },
  APPROVED: { value: 'approved', text: 'Approved' },
  REJECTED: { value: 'rejected', text: 'Rejected' },
};

export const dashboardLinks = [
  {
    id: 'overview',
    text: 'Overview',
    icon: <SummarizeIcon />,
  },
  {
    id: 'restaurant-listing',
    text: 'Restaurant Listings',
    icon: <EditNoteIcon />,
  },
  {
    id: 'modify-request',
    text: 'Modify Requests',
    icon: <MenuBookIcon />,
  },
  {
    id: 'logs',
    text: 'Logs',
    icon: <WorkHistoryIcon />,
  },
  {
    id: 'payment',
    text: 'Payments',
    icon: <MonetizationOnIcon />,
  },
];
