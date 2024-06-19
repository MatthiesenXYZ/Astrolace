import { fileFactory } from '../utils/fileFactory.ts';
import { componentFile } from './components.ts';
import { typesFile } from './types.ts';
import { toolsFile } from './tools.ts';

const astrolaceDTS = fileFactory();

astrolaceDTS.addLines(typesFile);
astrolaceDTS.addLines(toolsFile);
astrolaceDTS.addLines(componentFile);

export const astrolaceDTSFile = astrolaceDTS.text();