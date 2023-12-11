import {getUserByEmail} from '@/lib/api/db';
import {redirect} from 'next/navigation';
import {auth} from '@/modules/auth/client';
import styles from '@/styles/dashboard.module.scss';
import {User} from "@prisma/client";
import {DeleteButton} from "./components/delete-button";

const getAllUsers = async () => {
    return await fetch(`${process.env.APP_HOST}/api/dashboard`, {
        next: {
            tags: ['all_users']
        }
    }).then(res => res.json())
}

const DashboardPage = async () => {
  const session = await auth();

  const user = await getUserByEmail(session?.user?.email || '');

  if (user && user.role !== 'ADMIN') {
    redirect('/');
  }

  const allUsers: User[] = await getAllUsers();

  return (
    <div className={styles.dashboard}>
      <h3>Manage Your Users</h3>
      <div className={styles.users}>
          {allUsers.map((item) => (
              <div className={styles.user} key={item.id}>
                  <span>{item.email}</span>
                  {item.id !== user?.id && <DeleteButton userId={item.id}/>}
              </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardPage;
