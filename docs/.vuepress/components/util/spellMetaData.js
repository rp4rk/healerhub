import { toSeconds } from './time';

export const castTime = time => {
  if (time == 0) return 'Instant';

  return `${toSeconds(time)}s`
}
