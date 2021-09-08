import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import TabLinkFillContainer from './styles/TabLinkFillContainer';

export type TabLinkFillProps = {
  elementLeft?: React.ReactElement;
  count?: string;
  size?: 'small' | 'medium';
  isTop?: boolean;
  href?: string;
};

const ElementLeftWrapper = styled.div({
  marginInlineEnd: rem(8),
});

const CountWrapper = styled.span({
  marginInlineStart: rem(8),
});

const TabLinkFill: React.FC<TabLinkFillProps> = ({
  children,
  href,
  elementLeft,
  size,
  count,
}) => (
  <TabLinkFillContainer size={size} href={href}>
    {elementLeft && <ElementLeftWrapper>{elementLeft}</ElementLeftWrapper>}
    {children}
    {count && <CountWrapper>{count}</CountWrapper>}
  </TabLinkFillContainer>
);

export default TabLinkFill;
