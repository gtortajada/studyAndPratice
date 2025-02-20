import { Post } from "./Post";
import "./global.css";
import { Header } from './components/Header'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Gustavo Tortajada"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid hic aspernatur doloremque sit quisquam obcaecati rerum iste dolor placeat id ut provident, est ea, nulla nesciunt enim voluptatum illo delectus?"
      />
      <Post
        author="Daniel Mendes"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid hic aspernatur doloremque sit quisquam obcaecati rerum iste dolor placeat id ut provident, est ea, nulla nesciunt enim voluptatum illo delectus?"
      />
    </div>
  );
}
