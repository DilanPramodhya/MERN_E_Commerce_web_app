import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import SummaryApi from "./common";
import Context from "./context";
import { setUserDetails } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });
    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }

    // console.log("data-user", dataResponse);
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, // user details fetch
        }}
      >
        <ToastContainer />
        <Header />
        <main className="min-h-[calc(100vh-100px)]">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
