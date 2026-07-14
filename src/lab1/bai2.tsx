import { Form, Input, Button } from "antd";

export default function Lab1Bai2() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Nhập họ và tên" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Nhập email" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="pass"
        rules={[{ required: true, message: "Nhập mật khẩu" }]}
      >
        <Input placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
