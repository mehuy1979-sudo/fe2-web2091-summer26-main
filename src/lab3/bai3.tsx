import { Form, Input, Button, InputNumber, Select } from "antd";

const ProductForm = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Tên sản phẩm" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Giá" name="price" rules={[{ required: true }]}>
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Danh mục" name="category">
        <Select
          placeholder="Chọn danh mục"
          options={[
            { label: "Laptop", value: "laptop" },
            { label: "Điện thoại", value: "phone" },
            { label: "Tablet", value: "tablet" },
            { label: "Phụ kiện", value: "accessory" },
          ]}
        />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Thêm sản phẩm
      </Button>
    </Form>
  );
};

export default ProductForm;