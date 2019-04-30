/** @jsx jsx */
import * as React from 'react';
import { Link } from '@heathmont/sportsbet-components/lib/link/';
import { Button } from '@heathmont/sportsbet-components/lib/button';
import { Navigation } from '../components/nav';
import { colors, border, breakpoints } from '@heathmont/sportsbet-tokens';
import { HamburgerMenu } from '../components/hamburger-menu';
import { IconCaptionLogo } from '../components/logo/icon-caption-logo';
import { Search } from '../components/search/search';
import { CashierLayout } from '@heathmont/sportsbet-user-portal-components';
import { CashierNav } from '../../cashier/views/deposit/dumb-components/navigations';
import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils/lib/spacing';
import { jsx } from '@emotion/core';
import { HeaderTabs } from '../components/header-tabs/header-tabs';
import { IconLogo } from '../components/logo/icon-logo';
import { mq } from '@heathmont/sportsbet-utils';
import { MyBetsCounter, Digit } from '../components/my-bets/my-bets-counter';
jsx;

export const Nav = () => (
  <Navigation>
    <div css={{ gridArea: 'hamburger', display: 'flex', alignItems: 'center' }}>
      <HamburgerMenu />
      <IconCaptionLogo css={{ marginRight: spacing() }} />
      <HeaderTabs />
    </div>

    <div css={{ gridArea: 'search', display: 'flex', alignItems: 'center' }}>
      <div css={{ width: '100%' }}>
        <Search
          placeholder="Search for a match, event, player etc ..."
          onSubmit={e => {
            e.preventDefault();
            console.log('submit');
          }}
        />
      </div>
    </div>

    <div
      css={{
        gridArea: 'buttons',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <MyBetsCounter>
        <Digit>0</Digit>
        <Digit>1</Digit>
        <p
          css={{ color: '#8697A2', marginTop: 0, marginLeft: spacing('small') }}
        >
          My bets
        </p>
      </MyBetsCounter>
    </div>
    <div css={{ gridArea: 'nav' }}>
      <CashierNav />
    </div>
  </Navigation>
);
