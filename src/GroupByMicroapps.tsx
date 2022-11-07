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
    f;
  }
  console.log('data', data);

  return (
    <Space size="middle">
      <a onClick={() => setIsModalOpen(true)}>View usages</a>
      <Modal
        title={
          <div>
            Usage of <Tag>components</Tag> <Tag>Tooltip</Tag>
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
      {
        title: 'Module name',
        dataIndex: 'module_name',
        key: 'module_name',
        filters: [
          {
            text: 'Components',
            value: 'London',
          },
          {
            text: 'APIs',
            value: 'New York',
          },
        ],
        width: 200,
      },
      {
        title: 'Submodule name',
        dataIndex: 'submodule_name',
        key: 'submodule_name',
        width: 200,
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
      },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => <a>Urls </a>,
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        last_used: '2014-12-24 23:12:00',
        module_name: 'Components',
        submodule_name: 'Tooltip',
        status: 'Active',
        direct: 'Direct',
        used_by: 8,
      });
    }

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Microapp Name',
      dataIndex: 'name',
      key: 'name',
      width: 400,
      render: (data) => {
        return <a>{data}</a>;
      },
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

    { title: 'Last used', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Submodules used',
      dataIndex: 'creator',
      key: 'creator',
      render: () => <Space>123</Space>,
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: 'SPACE Cloud CMDB',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
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
