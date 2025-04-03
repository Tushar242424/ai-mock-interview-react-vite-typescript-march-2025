import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";


const PublicLayout = () => {
  return (
    <div className="w-full">
        {/* handler to store the user data -> if user not exist store data in firebase  */}
        <Header />

        <Outlet />

        <Footer />
    </div>
  );
};

export default PublicLayout