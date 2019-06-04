import { getTimeInMinutesAndSeconds } from '../utils';

test('Converte 300 segundos para 5:00', () => {
  expect(getTimeInMinutesAndSeconds('300')).toBe('5:00');
});
