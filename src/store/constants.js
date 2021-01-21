// virus module
// ---gap---

// virus state
export const REAL_TIME = 'REAL_TIME'; // 实时-REAL_TIME
export const THE_STATISTICS = 'THE_STATISTICS'; // 统计-STATISTICS
export const THE_RUMOR = 'THE_RUMOR'; // 谣言-RUMOR
export const THE_TREND = 'THE_TREND'; // 趋势-TREND
// virus mutation
export const SET_REAL_TIME = 'SET_REAL_TIME';
export const SET_THE_STATISTICS = 'SET_THE_STATISTICS';
export const SET_THE_RUMOR = 'SET_THE_RUMOR';
export const SET_THE_TREND = 'SET_THE_TREND';
// virus action
export const GET_REAL_TIME = 'GET_REAL_TIME';
export const GET_THE_STATISTICS = 'GET_THE_STATISTICS';
export const GET_THE_RUMOR = 'GET_THE_RUMOR';
export const GET_THE_TREND = 'GET_THE_TREND';
// virus module extra constant
export const API_TYPES_COVID = {
  [REAL_TIME]: '/ncov',
  [THE_STATISTICS]: '/ncovcity',
  [THE_RUMOR]: '/rumour',
  [THE_TREND]: '',
};
export const API_RESULTS_COVID = {
  [REAL_TIME]: 'newslist',
  [THE_STATISTICS]: 'newslist',
  [THE_RUMOR]: 'newslist',
  [THE_TREND]: 'results',
};
export const META_PATH_COVID = '/index?key=';

// ---gap---

// map module
// ---gap---
// map state
export const CHINA_JSON = 'CHINA_JSON';
export const PROVINCE_JSON = 'PROVINCE_JSON';
// map mutation
export const SET_CHINA_JSON = 'SET_CHINA_JSON';
export const SET_PROVINCE_JSON = 'SET_PROVINCE_JSON';
// map action
export const GET_CHINA_JSON = 'GET_CHINA_JSON';
export const GET_PROVINCE_JSON = 'GET_PROVINCE_JSON';
// map module extra constant
export const API_RESULTS_MAP = {
  [CHINA_JSON]: 'features',
  [PROVINCE_JSON]: 'features',
};
export const META_PATH_MAP = '.json';