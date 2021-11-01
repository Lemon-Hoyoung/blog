import React from "react";
import Styles from "./Author.module.css";
import { Avatar, Divider } from "antd";
import { WechatOutlined, QqOutlined, GithubOutlined } from "@ant-design/icons"

const Author = ()=>{

    return (
        <div className={Styles.authorDiv}>
            <div> <Avatar size={100} src="../../static/luffy.png"  /></div>
            <div className={Styles.authorIntroduction}>
                test
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className={Styles.account} />
                <Avatar size={28} icon={<QqOutlined />}  className={Styles.account} />
                <Avatar size={28} icon={<WechatOutlined />}  className={Styles.account} />
            </div>
        </div>
    )

}

export default Author