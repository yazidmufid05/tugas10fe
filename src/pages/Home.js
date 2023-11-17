
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

// Home Component
const Home = (props) => {
    const { item, setItem } = props;
    // ...
    return (
      <div>
        <Hero />
        {/* Ubah properti menjadi items */}
        <Movies items={item} setItem={setItem} />
      </div>
    );
  }
  

export default Home;