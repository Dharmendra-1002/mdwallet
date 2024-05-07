import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import CustomeDarwer from './CustomeDarwer';
import Home from '../screen/Home';
import WalletSettings from '../screen/WalletSettings';
import CustomHeader from './CustomHeader';
import EsimReport from '../screen/EsimReport';
// import AssignCreditLimit from '../screen/AssignCreditLimit';
import AddAmount2 from '../screen/AddAmount2';
import SelfValidityAllList from '../screen/SelfValidityAllList';
import Notifications1 from '../screen/Notifications1';
import MyWallet from '../Distributor/MyWallet';
// import InstallationForm from '../screen/InstallationForm';
import TranoAllLogin from '../screen/TranoAllLogin';
import OEMWallet from '../screen/OEMWallet';
import TechnicianLogin from '../screen/TechnicianLogin';
import Notifications from '../screen/Notifications2';
import MDWallet from '../screen/MDWallet';
import EmployeeWalletScreen from '../screen/EmployeeWalletScreen';
import DistributorLogin from '../screen/DistributorLogin';
import DistributorWallet from '../screen/DistributorWallet';
import AuthenticationLogin from '../screen/AuthenticationLogin';
import AuthDashboard from '../screen/AuthDashboard';
import AssignCreditLimit2 from '../screen/AssignCreditLimits';

import Marketingfrom from '../screen/Meetingform';
import Pay from '../payment/Pay';
import Table from '../payment/Table';
import Activation from '../screen/Activation';
import BottomNavigation from './BottomNavigation';
import Marketing_Executive_Expense from '../screen/Marketing_Executive_Expense';
import SalesOrder from '../screen/SalesOrder';


import History from '../Distributor/History';
import SpendsList from '../Distributor/SpendsList';
const Drawer = createDrawerNavigator();


const DarwerNavigation = () => {
  return (
    <Drawer.Navigator


      screenOptions={({ route }) => ({
        header: route.name === 'Home' || route.name === 'MDWallet' ? props => <CustomHeader {...props} /> : undefined,
      })}

    // drawerContent={props=><CustomeDarwer {...props}/>}
    >
      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen name='Wallet Settings' component={WalletSettings} options={{
        headerStyle: {
          backgroundColor: '#4e2d87',
        }, headerTintColor: '#ffff',
      }} />

      <Drawer.Screen name="Marketing_Executive_Expense" component={Marketing_Executive_Expense} />
      {/* <Drawer.Screen name="AssignCreditLimit" component={AssignCreditLimit} /> */}
      <Drawer.Screen name="Marketingfrom" component={Marketingfrom} />
      <Drawer.Screen name="AddAmount" component={AddAmount2} />
      <Drawer.Screen name="SelfValidityAllList" component={SelfValidityAllList} />
      {/* <Drawer.Screen name="InstallationForm" component={InstallationForm} /> */}
      <Drawer.Screen name="Notifications1" component={Notifications1} />
      <Drawer.Screen name="MyWallet" component={BottomNavigation} />
      <Drawer.Screen name="TranoAllLogin" component={TranoAllLogin} />
      <Drawer.Screen name="OEMWallet" component={OEMWallet} />
      <Drawer.Screen name="TechnicianLogin " component={TechnicianLogin} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="MDWallet" component={MDWallet} />
      <Drawer.Screen name="EmployeeWalletScreen" component={EmployeeWalletScreen} />
      <Drawer.Screen name="DistributorLogin " component={DistributorLogin} />
      <Drawer.Screen name="DistributorWallet" component={DistributorWallet} />
      <Drawer.Screen name="AuthenticationLogin" component={AuthenticationLogin} />
      <Drawer.Screen name="AuthDashboard" component={AuthDashboard} />
      <Drawer.Screen name="AssignCreditLimit2" component={AssignCreditLimit2} />
    
      <Drawer.Screen name="Pay" component={Pay} />
      <Drawer.Screen name="Table" component={Table} />
      <Drawer.Screen name="Activation" component={Activation} />
      <Drawer.Screen name="SalesOrder" component={SalesOrder} />
    

    </Drawer.Navigator>
  )
}
const styles = StyleSheet.create({

})
export default DarwerNavigation