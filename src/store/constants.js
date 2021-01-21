// virus state
export const REAL_TIME = "REAL_TIME"; // 实时-REAL_TIME
export const THE_STATISTICS = "THE_STATISTICS"; // 统计-STATISTICS
export const THE_RUMOR = "THE_RUMOR"; // 谣言-RUMOR
export const THE_TREND = "THE_TREND"; // 趋势-TREND
// virus mutation
export const SET_REAL_TIME = "SET_REAL_TIME";
export const SET_THE_STATISTICS = "SET_THE_STATISTICS";
export const SET_THE_RUMOR = "SET_THE_RUMOR";
export const SET_THE_TREND = "SET_THE_TREND";
// virus action
export const GET_REAL_TIME = "GET_REAL_TIME";
export const GET_THE_STATISTICS = "GET_THE_STATISTICS";
export const GET_THE_RUMOR = "GET_THE_RUMOR";
export const GET_THE_TREND = "GET_THE_TREND";
// virus module extra constant
export const API_TYPES = {
  [REAL_TIME]: '/ncov',
  [THE_STATISTICS]: '/ncovcity',
  [THE_RUMOR]: '/rumour',
  [THE_TREND]: '',
};
export const API_RESULTS = {
  [REAL_TIME]: 'newslist',
  [THE_STATISTICS]: 'newslist',
  [THE_RUMOR]: 'newslist',
  [THE_TREND]: 'results',
};
export const META_PATH = '/index?key=';