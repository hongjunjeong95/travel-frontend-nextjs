import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <div className="my-5">
        <Header />
        <main className="mx-56">Main</main>
        <Footer />
      </div>
    </>
  );
}
