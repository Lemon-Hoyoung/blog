import React from "react";
import Styles from "./Content.module.css";
import { Row, Col } from "antd";

const Content = (props) => {
    return (
        <Row className={Styles.commonMain} type="flex" justify="center">
            <Col className={Styles.commonLeft} xs={24} sm={24} md={16} lg={18} xl={14}>
                {props.LeftContent}
            </Col>
            <Col className={Styles.commonRight} xs={0} sm={0} md={7} lg={5} xl={4}>
                {props.RightContent}
            </Col>
        </Row>
    )
}

export default Content;