/* eslint-disable no-unused-vars */
import React from "react";
import { pagination, Table } from "antd";
import { onShowSizeChange, itemRender } from "../Pagination";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  blogimg10,
  imagesend,
  pdficon,
  pdficon3,
  pdficon4,
  plusicon,
  refreshicon,
  searchnormal,
  blogimg12,
  blogimg2,
  blogimg4,
  blogimg6,
  blogimg8,
} from "../imagepath";
import { useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const datasource = [
  {
    id: 1,
    Img: blogimg2,
    Name: "Meeting 1",
    StartTime: "10:00:00",
    EndTime: "12:00:00",
    Participent: 10,
    Capacity: "25",
    Location: "Islamabad",
    StartDate: "01.10.2022",
    FIELD9: "",
  },
  {
    id: 2,
    Img: blogimg2,
    Name: "Meeting 1",
    StartTime: "10:00:00",
    EndTime: "12:00:00",
    Participent: 10,
    Capacity: "25",
    Location: "Islamabad",
    StartDate: "01.10.2022",
    FIELD9: "",
  },
  {
    id: 3,
    Img: blogimg2,
    Name: "Meeting 1",
    StartTime: "10:00:00",
    EndTime: "12:00:00",
    Participent: 10,
    Capacity: "25",
    Location: "Islamabad",
    StartDate: "01.10.2022",
    FIELD9: "",
  },
  {
    id: 4,
    Img: blogimg2,
    Name: "Meeting 1",
    StartTime: "10:00:00",
    EndTime: "12:00:00",
    Participent: 10,
    Capacity: "25",
    Location: "Islamabad",
    StartDate: "01.10.2022",
    FIELD9: "",
  },
  {
    id: 5,
    Img: blogimg2,
    Name: "Meeting 1",
    StartTime: "10:00:00",
    EndTime: "12:00:00",
    Participent: 10,
    Capacity: "25",
    Location: "Islamabad",
    StartDate: "01.10.2022",
    FIELD9: "",
  },
  {
    id: 6,
    Img: blogimg2,
    Name: "Meeting 1",
    StartTime: "10:00:00",
    EndTime: "12:00:00",
    Participent: 10,
    Capacity: "25",
    Location: "Islamabad",
    StartDate: "01.10.2022",
    FIELD9: "",
  },
  {
    id: 7,
    Img: blogimg2,
    Name: "Meeting 1",
    StartTime: "10:00:00",
    EndTime: "12:00:00",
    Participent: 10,
    Capacity: "25",
    Location: "Islamabad",
    StartDate: "01.10.2022",
    FIELD9: "",
  },
  {
    id: 8,
    Img: blogimg2,
    Name: "Meeting 1",
    StartTime: "10:00:00",
    EndTime: "12:00:00",
    Participent: 10,
    Capacity: "25",
    Location: "Islamabad",
    StartDate: "01.10.2022",
    FIELD9: "",
  },
  {
    id: 9,
    Img: blogimg2,
    Name: "Meeting 1",
    StartTime: "10:00:00",
    EndTime: "12:00:00",
    Participent: 10,
    Capacity: "25",
    Location: "Islamabad",
    StartDate: "01.10.2022",
    FIELD9: "",
  },
  {
    id: 10,
    Img: blogimg2,
    Name: "Meeting 1",
    StartTime: "10:00:00",
    EndTime: "12:00:00",
    Participent: 10,
    Capacity: "25",
    Location: "Islamabad",
    StartDate: "01.10.2022",
    FIELD9: "",
  },
  {
    id: 11,
    Img: blogimg2,
    Name: "Meeting 1",
    StartTime: "10:00:00",
    EndTime: "12:00:00",
    Participent: 10,
    Capacity: "25",
    Location: "Islamabad",
    StartDate: "01.10.2022",
    FIELD9: "",
  },
];

const MeetingList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      render: (text, record) => (
        <>
          <h2 className="profile-image">
            <Link to="#" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.Img}
                alt="User Image"
              />
            </Link>
            <Link to="#">{record.Name}</Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "StartTime",
      dataIndex: "StartTime",
      sorter: (a, b) => a.StartTime.length - b.StartTime.length,
    },
    {
      title: "EndTime",
      dataIndex: "EndTime",
      sorter: (a, b) => a.StartTime.length - b.StartTime.length,
    },
    {
      title: "Participent",
      dataIndex: "Participent",
      sorter: (a, b) => a.Participent.length - b.Participent.length,
    },
    {
      title: "Capacity",
      dataIndex: "Capacity",
      sorter: (a, b) => a.Capacity.length - b.Capacity.length,
      // render: (text, record) => (
      //     <>

      //             <Link to="#">{record.Capacity}</Link>

      //     </>
      // )
    },
    {
      title: "Location",
      dataIndex: "Location",
      sorter: (a, b) => a.Location.length - b.Location.length,
    },
    {
      title: "StartDate",
      dataIndex: "StartDate",
      sorter: (a, b) => a.StartDate.length - b.StartDate.length,
    },
    {
      title: "",
      dataIndex: "FIELD8",
      render: (text, record) => (
        <>
          <div className="text-end">
            <div className="dropdown dropdown-action">
              <Link
                to="#"
                className="action-icon dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end">
                <Link className="dropdown-item" to="/editmeeting">
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_patient"
                >
                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                </Link>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <Header />
      <Sidebar
        id="menu-item1"
        id1="menu-items1"
        activeClassName="meeting-list"
      />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Meetings </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Meetings List</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table show-entire">
                  <div className="card-body">
                    {/* Table Header */}
                    <div className="page-table-header mb-2">
                      <div className="row align-items-center">
                        <div className="col">
                          <div className="doctor-table-blk">
                            <h3>Meeting List</h3>
                            <div className="doctor-search-blk">
                              <div className="top-nav-search table-search-blk">
                                <form>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search here"
                                  />
                                  <Link className="btn">
                                    <img src={searchnormal} alt="#" />
                                  </Link>
                                </form>
                              </div>
                              <div className="add-group">
                                <Link
                                  to="/add-doctor"
                                  className="btn btn-primary add-pluss ms-2"
                                >
                                  <img src={plusicon} alt="#" />
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-primary doctor-refresh ms-2"
                                >
                                  <img src={refreshicon} alt="#" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Table Header */}
                    <div className="table-responsive doctor-list">
                      <Table
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          // showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={datasource}
                        // rowSelection={rowSelection}
                        rowKey={(record) => record.id}
                        style={{
                          backgroundColor: "#f2f2f2", // Replace with your desired background color for the table
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="delete_patient"
          className="modal fade delete-modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={imagesend} alt="#" width={50} height={46} />
                <h3>Are you sure want to delete this ?</h3>
                <div className="m-t-20">
                  {" "}
                  <Link
                    to="#"
                    className="btn btn-white me-2"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </Link>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="delete_patient"
            className="modal fade delete-modal"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <img src={imagesend} alt="#" width={50} height={46} />
                  <h3>Are you sure want to delete this ?</h3>
                  <div className="m-t-20">
                    {" "}
                    <Link
                      to="#"
                      className="btn btn-white me-2"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </Link>
                    <button type="submit" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <></>
    </>
  );
};

export default MeetingList;
