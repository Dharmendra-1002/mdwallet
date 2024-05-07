import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DarwerNavigation from './DarwerNavigation';
import EsimReport from '../screen/EsimReport';
import WalletSettings from '../screen/WalletSettings';
import AssignCreditLimit from '../screen/AssignCreditLimit';
import Statement from '../Distributor/Statement';
import AssignCreditLimit2 from '../screen/AssignCreditLimits';
import AddAmount from '../screen/AddAmount';
import Pay from '../payment/Pay';
import BottomSh from '../screen/Bottom';
import RechargeList from '../Distributor/RechargeList';
import SpendsList from '../Distributor/SpendsList';
import History from '../Distributor/History';
import Expense_From from '../screen/Expense_From'
import EmployeeLogin from '../screen/EmployeeLogin';
import SelfValidityRecharge from '../screen/SelfValidityRecharge';
import ViewCertificate from '../screen/ViewCertificate';
import TechnicianLogin from '../screen/TechnicianLogin';
import Marketing_Executives from '../screen/Marketing_Executives';
import Login from '../screen/Login';
import OEMLogin from '../screen/OEMLogin';
import OEMWallet from '../screen/OEMWallet';
import DistributorWallet from '../screen/DistributorWallet';
import ManagersLogin from '../screen/ManagersLogin';
import Manging_Director from '../screen/ManagerLogin/Manging_Director';
import MDWallet from '../screen/MDWallet';
import Authentication_Manger from '../screen/ManagerLogin/Authentication_Manager';
import AssignCreditLimits from '../screen/AssignCreditLimits';
import Setcredit from '../screen/ManagerLogin/Setcredit';
import FinanceDashboard from '../screen/FinanceDashboard';
import AddAmount2 from '../screen/AddAmount2';
import MarketingHead from '../screen/ManagerLogin/MarketingHead';
import MarketingExLogin from '../screen/ManagerLogin/MarketingExLogin';
import Marketing_Executive_Expense from '../screen/Marketing_Executive_Expense';
import FinanceManagerLogin from '../screen/FinanceManagerLogin';
import MarketingHeadExpense from '../screen/MarketingHeadExpense';
import SalesOrder from '../screen/SalesOrder';
import MarketingButton from '../screen/MarketingButton';
import Marketing_Executive_Button from '../screen/ManagerLogin/Marketing_Executive_Button';
import OrderFormmain from '../screen/OrderFormmain';
import OrderForm from '../screen/OrderForm';
import Technician from '../screen/Technician';
import Meetingform from '../screen/Meetingform';
import WalletLogin from '../screen/WalletLogin';
import InstallationForm from '../screen/InstallationForm';

import MyWallet from '../Distributor/MyWallet';




const Stack = createStackNavigator();
const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={DarwerNavigation} />
            <Stack.Screen name="EsimReport" component={EsimReport} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Wallet" component={WalletSettings} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="AssignCreditLimit" component={AssignCreditLimit} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="RechargeList" component={RechargeList} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="SpendsList" component={SpendsList} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Statement" component={Statement} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="AssignCreditLimit2" component={AssignCreditLimit2} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="AddAmount2" component={AddAmount2} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="AddAmount" component={AddAmount} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="Pay" component={Pay} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="BottomSh" component={BottomSh} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="History" component={History} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Expense_From" component={Expense_From} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="OEM Login" component={OEMLogin} options={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="EmployeeLogin" component={EmployeeLogin} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="ViewCertificate" component={ViewCertificate} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="TechnicianLogin" component={TechnicianLogin} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="Login" component={Login} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="SelfValidityRecharge" component={SelfValidityRecharge} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


            <Stack.Screen name="OEMLogin" component={OEMLogin} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


            <Stack.Screen name="OEMWallet" component={OEMWallet} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


            <Stack.Screen name="DistributorWallet" component={DistributorWallet} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="ManagersLogin" component={ManagersLogin} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="Manging_Director" component={Manging_Director} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="MDWallet" component={MDWallet} options={{
                headerShown: true,
                headerTitle: () => (
                    <View style={{ backgroundColor: '#4e2d87' }}>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 16 }}>Anand Kumar Seethala</Text>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 14 }}>Managing Director</Text>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 12 }}>ID - 1234567</Text>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="Authentication_Manger" component={Authentication_Manger} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="Setcredit" component={Setcredit} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="AssignCreditLimits" component={AssignCreditLimits} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="FinanceDashboard" component={FinanceDashboard} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="FinanceLogin" component={FinanceDashboard} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="FinanceManagerLogin" component={FinanceManagerLogin} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="MarketingHead" component={MarketingHead} options={{
                headerShown: true,
                headerTitle: () => (
                    <View>
                        <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 16 }}>Marketing Executive</Text>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87',

                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="MarketingExLogin" component={MarketingExLogin} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="Marketing_Executive_Expense" component={Marketing_Executive_Expense} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="MarketingHeadExpense" component={MarketingHeadExpense} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="Marketing_Executives" component={Marketing_Executives} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="SalesOrder" component={SalesOrder} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="MarketingButton" component={MarketingButton} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Marketing_Executive_Button" component={Marketing_Executive_Button} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="OrderFormmain" component={OrderFormmain} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="OrderForm" component={OrderForm} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="Technician" component={Technician} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="Meetingform" component={Meetingform} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="WalletLogin" component={WalletLogin} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="MyWallet" component={WalletLogin} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />



<Stack.Screen name="InstallationForm" component={InstallationForm} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />









        </Stack.Navigator>
    );
};

export default AppNavigation;
