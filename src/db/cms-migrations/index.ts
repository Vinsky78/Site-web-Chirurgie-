import * as migration_20261007_215412_init_cms from './20261007_215412_init_cms';
import * as migration_20261007_222932_directory from './20261007_222932_directory';
import * as migration_20261007_234308_editorial from './20261007_234308_editorial';
import * as migration_20261008_170747_lancement from './20261008_170747_lancement';

export const migrations = [
  {
    up: migration_20261007_215412_init_cms.up,
    down: migration_20261007_215412_init_cms.down,
    name: '20261007_215412_init_cms',
  },
  {
    up: migration_20261007_222932_directory.up,
    down: migration_20261007_222932_directory.down,
    name: '20261007_222932_directory',
  },
  {
    up: migration_20261007_234308_editorial.up,
    down: migration_20261007_234308_editorial.down,
    name: '20261007_234308_editorial',
  },
  {
    up: migration_20261008_170747_lancement.up,
    down: migration_20261008_170747_lancement.down,
    name: '20261008_170747_lancement'
  },
];
