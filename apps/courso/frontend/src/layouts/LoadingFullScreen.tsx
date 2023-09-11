import React from 'react';
import { Loader } from '../components/Loader';
import { clientEnvs } from '@beaussan/courso/data/env-config';

const isDebugMode = false;

export const LoadingFullScreen: React.FC<{ debugName: string }> = ({
  debugName,
}) => {
  if (clientEnvs.NODE_ENV === 'development') {
    console.log(`[LOADING FULL SCREEN] ${debugName}`);
  }
  if (isDebugMode) {
    return <div>Loading full screen : {debugName}</div>;
  }
  return (
    <div className="fixed  top-0 bottom-0 right-0 left-0 z-50 bg-gray-50 flex items-center justify-center h-screen w-screen">
      <Loader visible={true} height={100} width={100} />
    </div>
  );
};
