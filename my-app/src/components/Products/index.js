/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Upload, message, Popconfirm, List, Card } from 'antd';
import { PlusOutlined, UploadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Products = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => (
        <img src={text} alt={record.name} style={{ maxWidth: '100px' }} />
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, record, index) => (
        <div>
          <a onClick={() => handleEdit(index)}><EditOutlined /></a>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(index)}>
            <a style={{ marginLeft: '10px' }}><DeleteOutlined /></a>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [products, setProducts] = useState([
    {
      name: 'Example product',
      description: 'Sample description',
      price: 10,
      image: 'https://via.placeholder.com/150x150',
    }
  ]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [fileList, setFileList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);



  const handleAdd = () => {
    setEditingIndex(-1);
    form.resetFields();
    showModal();
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const { name, description, price, image } = products[index];
    form.setFieldsValue({ name, description, price, image });
    showModal();
  };

  const handleDelete = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };


  const handleSubmit = (values) => {
    const newProducts = [...products];
    if (editingIndex > -1) {
      newProducts[editingIndex] = values;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onload = () => {
        const newProduct = { ...values, image: reader.result };
        newProducts.push(newProduct);
        setProducts(newProducts);
      };
    }
    setEditingIndex(-1);
    setSelectedImage(null);
    hideModal();
  };

  const hideModal = () => {
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleBeforeUpload = ((file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    setSelectedImage(file);
    return isJpgOrPng && isLt2M;
  })

  const [isListView, setIsListView] = useState(true);

  const toggleView = () => {
    setIsListView(!isListView);
  };

  const renderViewSwitcher = () => {
    return (
      <Button type="primary" onClick={toggleView}>
        {isListView ? 'Table View' : 'List View'}
      </Button>
    );
  };

  const renderListView = () => {
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={products}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name} style={{ width: 200 }}>
              <img src={item.image} alt={item.name} style={{ maxWidth: '100%' }} />
              <p>{item.description}</p>
              <p>{item.price}</p>
            </Card>
          </List.Item>
        )}
      />
    );
  };

  const renderTableView = () => {
    return <Table columns={columns} dataSource={products} />;
  };

  return (
    <div>
      <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
        Add Product
      </Button>
      {renderViewSwitcher()}
      {isListView ? renderListView() : renderTableView()}
      <Modal
        visible={visible}
        title={editingIndex > -1 ? 'Edit Product' : 'Add New Product'}
        onOk={form.submit}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={form.submit}>
            Save
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={(values) => handleSubmit(values)}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Product Name"
            name="name"
            rules={[{ required: true, message: 'Please enter a product name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: 'Please enter a price' }]}
          >
            <Input type="number" min={0} step={0.01} />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input.TextArea />
          </Form.Item>

          <Form.Item label="Image" name="image">
          <Upload
            name="image"
            beforeUpload={handleBeforeUpload}
            fileList={fileList}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Products;