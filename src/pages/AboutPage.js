import RootLayout from '../components/layout';

export const AboutPage = () => {
  return (
    <div>
    About
    </div>
  );
};

AboutPage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};

export default AboutPage;