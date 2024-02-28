import Banner from "../components/Banner";
import TopCategories from "../components/TopCategories";
import Container from "./Shared/Container";

const Home = () => {
  return <div>
    <Container>
        <Banner></Banner>
        <TopCategories></TopCategories>
    </Container>
  </div>;
};

export default Home;
