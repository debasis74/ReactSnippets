import React, { useState } from 'react';
import explorerData from '../../Data/HirerchialData';
import Folder from './Folder';

const FileExplorer = () => {
  return <Folder explorer={explorerData} />;
};

export default FileExplorer;
