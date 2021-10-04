import React, { useState, useEffect } from "react";

interface DashboardProps {
  setAuth: (boolean: boolean) => void;
}
export default function Dashboard({ setAuth }: DashboardProps): JSX.Element {
  const [name, setName] = useState<string>("");

  const getName = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      setName(parseRes.username);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getName();
  });

  return (
    <>
      <h1 className="title">Welcome {name}</h1>
    </>
  );
}
