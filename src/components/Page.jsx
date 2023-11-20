import React, { useContext } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Page = () => {
  console.log("테스트로 공유 데이터을 확인하자.");
  console.log(`공유 데이터 - UserContext : ${useContext(UserContext)}, ThemeContext : ${useContext(ThemeContext)}`);

  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
