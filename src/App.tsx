import './App.css';
import { Blogs } from './components/Blogs/Blogs';
import { Header } from './components/Header/Header';
const styles = {
  main: `flex justify-center `,
  container: `center container xl bg-[#f0f9ff] min-h-screen pb-5`,
};
function App() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Header />
        <Blogs />
      </div>
    </div>
  );
}

export default App;
