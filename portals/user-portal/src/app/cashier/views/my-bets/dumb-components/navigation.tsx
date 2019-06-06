import * as React from 'react';
import {
  Tab,
  TabItem,
  CloseButton,
} from '@heathmont/sportsbet-user-portal-components';

export const MyBetsNav = () => (
  <Tab>
    <TabItem to={'/cashier'}>Wallet</TabItem>
    <TabItem active to={'/my-bets'}>
      My bets
    </TabItem>
    <TabItem to={'/bonuses/free-bets'}>Bonuses</TabItem>
    <TabItem to={'/notifications'}>Notifications</TabItem>
    <TabItem to={'/account'}>Account</TabItem>
    <TabItem to={'/settings'}>Settings</TabItem>
    <TabItem to={'#'} rightAligned>
      Log out
    </TabItem>
  </Tab>
);