import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
function DefaultLayout() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="min-h-[800px] flex flex-row lg:justify-start  ">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default DefaultLayout;
