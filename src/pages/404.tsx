import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const urlParams = new URL(window.location.href).searchParams;
history.push(urlParams.get('redirect') || '/welcome');

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
