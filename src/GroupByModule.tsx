import 'antd/dist/antd.css';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import {
  Badge,
  Dropdown,
  Tooltip,
  Menu,
  Tabs,
  Space,
  Table,
  Modal,
  Tag,
} from 'antd';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface ExpandedDataType {
  key: React.Key;
  date: string;
  name: string;
  upgradeNum: string;
}

const menu = (
  <Menu
    items={[
      { key: '1', label: 'Action 1' },
      { key: '2', label: 'Action 2' },
    ]}
  />
);

function ViewUsages() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Microapps',
      dataIndex: 'name',
      key: 'name',
      render: (data: string) => <a>{data}</a>,
    },
  ];

  let data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'Space Cloud CMDB',
    });
  }
  console.log('data', data);

  return (
    <Space size="middle">
      <a onClick={() => setIsModalOpen(true)}>View usages</a>
      <Modal
        title={
          <div>
            Usage of <Tag>components</Tag> > <Tag>Tooltip</Tag>
          </div>
        }
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <Table size="small" columns={columns} dataSource={data} />
      </Modal>
    </Space>
  );
}
function GroupByModule() {
  const expandedRowRender = () => {
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: 'Submodule name', dataIndex: 'name', key: 'name', width: 150 },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status: string) => (
          <Space>
            {status === 'Active' && <Badge status="success" />}
            {status === 'Inactive' && <Badge status="error" />}
            {status}
          </Space>
        ),
        width: 150,
      },

      {
        title: 'Used by',
        key: 'used_by',
        dataIndex: 'used_by',

        render: (used_by: number) => {
          console.log('used_by', used_by);
          return <Space>{used_by}</Space>;
        },
        width: 150,
      },
      {
        title: () => (
          <Space>
            Direct{' '}
            <Tooltip
              title={
                'Wether this dependency is direct or indirect. After 27 October, indirect dependencies would not be recorded'
              }
            >
              <QuestionCircleOutlined />
            </Tooltip>
          </Space>
        ),
        dataIndex: 'direct',
        key: 'direct',
        render: () => {
          return (
            <div>
              <Tag color="green">Direct</Tag>
            </div>
          );
        },

        filters: [
          {
            text: 'Direct',
            value: 'London',
          },
          {
            text: 'Indirect',
            value: 'New York',
          },
        ],
        width: 150,
      },
      {
        title: 'Last used',
        dataIndex: 'last_used',
        key: 'last_used',
        width: 250,
      },

      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space>
            <a>Urls</a>
            <ViewUsages />
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        last_used: '2014-12-24 23:12:00',
        name: 'Tooltip',
        upgradeNum: 'Upgraded: 56',
        status: 'Active',
        used_by: 8,
      });
    }
    for (let i = 0; i < 2; ++i) {
      data.push({
        key: i.toString(),
        last_used: '2014-12-24 23:12:00',
        name: 'Tooltip',
        status: 'Inactive',
        used_by: 0,
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns: TableColumnsType<DataType> = [
    { title: 'Module Name', dataIndex: 'name', key: 'name', width: 150 },
    {
      title: 'Status',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum',
      render: () => (
        <div>
          {' '}
          <Badge status="success" /> Active
        </div>
      ),
      width: 150,
    },
    {
      title: 'Used by',
      dataIndex: 'creator',
      key: 'creator',
      render: () => <Space>123</Space>,
      width: 150,
    },
    {
      title: () => (
        <Space>
          Direct{' '}
          <Tooltip
            title={
              'Wether this dependency is direct or indirect. After 27 October, indirect dependencies would not be recorded'
            }
          >
            <QuestionCircleOutlined />
          </Tooltip>
        </Space>
      ),
      dataIndex: 'direct',
      key: 'direct',
      render: () => {
        return (
          <div>
            <Tag color="green">Direct</Tag>
          </div>
        );
      },
      filters: [
        {
          text: 'Direct',
          value: 'London',
        },
        {
          text: 'Indirect',
          value: 'New York',
        },
      ],
      width: 150,
    },

    {
      title: 'Last used',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 250,
    },
    {
      title: 'Action',
      key: 'operation',
      render: () => (
        <Space>
          <a>Urls</a> <ViewUsages />
        </Space>
      ),
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'components',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
      direct: true,
    });
  }
  return (
    <Table
      columns={columns}
      expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
      dataSource={data}
      size="small"
    />
  );
}

export default GroupByModule;
