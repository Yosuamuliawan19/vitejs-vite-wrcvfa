import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Menu, Tabs, Space, Table, Modal, Tag } from 'antd';
import React from 'react';
import GroupByModule from './GroupByModule';
import GroupByMicroapps from './GroupByMicroapps';

const App: React.FC = () => {
  const tabs = [
    {
      label: 'Group by module',
      key: 'item-1',
      children: <GroupByModule />,
    }, // remember to pass the key prop
    {
      label: 'Group by microapps',
      key: 'item-2',
      children: <GroupByMicroapps />,
    },
  ];

  return (
    <div style={{ padding: 12 }}>
      

      <Tabs size="small" items={tabs} />
    </div>
  );
};

export default App;
