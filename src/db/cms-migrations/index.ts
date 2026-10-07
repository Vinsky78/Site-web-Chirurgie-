import * as migration_20261007_215412_init_cms from './20261007_215412_init_cms';

export const migrations = [
  {
    up: migration_20261007_215412_init_cms.up,
    down: migration_20261007_215412_init_cms.down,
    name: '20261007_215412_init_cms'
  },
];
