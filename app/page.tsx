import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

export default function Home() {
  return (
    <>
      <div className="my-5">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
