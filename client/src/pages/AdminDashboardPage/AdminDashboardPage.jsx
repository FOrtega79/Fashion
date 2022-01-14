import NewItemForm from "../../components/NewItemForm/NewItemForm"
import './AdminDashboardPage.css'
import { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 424, mt:10}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Users" {...a11yProps(0)} />
        <Tab label="Create Product" {...a11yProps(1)} />
        <Tab label="Catalogue" {...a11yProps(2)} />
        <Tab label="Sales" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        Users
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewItemForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      
    </Box>
  );
}

// function AdminDashboardPage(){

// return(
//     <div className="adminDashboard">
//         <NewItemForm />
//     </div>
// )

// }

// export default AdminDashboardPage