import './App.css';
import { Blogs } from './components/Blogs/Blogs';
import { SideBar } from './components/SideBar/SideBar';
const styles = {
  main: `flex justify-center `,
  container: `container flex bg-[#fafafa] min-h-screen`,
};
function App() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <SideBar />
        <Blogs />
      </div>
    </div>
  );
}

export default App;
