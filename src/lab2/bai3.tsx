import { Button, Space, Table } from "antd";
const columns = [
    { title: "Id", dataIndex: "id", key: "id",},
    {title: "Name", dataIndex: "name", key: "name",},
    {title: "Email", dataIndex: "email", key: "email",},
    {title: "Status", dataIndex: "status", key: "status",
        render: (status) => ( 
        <span style={{ color: status === "active" ? "green" : "red" }}>
            {status}
        </span>
    ),},
     {
    title: "Action",
    render: (_, record:any) => (
      <Space>
        <Button type="primary">Edit</Button>
        <Button danger type="primary">Delete</Button>
      </Space>
    ),
  },
];
const data = [
    {
        key: 1,
        id: 1,
        name: "Huy",
        email: "mehuy1979@gmail.com",
        status: "active",
    },
        {
        key: 2,
        id: 2,
        name: "Huyen",
        email: "bohuy1979@gmail.com",
        status: "inactive",
    },
        {
        key: 3,
        id: 3,
        name: "hai",
        email: "bahuy1979@gmail.com",
        status: "active",
    },
        {
        key: 4,
        id: 4,
        name: "hieu",
        email: "onghuy1979@gmail.com",
        status: "inactive",
    },
];
export default function Lab2Bai3(){
    return <Table columns={columns} dataSource={data}/>;
}

