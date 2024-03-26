import Header from './Header';
import Footer from './Footer';

const RootLayout = ({ children }) => {
  return (
    <div className="">
      <div className="">
        <Header />
        <main className="my-0 py-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;