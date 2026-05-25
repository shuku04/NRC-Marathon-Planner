export type RunType = 'recovery' | 'speed' | 'long' | 'rest'

export interface Workout {
  id: string
  type: RunType
  title: string
  nrcGuide?: string
  duration?: string
  distance?: string
  structure: string[]
  dayOrder: number
}

export interface TrainingWeek {
  weekNumber: number
  label: string
  workouts: Workout[]
}

export const PACE_CHART = [
  { mileBest: '5:00', fiveK: '17:05/5:30', tenK: '35:45/5:45', tempo: '6:05', half: '1:18:00/6:00', marathon: '2:44:00/6:15', recovery: '7:00' },
  { mileBest: '5:30', fiveK: '18:45/6:00', tenK: '39:00/6:15', tempo: '6:35', half: '1:25:00/6:30', marathon: '3:00:00/6:50', recovery: '7:35' },
  { mileBest: '6:00', fiveK: '20:15/6:30', tenK: '42:00/6:45', tempo: '7:05', half: '1:35:00/7:15', marathon: '3:15:00/7:25', recovery: '8:10' },
  { mileBest: '6:30', fiveK: '22:00/7:05', tenK: '45:45/7:20', tempo: '7:40', half: '1:40:00/7:35', marathon: '3:30:00/8:00', recovery: '8:45' },
  { mileBest: '7:00', fiveK: '23:45/7:40', tenK: '49:00/7:55', tempo: '8:15', half: '1:50:00/8:20', marathon: '3:45:00/8:35', recovery: '9:20' },
  { mileBest: '7:30', fiveK: '25:15/8:05', tenK: '52:30/8:25', tempo: '8:50', half: '1:55:00/8:45', marathon: '4:00:00/9:10', recovery: '9:55' },
  { mileBest: '8:00', fiveK: '27:00/8:40', tenK: '55:50/9:00', tempo: '9:25', half: '2:05:00/9:30', marathon: '4:15:00/9:45', recovery: '10:30' },
  { mileBest: '8:30', fiveK: '28:30/9:10', tenK: '59:00/9:30', tempo: '9:55', half: '2:10:00/9:55', marathon: '4:30:00/10:15', recovery: '11:00' },
  { mileBest: '9:00', fiveK: '30:00/9:40', tenK: '62:30/10:00', tempo: '10:30', half: '2:20:00/10:40', marathon: '4:45:00/10:50', recovery: '11:35' },
  { mileBest: '9:30', fiveK: '31:45/10:15', tenK: '66:00/10:35', tempo: '11:00', half: '2:25:00/11:05', marathon: '5:00:00/11:25', recovery: '12:10' },
  { mileBest: '10:00', fiveK: '33:00/10:40', tenK: '69:00/11:05', tempo: '11:35', half: '2:35:00/11:45', marathon: '5:15:00/12:00', recovery: '12:45' },
  { mileBest: '10:30', fiveK: '35:00/11:15', tenK: '72:00/11:35', tempo: '12:00', half: '2:40:00/12:10', marathon: '5:30:00/12:35', recovery: '13:20' },
  { mileBest: '11:00', fiveK: '36:15/11:40', tenK: '75:00/12:00', tempo: '12:35', half: '2:50:00/12:55', marathon: '5:40:00/13:00', recovery: '13:45' },
  { mileBest: '11:30', fiveK: '38:00/12:15', tenK: '78:30/12:35', tempo: '13:00', half: '2:55:00/13:15', marathon: '5:50:00/13:20', recovery: '14:05' },
  { mileBest: '12:00', fiveK: '39:30/12:40', tenK: '81:30/13:05', tempo: '13:35', half: '3:05:00/14:05', marathon: '6:00:00/13:45', recovery: '14:30' },
] as const

function w(
  week: number,
  type: RunType,
  title: string,
  nrc: string | undefined,
  structure: string[],
  extra?: { duration?: string; distance?: string; dayOrder: number }
): Workout {
  return {
    id: `w${week}-${type}-${extra?.dayOrder ?? 0}`,
    type,
    title,
    nrcGuide: nrc,
    structure,
    duration: extra?.duration,
    distance: extra?.distance,
    dayOrder: extra?.dayOrder ?? 0,
  }
}

export const TRAINING_PLAN: TrainingWeek[] = [
  {
    weekNumber: 18,
    label: '18 Weeks to Go',
    workouts: [
      w(18, 'recovery', 'Recovery Run', '18 Weeks to Go', ['20:00 easy run'], { duration: '20 min', dayOrder: 1 }),
      w(18, 'speed', 'Easy Hills', 'Easy Hills', ['10:00 warm up', '6 × (45s uphill hard + 1:15 easy)', '10:00 cool down'], { dayOrder: 2 }),
      w(18, 'recovery', 'Easy Run', 'Easy Run', ['25:00 easy run'], { duration: '25 min', dayOrder: 3 }),
      w(18, 'speed', 'Tempo Starter', 'Tempo Starter', ['8:00 steady run', '4 × 1:00 @ tempo', '6:00 easy'], { dayOrder: 4 }),
      w(18, 'long', '8 Mile Run', '8 Mile Run', ['8 mi easy progression long run'], { distance: '8 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 17,
    label: '17 Weeks to Go',
    workouts: [
      w(17, 'recovery', 'Recovery Run', '17 Weeks to Go', ['22:00 easy run'], { duration: '22 min', dayOrder: 1 }),
      w(17, 'speed', 'Hill Repeats', 'Hill Repeats', ['12:00 warm up', '5 × 1:00 hill repeats', '10:00 cool down'], { dayOrder: 2 }),
      w(17, 'recovery', 'Easy Run', 'Easy Run', ['28:00 easy run'], { duration: '28 min', dayOrder: 3 }),
      w(17, 'speed', 'Tempo Build', 'Tempo Build', ['10:00 warm up', '3 × 4:00 @ marathon pace', '8:00 easy'], { dayOrder: 4 }),
      w(17, 'long', '9 Mile Run', '9 Mile Run', ['9 mi progression long run'], { distance: '9 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 16,
    label: '16 Weeks to Go',
    workouts: [
      w(16, 'recovery', 'Recovery Run', '16 Weeks to Go', ['25:00 easy run'], { duration: '25 min', dayOrder: 1 }),
      w(16, 'speed', 'Fast Finish', 'Fast Finish', ['10:00 warm up', '20:00 steady pace', '10:00 fast finish'], { dayOrder: 2 }),
      w(16, 'recovery', 'Easy Run', 'Easy Run', ['30:00 easy run'], { duration: '30 min', dayOrder: 3 }),
      w(16, 'speed', 'Marathon Pace Workout', 'Marathon Pace Workout', ['2K warm up', '5 × 2:00 @ marathon pace', '2K cool down'], { dayOrder: 4 }),
      w(16, 'long', '10 Mile Run', '10 Mile Run', ['10 mi progression long run'], { distance: '10 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 15,
    label: '15 Weeks to Go',
    workouts: [
      w(15, 'recovery', 'Recovery Run', '15 Weeks to Go', ['25:00 easy run'], { duration: '25 min', dayOrder: 1 }),
      w(15, 'speed', '5K Effort', '5K Effort', ['10:00 warm up', '6 × 1:00 @ 5K pace', '8:00 easy'], { dayOrder: 2 }),
      w(15, 'recovery', 'Easy Run', 'Easy Run', ['32:00 easy run'], { duration: '32 min', dayOrder: 3 }),
      w(15, 'speed', 'Progression Run', 'Progression Run', ['20:00 easy → moderate → marathon pace'], { dayOrder: 4 }),
      w(15, 'long', '12 Mile Run', '12 Mile Run', ['12 mi progression long run'], { distance: '12 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 14,
    label: '14 Weeks to Go',
    workouts: [
      w(14, 'recovery', 'Recovery Run', '14 Weeks to Go', ['25:00 easy run'], { duration: '25 min', dayOrder: 1 }),
      w(14, 'speed', 'Longer Tempo', 'Longer Tempo', ['10:00 warm up', '30:00 tempo', '10:00 easy'], { dayOrder: 2 }),
      w(14, 'recovery', 'Easy Run', 'Easy Run', ['35:00 easy run'], { duration: '35 min', dayOrder: 3 }),
      w(14, 'speed', 'Pace Repeats', 'Pace Repeats', ['10:00 warm up', '4 × 3:00 @ marathon pace', '8:00 easy'], { dayOrder: 4 }),
      w(14, 'long', '13 Mile Run', '13 Mile Run', ['13 mi progression long run'], { distance: '13 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 13,
    label: '13 Weeks to Go',
    workouts: [
      w(13, 'recovery', 'Recovery Run', '13 Weeks to Go', ['27:00 easy run'], { duration: '27 min', dayOrder: 1 }),
      w(13, 'speed', '5K Speed', '5K Speed', ['10:00 warm up', '8 × 1:00 @ 5K pace', '8:00 easy'], { dayOrder: 2 }),
      w(13, 'recovery', 'Easy Run', 'Easy Run', ['38:00 easy run'], { duration: '38 min', dayOrder: 3 }),
      w(13, 'speed', 'Steady Effort', 'Steady Effort', ['25:00 steady run'], { dayOrder: 4 }),
      w(13, 'long', '14 Mile Run', '14 Mile Run', ['14 mi progression long run'], { distance: '14 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 12,
    label: '12 Weeks to Go',
    workouts: [
      w(12, 'recovery', 'Recovery Run', '12 Weeks to Go', ['28:00 easy run'], { duration: '28 min', dayOrder: 1 }),
      w(12, 'speed', 'Hill Strength', 'Hill Strength', ['12:00 warm up', '6 × 1:00 hill repeats', '10:00 cool down'], { dayOrder: 2 }),
      w(12, 'recovery', 'Easy Run', 'Easy Run', ['40:00 easy run'], { duration: '40 min', dayOrder: 3 }),
      w(12, 'speed', 'Tempo Progression', 'Tempo Progression', ['10:00 warm up', '35:00 tempo', '10:00 easy'], { dayOrder: 4 }),
      w(12, 'long', '16 Mile Run', '16 Mile Run', ['16 mi progression long run'], { distance: '16 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 11,
    label: '11 Weeks to Go',
    workouts: [
      w(11, 'recovery', 'Recovery Run', '11 Weeks to Go', ['30:00 easy run'], { duration: '30 min', dayOrder: 1 }),
      w(11, 'speed', '4×1mi Repeats', '4×1mi Repeats', ['10:00 warm up', '4 × 1:00 @ tempo pace', '8:00 easy'], { dayOrder: 2 }),
      w(11, 'recovery', 'Easy Run', 'Easy Run', ['42:00 easy run'], { duration: '42 min', dayOrder: 3 }),
      w(11, 'speed', 'Marathon Pace Mix', 'Marathon Pace Mix', ['10:00 warm up', '20:00 @ marathon pace', '10:00 easy'], { dayOrder: 4 }),
      w(11, 'long', '17 Mile Run', '17 Mile Run', ['17 mi progression long run'], { distance: '17 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 10,
    label: '10 Weeks to Go',
    workouts: [
      w(10, 'recovery', 'Recovery Run', '10 Weeks to Go', ['30:00 easy run'], { duration: '30 min', dayOrder: 1 }),
      w(10, 'speed', '6×800', '6×800', ['10:00 warm up', '6 × 0:50 @ 5K pace', '8:00 easy'], { dayOrder: 2 }),
      w(10, 'recovery', 'Easy Run', 'Easy Run', ['45:00 easy run'], { duration: '45 min', dayOrder: 3 }),
      w(10, 'speed', 'Tempo Ladder', 'Tempo Ladder', ['10:00 warm up', '3 × (5:00 tempo + 2:00 easy)', '8:00 cool down'], { dayOrder: 4 }),
      w(10, 'long', '18 Mile Run', '18 Mile Run', ['18 mi progression long run'], { distance: '18 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 9,
    label: '9 Weeks to Go',
    workouts: [
      w(9, 'recovery', 'Recovery Run', '9 Weeks to Go', ['30:00 easy run'], { duration: '30 min', dayOrder: 1 }),
      w(9, 'speed', '5×1mi', '5×1mi', ['10:00 warm up', '5 × 1:00 @ strong pace', '10:00 easy'], { dayOrder: 2 }),
      w(9, 'recovery', 'Easy Run', 'Easy Run', ['45:00 easy run'], { duration: '45 min', dayOrder: 3 }),
      w(9, 'speed', 'Marathon Pace Run', 'Marathon Pace Run', ['12:00 warm up', '25:00 @ marathon pace', '8:00 cool down'], { dayOrder: 4 }),
      w(9, 'long', '20 Mile Run', '20 Mile Run', ['20 mi progression long run'], { distance: '20 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 8,
    label: '8 Weeks to Go',
    workouts: [
      w(8, 'recovery', 'Recovery Run', '8 Weeks to Go', ['30:00 easy run'], { duration: '30 min', dayOrder: 1 }),
      w(8, 'speed', 'Hill Pyramid', 'Hill Pyramid', ['10:00 warm up', '1:00 / 2:00 / 3:00 uphill hard with easy down', '10:00 cool down'], { dayOrder: 2 }),
      w(8, 'recovery', 'Easy Run', 'Easy Run', ['45:00 easy run'], { duration: '45 min', dayOrder: 3 }),
      w(8, 'speed', 'Tempo Run', 'Tempo Run', ['10:00 warm up', '40:00 tempo', '10:00 cool down'], { dayOrder: 4 }),
      w(8, 'long', '20 Mile Run', '20 Mile Run', ['20 mi progression long run'], { distance: '20 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 7,
    label: '7 Weeks to Go',
    workouts: [
      w(7, 'recovery', 'Recovery Run', '7 Weeks to Go', ['30:00 easy run'], { duration: '30 min', dayOrder: 1 }),
      w(7, 'speed', '8×400', '8×400', ['10:00 warm up', '8 × 0:45 @ 5K pace', '8:00 easy'], { dayOrder: 2 }),
      w(7, 'recovery', 'Easy Run', 'Easy Run', ['45:00 easy run'], { duration: '45 min', dayOrder: 3 }),
      w(7, 'speed', 'Strong Pace Session', 'Strong Pace Session', ['10:00 warm up', '20:00 @ steady hard pace', '8:00 easy'], { dayOrder: 4 }),
      w(7, 'long', '22 Mile Run', '22 Mile Run', ['22 mi progression long run'], { distance: '22 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 6,
    label: '6 Weeks to Go',
    workouts: [
      w(6, 'recovery', 'Recovery Run', '6 Weeks to Go', ['30:00 easy run'], { duration: '30 min', dayOrder: 1 }),
      w(6, 'speed', '6K Tempo', '6K Tempo', ['10:00 warm up', '6K tempo', '10:00 cool down'], { dayOrder: 2 }),
      w(6, 'recovery', 'Easy Run', 'Easy Run', ['45:00 easy run'], { duration: '45 min', dayOrder: 3 }),
      w(6, 'speed', 'Threshold Repeats', 'Threshold Repeats', ['10:00 warm up', '4 × 4:00 @ marathon pace', '8:00 easy'], { dayOrder: 4 }),
      w(6, 'long', '16 Mile Run', '16 Mile Run', ['16 mi progression long run'], { distance: '16 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 5,
    label: '5 Weeks to Go',
    workouts: [
      w(5, 'recovery', 'Recovery Run', '5 Weeks to Go', ['30:00 easy run'], { duration: '30 min', dayOrder: 1 }),
      w(5, 'speed', '5×1K', '5×1K', ['10:00 warm up', '5 × 1:00 @ 5K pace', '8:00 easy'], { dayOrder: 2 }),
      w(5, 'recovery', 'Easy Run', 'Easy Run', ['45:00 easy run'], { duration: '45 min', dayOrder: 3 }),
      w(5, 'speed', 'Marathon Pace Mix', 'Marathon Pace Mix', ['10:00 warm up', '3 × 8:00 @ marathon pace', '10:00 cooldown'], { dayOrder: 4 }),
      w(5, 'long', '18 Mile Run', '18 Mile Run', ['18 mi progression long run'], { distance: '18 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 4,
    label: '4 Weeks to Go',
    workouts: [
      w(4, 'recovery', 'Recovery Run', '4 Weeks to Go', ['25:00 easy run'], { duration: '25 min', dayOrder: 1 }),
      w(4, 'speed', 'Tune-Up Tempo', 'Tune-Up Tempo', ['10:00 warm up', '30:00 tempo', '10:00 cool down'], { dayOrder: 2 }),
      w(4, 'recovery', 'Easy Run', 'Easy Run', ['40:00 easy run'], { duration: '40 min', dayOrder: 3 }),
      w(4, 'speed', 'Short Intervals', 'Short Intervals', ['10:00 warm up', '6 × 1:00 @ 5K pace', '8:00 easy'], { dayOrder: 4 }),
      w(4, 'long', '16 Mile Run', '16 Mile Run', ['16 mi progression long run'], { distance: '16 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 3,
    label: '3 Weeks to Go',
    workouts: [
      w(3, 'recovery', 'Recovery Run', '3 Weeks to Go', ['25:00 easy run'], { duration: '25 min', dayOrder: 1 }),
      w(3, 'speed', 'Easy Speed', 'Easy Speed', ['10:00 warm up', '4 × 2:00 @ 10K pace', '8:00 easy'], { dayOrder: 2 }),
      w(3, 'recovery', 'Easy Run', 'Easy Run', ['35:00 easy run'], { duration: '35 min', dayOrder: 3 }),
      w(3, 'speed', 'Marathon Pace Run', 'Marathon Pace Run', ['10:00 warm up', '25:00 @ marathon pace', '10:00 cool down'], { dayOrder: 4 }),
      w(3, 'long', '14 Mile Run', '14 Mile Run', ['14 mi progression long run'], { distance: '14 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 2,
    label: '2 Weeks to Go',
    workouts: [
      w(2, 'recovery', 'Recovery Run', '2 Weeks to Go', ['20:00 easy run'], { duration: '20 min', dayOrder: 1 }),
      w(2, 'speed', 'Race Prep', 'Race Prep', ['10:00 warm up', '3 × 1:00 @ marathon pace', '8:00 easy'], { dayOrder: 2 }),
      w(2, 'recovery', 'Easy Run', 'Easy Run', ['30:00 easy run'], { duration: '30 min', dayOrder: 3 }),
      w(2, 'speed', 'Short Strides', 'Short Strides', ['10:00 warm up', '6 × 30s strides', '10:00 easy'], { dayOrder: 4 }),
      w(2, 'long', '10 Mile Run', '10 Mile Run', ['10 mi easy long run'], { distance: '10 mi', dayOrder: 5 }),
    ],
  },
  {
    weekNumber: 1,
    label: 'Race Week',
    workouts: [
      w(1, 'recovery', 'Recovery Run', 'Race Week', ['20:00 easy run'], { duration: '20 min', dayOrder: 1 }),
      w(1, 'recovery', 'Shakeout Run', 'Shakeout Run', ['15:00 easy with strides'], { duration: '15 min', dayOrder: 2 }),
      w(1, 'recovery', 'Easy Run', 'Easy Run', ['20:00 easy run'], { duration: '20 min', dayOrder: 3 }),
      w(1, 'recovery', 'Two Mile Shakeout', 'Two Mile Shakeout', ['2 mi shakeout'], { distance: '2 mi', dayOrder: 4 }),
      w(1, 'long', 'Marathon Race', 'Marathon Race', ['26.2 mi — race day!'], { distance: '26.2 mi', dayOrder: 5 }),
    ],
  },
]
export const RUN_TYPE_LABELS: Record<RunType, string> = {
  recovery: 'Recovery',
  speed: 'Speed',
  long: 'Long',
  rest: 'Rest',
}

export const RUN_TYPE_COLORS: Record<RunType, string> = {
  recovery: '#4ade80',
  speed: '#facc15',
  long: '#60a5fa',
  rest: '#a3a3a3',
}
