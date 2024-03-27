import RootLayout from '../components/layout';
import HeroArea from '../components/HeroArea'
import CryptoTable from '../components/CryptoTable';
import Events from '../components/Events';
const Home = () => {
  return (
    <main>
      <HeroArea />
      <CryptoTable />
      <Events />
    </main>
  );
};

Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;