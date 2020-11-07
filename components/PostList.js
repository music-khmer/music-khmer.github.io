import React from "react";
import Link from "next/link";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const PostLink = ({data, children}) => (
    <Link href={'posts/' + data.slug}>
        <a>{children || data.title}</a>
    </Link>
);

export default function PostList({ data }) {
    return (
        <List
            size="large"
            itemLayout="vertical"
            pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={data}
            renderItem={item => (
                <List.Item 
                    key={item.title}
                    actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
                    ]}
                    extra={
                        <PostLink data={item}>
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
                        </PostLink>
                    }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<PostLink data={item}/>}
                            description={item.description}
                        />
                </List.Item>
            )}
        />
    )
};
