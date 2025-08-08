import Header from "@/Components/Header";
import Main from "@/Components/Main";
import Footer from "@/Components/Footer";
import "./globals.css";
import { CssBaseline } from "@mui/material";
export default function Home() {
  return (
    <div className="wrapper flex flex-col">
      <Header/>
      <Main/>
      <Footer/>
      <CssBaseline/>
    </div>
  );
}
