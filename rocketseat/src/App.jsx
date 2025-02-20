import { Post } from "./Post";
import "./global.css";
import styles from "./App.module.css";

import { Header } from './components/Header'

export function App() {
  return (
    <div>
      <Header />
      <div className="wrapper"></div>
    </div>
  );
}
