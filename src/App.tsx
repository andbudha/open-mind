import './App.css';
import { Header } from './components/Header/Header';
const styles = {
  main: `flex justify-center h-dvh`,
  container: `center container xl bg-[#f0f9ff] h-full`,
};
function App() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  );
}

export default App;
