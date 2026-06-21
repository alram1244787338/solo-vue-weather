import axios from 'axios'

const BASE_URL = 'https://api.open-meteo.com/v1'

const weatherCodes = {
  0: '晴',
  1: '大部晴朗',
  2: '局部多云',
  3: '阴天',
  45: '有雾',
  48: '雾凇',
  51: '小毛毛雨',
  53: '中毛毛雨',
  55: '大毛毛雨',
  61: '小雨',
  63: '中雨',
  65: '大雨',
  71: '小雪',
  73: '中雪',
  75: '大雪',
  80: '小阵雨',
  81: '中阵雨',
  82: '大阵雨',
  95: '雷暴',
  96: '雷暴伴小冰雹',
  99: '雷暴伴大冰雹'
}

export function getWeatherDescription(code) {
  return weatherCodes[code] || '未知'
}

export async function getCurrentWeather(latitude, longitude) {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        latitude,
        longitude,
        current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m',
        timezone: 'auto'
      }
    })
    return response.data
  } catch (error) {
    console.error('获取当前天气失败:', error)
    throw error
  }
}

export async function getForecast(latitude, longitude, days = 7) {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        latitude,
        longitude,
        daily: 'weather_code,temperature_2m_max,temperature_2m_min',
        timezone: 'auto',
        forecast_days: days
      }
    })
    return response.data
  } catch (error) {
    console.error('获取天气预报失败:', error)
    throw error
  }
}
