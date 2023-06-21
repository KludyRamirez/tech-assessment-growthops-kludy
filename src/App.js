import React, { useState, useEffect } from "react";
import FilterByAge from "./components/FilterByAge";
import ListOfUsers from "./components/ListOfUsers";
import DateConverter from "./components/DateConverter";
import Header from "./components/Header";
import DistrictManager from "./components/DistrictManager";
import axios from "axios";

function App() {
  // declaring a variable where they will contain the users and the filters
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");

  // to make function the run as the website mounts
  useEffect(() => {
    fetchData();
    countMe();
  }, []);

  // fetching the data from api url || api calls
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.mocky.io/v2/5d73bf3d3300003733081869"
      );
      const data = await response.data;
      setUsers(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // trigger filter
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  //filtering function
  const filteredUsers = () => {
    if (filter === "all") {
      return users;
    } else if (filter === "20") {
      return users.filter((user) => user.age <= 20);
    } else if (filter === "21-39") {
      return users.filter((user) => user.age >= 21 && user.age <= 39);
    } else if (filter === "40") {
      return users.filter((user) => user.age >= 40);
    }
  };

  //countMe function multiples of 3 and 5
  // check the console as the website mounts
  const countMe = () => {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FooBar");
      } else if (i % 3 === 0) {
        console.log("Foo");
      } else if (i % 5 === 0) {
        console.log("Bar");
      } else {
        console.log(i);
      }
    }
  };

  return (
    <>
      {/* clustering of codes */}
      <Header />
      <DistrictManager />
      <FilterByAge onChange={handleFilterChange} />
      <ListOfUsers users={filteredUsers()} />
      <DateConverter />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
