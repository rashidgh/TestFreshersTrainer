"use client";
import React, { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import Home from "./components/Home";

const Page = () => {
  const [trainerToken, setTrainerToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = window.sessionStorage.getItem("trainer_token");
    setTrainerToken(token);
    setLoading(false);
  }, []);

  if (loading) {
    return "Loading..";
  }

  return (
    <div className="h-[100vh] w-[100vw]">
      {trainerToken ? <Home /> : <Login />}
    </div>
  );
};

export default Page;
