import { Button, Checkbox, Col, Input, Popover, Row } from 'antd';
import classnames from 'classnames';
import React from 'react';
import ContactDetails from './components/Details';
/* Components */
import Filters from './components/Filters';
import Header from './components/Header';
import ContactList from './components/List';
/* load styles */
import styles from './index.css';

/* local constants */
const { Search } = Input;
const cx = classnames.bind(styles);
const actions = (
  <div>
    <div>
      <Button icon="share-alt" className="b-0">
        Share
      </Button>
    </div>
    <div>
      <Button icon="hdd" className="b-0">
        Archive
      </Button>
    </div>
  </div>
);

/**
 * Render contacts panel component which have all the the components in relation
 * to contacts
 *
 * @function
 * @name Contacts
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function Contacts() {
  return (
    <Row>
      {/* start filter section */}
      <Col span={4} className={cx('section')}>
        {/* start header */}
        <Header>
          <h3>
            Contacts
          </h3>
        </Header>
        {/* end header */}
        {/* start new contacts button */}
        <Button icon="plus" type="primary" className={cx('button-center')}>
          New Contact
        </Button>
        {/* end new contacts button */}
        {/* start filters */}
        <Filters />
        {/* end filters */}
      </Col>
      {/* end filter section */}
      {/* start list section */}
      <Col span={6} className={cx('section')}>
        {/* start header */}
        <Header>
          <Row type="flex" justify="space-around">
            <Col span={1}>
              <Checkbox />
            </Col>
            <Col span={19}>
              {/* start search component */}
              <Search
                placeholder="Search here"
                onSearch={value => console.log(value)}
                style={{ width: '100%' }}
                enterButton={<Button icon="search" />}
              />
              {/* end search component */}
            </Col>
            <Col span={2}>
              <Popover placement="bottom" trigger="click" content={actions}>
                <Button icon="ellipsis" className="f-20 b-0" />
              </Popover>
            </Col>
          </Row>
        </Header>
        {/* end header */}
        {/* start contact list */}
        <ContactList />
        {/* end contact list */}
      </Col>
      {/* end list section */}
      {/* start details section */}
      <Col span={14} className={cx('section')}>
        {/* start header */}
        <Header>
          <h3>
            Basic Information
          </h3>
        </Header>
        {/* end header */}
        {/* start contact details */}
        <ContactDetails />
        {/* end contact details */}
      </Col>
      {/* end details section */}
    </Row>
  );
}
