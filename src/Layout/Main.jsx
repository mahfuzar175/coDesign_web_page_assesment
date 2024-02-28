import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Container from "../Pages/Shared/Container";
// import Footer from "../Pages/Shared/Footer";

const Main = () => {
    return (
        <Container>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </Container>
    );
};

export default Main;