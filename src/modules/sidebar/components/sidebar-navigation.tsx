'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Session } from 'next-auth';
import { DiamondIcon, SendMessageIcon } from '@stn-ui/icons';
import { Navigation } from '@stn-ui/navigation';
import { useSidebarContext } from '@stn-ui/provider';
import { SIDEBAR_NAVIGATION } from '@/modules/sidebar/constants';

interface ISidebarNavigationProps {
  isUserAdmin: boolean;
  session: Session | null;
}

export const SidebarNavigation: FC<ISidebarNavigationProps> = ({ isUserAdmin, session }) => {
  const pathname = usePathname();
  const { isExpanded } = useSidebarContext();

  // eslint-disable-next-line no-nested-ternary
  const sidebarNavigation = isUserAdmin
    ? [
        ...SIDEBAR_NAVIGATION,
        { title: 'Dashboard', url: '/dashboard', color: '#3e90f0', icon: DiamondIcon },
        { title: 'My Prompts', url: '/prompts', color: '#3e90f0', icon: SendMessageIcon },
      ]
    : session
    ? [
        ...SIDEBAR_NAVIGATION,
        { title: 'My Prompts', url: '/prompts', color: '#3e90f0', icon: SendMessageIcon },
      ]
    : SIDEBAR_NAVIGATION;

  return (
    <Navigation
      items={sidebarNavigation}
      isExpanded={isExpanded}
      pathname={pathname ?? ''}
      linkAs={Link}
    />
  );
};
