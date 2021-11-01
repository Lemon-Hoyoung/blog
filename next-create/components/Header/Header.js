import React from "react";
import Styles from "./Header.module.css";
import { Row, Col, Menu } from "antd";
import { HomeOutlined, VideoCameraOutlined, BookOutlined, FileTextOutlined, SmileOutlined } from "@ant-design/icons";

const Header = () => {
    return (
        <div className={Styles.header}>
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <span className={Styles.headerLogo}>Lennon</span>
                    <span className={Styles.headerTxt}>Love creation, Love life!</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <HomeOutlined />
                            {' 首页'}
                        </Menu.Item>
                        <Menu.Item key="video">
                            <FileTextOutlined />
                            {' 文章'}
                        </Menu.Item>
                        <Menu.Item key="life">
                            <BookOutlined />
                            {' 笔记'}
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header;