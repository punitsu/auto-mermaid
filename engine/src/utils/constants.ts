import { DATABASES_SUPPORTED } from '@utils/types';

export const DATABASE_URL_REGEX: Record<DATABASES_SUPPORTED, RegExp> = {
  postgres: /^postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)$/,
  mysql: /^mysql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)$/,
  sqlite: /^sqlite:\/\/(.+)$/,
};
