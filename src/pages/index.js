import RootLayout from '../components/layout';
import HeroArea from '../components/HeroArea'
const Home = () => {
  return (
    <main>
      <HeroArea />
    </main>
  );
};

Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;