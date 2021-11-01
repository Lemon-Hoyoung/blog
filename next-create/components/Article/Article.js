import React from "react";
import Styles from "./Article.module.css";
import { List } from 'antd';
import { CalendarOutlined, FireOutlined, FolderOutlined } from "@ant-design/icons"


const ArticleList = () => {
    const myList = [{title: 'title', context: "context"}, {title: "test2", context: "article2"}]
    return (
        <div>
            <List
                header={<div>最新日志</div>}
                itemLayout="vertical"
                dataSource={myList}
                renderItem={item => (
                    <List.Item>
                        <div className={Styles.listTitle}>{item.title}</div>
                        <div className={Styles.listIcon}>
                        <span><CalendarOutlined /> 2019-06-28</span>
                        <span><FolderOutlined /> 文章</span>
                        <span><FireOutlined /> 5498人</span>
                        </div>
                        <div className={Styles.listContext}>{item.context}</div>  
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ArticleList;