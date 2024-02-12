import axios from 'axios';

let baseURL = 'https://raw.githubusercontent.com/minseo1209/JSON/main/';
let axiosService = axios.create({
  baseURL,
  headers: {
    'Cache-Control': 'no-cache',
  },
});

export let getSeasonData = async (season, dataType) => {
  try {
    // Axios를 사용하여 데이터 가져오기
    let response = await axiosService.get(`${season}/${dataType}.json`);
    return response.data;
  } catch (error) {
    console.error('에러:', error);
    throw error;
  }
};
