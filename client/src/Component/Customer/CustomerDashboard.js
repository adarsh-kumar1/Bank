import React from "react";
import { useState } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    LogoutOutlined,
    HistoryOutlined,
    UserOutlined,
    BankOutlined,
    TransactionOutlined,
    WalletOutlined,
    MobileOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const CustomerDashboard = () => {

    const [collapsed, Setcollapsed] = useState(true);

    const onCollapse = () => {
        Setcollapsed(!collapsed);
    };

    return (
        <>
            <Layout style={{ minHeight: '80vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    {/* <div className="logo" /> */}
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Your Profile">
                            {/* <Menu.Item key="1">Add Profile</Menu.Item> */}
                            <Menu.Item key="3">View Profile</Menu.Item>
                            <Menu.Item key="2">Update Profile</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<BankOutlined />} title="Your Bank Account">
                            <Menu.Item key="4">Add Bank Account</Menu.Item>
                            <Menu.Item key="5">Update Account</Menu.Item>
                            <Menu.Item key="6">View Account</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<TransactionOutlined />} title="Make transaction">
                            <Menu.Item key="7">Send Money</Menu.Item>
                            <Menu.Item key="8">Check Balance</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<MobileOutlined />}>
                            Recharge
                        </Menu.Item>
                        <Menu.Item key="10" icon={<WalletOutlined />}>
                            Wallet
                        </Menu.Item>
                        <Menu.Item key="11" icon={<DesktopOutlined />}>
                            Offers
                        </Menu.Item>
                        <Menu.Item key="12" icon={<DesktopOutlined />}>
                            Coupans
                        </Menu.Item>
                        <Menu.Item key="13" icon={<DesktopOutlined />}>
                            Rewards
                        </Menu.Item>
                        <Menu.Item key="14" icon={<HistoryOutlined />}>
                            History
                        </Menu.Item>
                        <Menu.Item key="15" icon={<LogoutOutlined />}>
                            Logout
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        </>
    )
}

export default CustomerDashboard;

