import MainLayout from "./components/layouts/MainLayout";
import "./index.css";
import { useAppSelector } from "./redux/hook";

function App() {
  const { darkMode } = useAppSelector((store) => store.theme);
  return (
    <div className={`${darkMode ? "bg-[#161616]  " : "bg-white "}`}>
      <MainLayout></MainLayout>
    </div>
  );
}

export default App;
