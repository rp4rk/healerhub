import { toSeconds } from './time';

export const castTime = time => {
  if (time == 0) return 'Instant cast';

  return `${toSeconds(time)}s`
}
