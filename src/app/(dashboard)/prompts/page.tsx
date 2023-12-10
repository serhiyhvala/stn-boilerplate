import styles from '@/styles/prompts.module.scss';
import {auth} from "@/modules/auth/client";
import {getUserByEmail, getUserPrompts} from "@/lib/api/db";
import {CopyButton} from "@/app/(dashboard)/prompts/components/copy-button";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function PromptsPage() {
  const session = await auth()

  const user = await getUserByEmail(session?.user?.email || '')

  const userPrompts = await getUserPrompts(user?.id || '')

  return <div className={styles.prompts}>
    <h3>Your Prompts</h3>
    <div className={styles.container}>
      {userPrompts.map(item => (
          <div className={styles.prompt} key={item.id}>
            <div>{item.content}</div>
            <CopyButton prompt={item.content}/>
          </div>
      ))}
    </div>
  </div>;
}
