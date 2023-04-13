import { useRouter } from 'next/router';

import Button from '@/components/Button';

import styles from './Unlock.module.scss';

const Unlock = ({ className }) => {
  const router = useRouter();

  let unlockClassName = styles.unlock;

  if (className) {
    unlockClassName = `${unlockClassName} ${className}`;
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    router.push('/confirm');
  }

  return (
    <div className={unlockClassName}>
      <p className={styles.title}>Unlock The Hundred</p>
      <p className={styles.description}>Sign up or log in to get full access with <strong>no limits</strong>.</p>
      <form className={styles.form} onSubmit={handleOnSubmit}>
        <input className={styles.input} type="email" name="email" />
        <Button className={styles.button}>Sign Up</Button>
      </form>
    </div>
  );
};

export default Unlock;
