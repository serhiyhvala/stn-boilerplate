import React, { FC } from 'react';
import { Sidebar as SidebarUI } from '@stn-ui/sidebar';
import { SidebarNavigation } from './sidebar-navigation';
import { getUserByEmail } from '@/lib/api/db';
import { auth } from '@/modules/auth/client';
import { SidebarUserMenu } from '@/modules/sidebar/components/seidebar-user-menu';

export const Sidebar: FC = async () => {
  const session = await auth();

  const isUserAuth = session ? <SidebarUserMenu session={session} /> : null;

  const isUserAdmin = await getUserByEmail(session?.user?.email || '');

  return (
    <SidebarUI footer={isUserAuth}>
      <SidebarNavigation session={session} isUserAdmin={isUserAdmin?.role === 'ADMIN'} />
    </SidebarUI>
  );
};
