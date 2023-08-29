import React from 'react';
import { Loader } from '../../components/Loader';
import dynamic from 'next/dynamic';

export const CodeInputFieldLazy = dynamic(() => import('./index'), {
  loading: () => <Loader />,
  ssr: false,
});
