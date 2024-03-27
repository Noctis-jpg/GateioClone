import RootLayout from '../components/layout';
import HeroArea from '../components/HeroArea'
import CryptoTable from '../components/CryptoTable';
const Home = () => {
  return (
    <main>
      <HeroArea />
      <CryptoTable />
    </main>
  );
};

Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;