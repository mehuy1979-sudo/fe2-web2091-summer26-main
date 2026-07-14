import { Table } from "antd";
const columns = [
     { title: "id" , dataIndex: "id"},
    { title: "Name" , dataIndex: "name"},
    { title: "Age" , dataIndex: "age"},
 { title: "Major" , dataIndex: "Major"},

];
const data = [
    {key: 1,id: 1 , name: "Huy", age: 21 , Major: "Cntt",},
    {key: 2,id: 2, name: "Huyen", age: 23 , Major: "Marketing",},
];

export default function Lab2Bai1(){
    return <Table columns={columns} dataSource={data} />;
}
