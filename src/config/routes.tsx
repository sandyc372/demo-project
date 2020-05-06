import React from 'react';
import MainPage from '../pages/Get/MainPage';
import CreatePage from '../pages/Create/CreatePage';

export const routes = [{
  path: '/get',
  component: MainPage,
  label: 'Get'
}, {
  path: '/create',
  component: CreatePage,
  label: 'Create'
}, {
  path: '/update',
  component: MainPage,
  label: 'Update'
}, {
  path: '/delete',
  component: MainPage,
  label: 'Delete'
}];
