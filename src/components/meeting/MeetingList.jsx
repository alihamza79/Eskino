import React, { useState } from "react";
import { Table, Modal, Button } from "antd";
import { Link } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  imagesend,
  plusicon,
  refreshicon,
  searchnormal,
  blogimg2,
} from "../imagepath";
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
    Name: "Ali",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState({});

  const showModal = (meeting) => {
    setSelectedMeeting(meeting);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    ``;
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      render: (text) => <Link to="/participentlist">{text}</Link>,
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
      sorter: (a, b) => a.EndTime.length - b.EndTime.length,
    },
    {
      title: "Participent",
      dataIndex: "Participent",
      sorter: (a, b) => a.Participent - b.Participent,
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, record) => (
        <Button className="btn btn-primary" onClick={() => showModal(record)}>
          View Details
        </Button>
      ),
    },
    {
      title: "",
      dataIndex: "FIELD8",
      render: () => (
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
      <Sidebar id="menu-item1" activeClassName="meeting-list" />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Meetings</Link>
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
                                to="/add-meeting"
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
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="card">
                        <div className="card-body">
                          <Table
                            columns={columns}
                            dataSource={datasource}
                            rowKey="id"
                          />
                          {isModalOpen && (
                            <Modal
                              title="Meeting Details"
                              open={isModalOpen}
                              onOk={handleOk}
                              onCancel={handleCancel}
                              footer={[
                                <Button key="close" onClick={handleCancel}>
                                  Close
                                </Button>,
                                <Button
                                  key="ok"
                                  onClick={handleOk}
                                  type="primary"
                                >
                                  OK
                                </Button>,
                              ]}
                            >
                              <p>
                                <strong>Name:</strong> {selectedMeeting.Name}
                              </p>
                              <p>
                                <strong>Start Time:</strong>{" "}
                                {selectedMeeting.StartTime}
                              </p>
                              <p>
                                <strong>End Time:</strong>{" "}
                                {selectedMeeting.EndTime}
                              </p>
                              <p>
                                <strong>Participent:</strong>{" "}
                                {selectedMeeting.Participent}
                              </p>

                              <p>
                                <strong>Capacity:</strong>{" "}
                                {selectedMeeting.Capacity}
                              </p>
                              <p>
                                <strong>Location:</strong>{" "}
                                {selectedMeeting.Location}
                              </p>
                              <p>
                                <strong>Start Date:</strong>{" "}
                                {selectedMeeting.StartDate}
                              </p>
                              {/* Add more details if needed */}
                            </Modal>
                          )}
                          <div
                            id="delete_patient"
                            className="modal fade delete-modal"
                            role="dialog"
                          >
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-body text-center">
                                  <img
                                    src={imagesend}
                                    alt="#"
                                    width={50}
                                    height={46}
                                  />
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
                                    <button
                                      type="submit"
                                      className="btn btn-danger"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingList;
