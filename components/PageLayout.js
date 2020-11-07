import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import 'antd/dist/antd.less';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default function PageLayout({ title, description, children }) {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                {description && <meta title='description' content={description}/>}
            </Head>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="/">
                            <Link href={'/'}>
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/music">
                            <Link href={'/music'}>
                                Music
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Post</Breadcrumb.Item>
                        <Breadcrumb.Item>{title}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        <article className="markdown-body">
                            {children}
                        </article>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Musick Khmer © 2020 Created by Ravuthz</Footer>
            </Layout>
        </div>
    );
};