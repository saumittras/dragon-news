import Navbar from "../components/Navbar";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavbar from "../components/layout-components/RightNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>

      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto pt-5 gap-6 grid md:grid-cols-12">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>

        <main className="main col-span-6">
          <Outlet></Outlet>
        </main>

        <aside className="right col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
