import { Button, Col, Row } from 'antd';
import React from 'react';


/* local constants */
const ButtonGroup = Button.Group;


/**
 * Contacts list footer component
 *
 * @function
 * @name ContactListFooter
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function ContactsListFooter() {
  return (
    <div className="footer p-10">
      <Row type="flex" justify="space-between">
        <Col span={8}>
          <h3>
            Total : &nbsp;
            <span className="f-15">
              300
            </span>
          </h3>
        </Col>
        <Col span={10}>
          <ButtonGroup>
            <Button icon="reload" title="Refresh Contacts" />
            <Button icon="export" title="Export Contacts" />
            <Button icon="bars" title="Sort Contacts" />
            <Button icon="left" title="Previous" />
            <Button icon="right" title="Next" />
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
}
