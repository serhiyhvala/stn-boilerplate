import { getUserByEmail } from '@/lib/api/db';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGetUserByEmail = (email: string) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getUser = async () => getUserByEmail(email);

  getUser();
};
