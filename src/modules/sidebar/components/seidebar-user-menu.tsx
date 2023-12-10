'use client';

import React, { FC } from 'react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useSidebarContext } from '@stn-ui/provider';
import { UserMenu } from '@stn-ui/user-menu';

interface ISidebarUserMenuProps {
  session: Session | null;
}

export const SidebarUserMenu: FC<ISidebarUserMenuProps> = ({ session }) => {
  const { isExpanded } = useSidebarContext();

  return <UserMenu isExpanded={isExpanded} email={session?.user?.email ?? ''} onLogOut={signOut} />;
};
