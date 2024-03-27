import RootLayout from '../components/layout';
import HeroArea from '../components/HeroArea'
import CryptoTable from '../components/CryptoTable';
import Events from '../components/Events';
import StartedArea from '../components/StartedArea';
import Startup from '@/components/Startup';
const Home = () => {
  return (
    <main>
      <HeroArea />
      <CryptoTable />
      <Events />
      <StartedArea />
      <Startup />
    </main>
  );
};

Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;