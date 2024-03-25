import RootLayout from '../components/layout';

const Home = () => {
  return (
    <main>
        İçerik
    </main>
  );
};

Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;