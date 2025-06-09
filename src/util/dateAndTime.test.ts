import { getDurationFromTwoDates } from "./dateAndTime";

test('2025-06-06T11:10:00 - 2025-06-06T11:00:00 = 10 minutes', () => {
    expect(getDurationFromTwoDates('2025-06-06T11:00:00', '2025-06-06T11:10:00')).toBe(10);
})