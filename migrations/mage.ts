import { MigrationBuilder } from 'node-pg-migrate/dist/types'

exports.up = (pgm: MigrationBuilder) => {
  pgm.createTable('apis', {
    id: 'id',
    name: {
      type: 'varchar(200)',
      notNull: true,
    },
    description: 'varchar(500)',
    route: {
      type: 'varchar(200)',
      notNull: true,
    },
    method: {
      type: 'varchar(200)',
      notNull: true,
    },
    data: {
      type: 'varchar(20000)',
      notNull: true,
    },
  })

  pgm.createTable('schemas', {
    id: 'id',
    name: {
      type: 'varchar(200)',
      notNull: true,
    },
    data: {
      type: 'varchar(20000)',
      notNull: true,
    },
  })
}
