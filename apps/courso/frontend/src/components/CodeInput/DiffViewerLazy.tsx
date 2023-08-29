import React from 'react';
import { Loader } from '../../components/Loader';
import dynamic from 'next/dynamic';

export const DiffViewerLazy = dynamic(() => import('./DiffViewer'), {
  loading: () => <Loader />,
  ssr: false,
});
