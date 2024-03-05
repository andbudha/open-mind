import styles from './Loader.module.css';

const loader = {
  main: `absolute h-full w-full bg-transparent flex justify-center items-center opacity-100`,
};
export const Loader = () => {
  return (
    <div className={loader.main}>
      <span className={styles.loader}></span>
    </div>
  );
};
