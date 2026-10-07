import * as migration_20261007_215412_init_cms from './20261007_215412_init_cms';
import * as migration_20261007_222932_directory from './20261007_222932_directory';

export const migrations = [
  {
    up: migration_20261007_215412_init_cms.up,
    down: migration_20261007_215412_init_cms.down,
    name: '20261007_215412_init_cms',
  },
  {
    up: migration_20261007_222932_directory.up,
    down: migration_20261007_222932_directory.down,
    name: '20261007_222932_directory'
  },
];
