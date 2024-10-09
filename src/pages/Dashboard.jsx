import React from 'react';
import { Layout, Menu, Breadcrumb, Table } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Product 1',
            price: '$100',
            category: 'Category 1',
        },
        {
            key: '2',
            name: 'Product 2',
            price: '$200',
            category: 'Category 2',
        },
        // Thêm dữ liệu sản phẩm khác ở đây
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Dashboard</Menu.Item>
                    <Menu.Item key="2">Products</Menu.Item>
                    <Menu.Item key="3">Users</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            Option 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<LaptopOutlined />}>
                            Option 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<NotificationOutlined />}>
                            Option 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Table columns={columns} dataSource={data} />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
