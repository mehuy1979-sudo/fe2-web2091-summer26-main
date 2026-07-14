import { Table } from "antd";
const columns = [
  { title: "id", dataIndex: "id", key: "id" },
  { title: "Product Name", dataIndex: "productname", key: "productname" },
  { title: "Price", dataIndex: "price", key: "price" },
  { title: "Category", dataIndex: "category", key: "category" },
];
const data = [
  {
    key: 1,
    id: 1,
    productname: "Iphone11",
    price: 5000000,
    category: "Điện thoại",
  },
  {
    key: 2,
    id: 2,
    productname: "Iphone12",
    price: 6000000,
    category: "Điện thoại",
  },
  {
    key: 3,
    id: 3,
    productname: "Iphone13",
    price: 7000000,
    category: "Điện thoại",
  },
  {
    key: 4,
    id: 4,
    productname: "Iphone14",
    price: 8000000,
    category: "Điện thoại",
  },
];

export default function Lab2Bai2() {
  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 4}}/>;
}
