import './App.css';
const styles = {
  main: `flex justify-center h-dvh`,
  container: `center container xl bg-[#f0f9ff] h-full`,
};
function App() {
  return (
    <div className={styles.main}>
      <div className={styles.container}></div>
    </div>
  );
}

export default App;
