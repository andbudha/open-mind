import logo from '../../assets/logo/logo.png';
const styles = {
  container: `center container xl bg-[#211951] h-28 flex justify-between items-center mb-5`,
  logo: `pl-6`,
  btn_box: `pr-6 h-12 flex items-center`,
  btn: `bg-[#FF004D] py-2 px-4 rounded `,
};
export const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src={logo} alt="logo image" />
      </div>
      <div className={styles.btn_box}>
        <button className={styles.btn}>Add Blog</button>
      </div>
    </div>
  );
};
