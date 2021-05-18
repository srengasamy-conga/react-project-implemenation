import React from "react";
import { Table, Tag, Space } from "antd";

const mocData = [
  {
    id: "1",
    productTitle: "MacBook Air",
    isChecked: false,
    productDescription: "Power. It’s in the Air."
  },
  {
    id: "2",
    productTitle: 'MacBook Pro 13"',
    isChecked: false,
    productDescription: "All systems Pro."
  },
  {
    id: "3",
    productTitle: 'MacBook Pro 16"',
    isChecked: false,
    productDescription: "The best for the brightest."
  },
  {
    id: "4",
    productTitle: "iMac",
    isChecked: false,
    productDescription: "The all-in-one for all."
  },
  {
    id: "5",
    productTitle: "iPad Pro",
    isChecked: false,
    productDescription: "Your next computer is not a computer."
  },
  {
    id: "6",
    productTitle: "iPad Air",
    isChecked: false,
    productDescription: "Powerful. Colorful. Wonderful."
  },
  {
    id: "7",
    productTitle: "iPad",
    isChecked: false,
    productDescription: "Delightfully capable. Surprisingly affordable."
  },
  {
    id: "8",
    productTitle: "iPad Mini",
    isChecked: false,
    productDescription: "Mini just got mightier."
  }
];

const columns = [
  {
    title: "Title",
    dataIndex: "productTitle"
  },
  {
    title: "Description",
    dataIndex: "productDescription"
  }
];

const Grid = () => {
  return (
    <Table
      style={{ marginTop: 25, padding: 10 }}
      columns={columns}
      dataSource={mocData}
    />
  );
};

export default Grid;
