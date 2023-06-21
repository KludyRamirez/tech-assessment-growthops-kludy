import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import userPhoto from "../images/userphoto.png";

const ListOfUsers = ({ users }) => {
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;
  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  //implementation of pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <br />
      <hr />
      <br />
      {/* mapping the users and their attributes */}
      <div className="d-flex justify-content-center gap-5 flex-wrap">
        {currentUsers.map((user) => (
          <div key={user.id}>
            <div
              className="container d-flex align-items-center shadow"
              style={{ width: "400px", height: "275px" }}
            >
              <div className="d-flex justify-content-center gap-3 p-4">
                <img
                  src={userPhoto}
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />

                <div>
                  <div className="fs-5 fw-bold d-flex justify-content-start pb-2">
                    {user.name.toUpperCase()}
                  </div>

                  <div className="fs-6 fw-normal d-flex justify-content-start ">
                    Email:
                    <span className="fw-semibold ps-1">{user.email}</span>
                  </div>
                  <div className="fs-6 fw-normal d-flex justify-content-start ">
                    Mobile:
                    <span className="fw-semibold ps-1">{user.phone}</span>
                  </div>
                  <div className="fs-6 fw-normal d-flex justify-content-start ">
                    Company:
                    <span className="fw-semibold ps-1">{user.company}</span>
                  </div>
                  <div className="fs-6 fw-normal d-flex justify-content-start ">
                    Address:
                    <span className="fw-semibold ps-1">
                      {user.address.city}
                    </span>
                  </div>
                  <div className="fs-6 fw-normal d-flex justify-content-start ">
                    Website:
                    <span className="fw-semibold ps-1">{user.website}</span>
                  </div>
                  <div className="fs-6 fw-normal d-flex justify-content-start ">
                    Age: <span className="fw-semibold ps-1">{user.age}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      {/* pagination that can be seen on UI */}
      <Pagination className="d-flex justify-content-end">
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <hr />
    </div>
  );
};

export default ListOfUsers;
