import { describe, it, expect } from './runner.js'
import { formatDate, getDayName } from '../src/utils/date.js'
import { getWeatherIcon } from '../src/utils/weather.js'

describe('formatDate', () => {
  it('2024-01-15 返回 1/15', () => {
    expect(formatDate('2024-01-15')).toBe('1/15')
  })

  it('2024-12-31 返回 12/31', () => {
    expect(formatDate('2024-12-31')).toBe('12/31')
  })

  it('2024-06-01 返回 6/1', () => {
    expect(formatDate('2024-06-01')).toBe('6/1')
  })

  it('返回字符串类型', () => {
    expect(formatDate('2024-01-01')).toBeType('string')
  })
})

describe('getDayName', () => {
  it('2024-01-01 返回周一', () => {
    expect(getDayName('2024-01-01')).toBe('周一')
  })

  it('2024-01-07 返回周日', () => {
    expect(getDayName('2024-01-07')).toBe('周日')
  })

  it('2024-06-21 返回周五', () => {
    expect(getDayName('2024-06-21')).toBe('周五')
  })

  it('返回中文星期名称', () => {
    const day = getDayName('2024-06-21')
    expect(['周日', '周一', '周二', '周三', '周四', '周五', '周六'].includes(day)).toBeTruthy()
  })
})

describe('getWeatherIcon', () => {
  it('0 返回太阳 ☀️', () => {
    expect(getWeatherIcon(0)).toBe('☀️')
  })

  it('1 返回太阳 ☀️', () => {
    expect(getWeatherIcon(1)).toBe('☀️')
  })

  it('2 返回多云 ⛅', () => {
    expect(getWeatherIcon(2)).toBe('⛅')
  })

  it('3 返回阴 ☁️', () => {
    expect(getWeatherIcon(3)).toBe('☁️')
  })

  it('45 返回雾 🌫️', () => {
    expect(getWeatherIcon(45)).toBe('🌫️')
  })

  it('48 返回雾 🌫️', () => {
    expect(getWeatherIcon(48)).toBe('🌫️')
  })

  it('51 返回雨 🌧️', () => {
    expect(getWeatherIcon(51)).toBe('🌧️')
  })

  it('55 返回雨 🌧️', () => {
    expect(getWeatherIcon(55)).toBe('🌧️')
  })

  it('61 返回雨 🌧️', () => {
    expect(getWeatherIcon(61)).toBe('🌧️')
  })

  it('65 返回雨 🌧️', () => {
    expect(getWeatherIcon(65)).toBe('🌧️')
  })

  it('71 返回雪 ❄️', () => {
    expect(getWeatherIcon(71)).toBe('❄️')
  })

  it('75 返回雪 ❄️', () => {
    expect(getWeatherIcon(75)).toBe('❄️')
  })

  it('80 返回阵雨 🌦️', () => {
    expect(getWeatherIcon(80)).toBe('🌦️')
  })

  it('82 返回阵雨 🌦️', () => {
    expect(getWeatherIcon(82)).toBe('🌦️')
  })

  it('95 返回雷暴 ⛈️', () => {
    expect(getWeatherIcon(95)).toBe('⛈️')
  })

  it('99 返回雷暴 ⛈️', () => {
    expect(getWeatherIcon(99)).toBe('⛈️')
  })

  it('未知码返回默认 🌤️', () => {
    expect(getWeatherIcon(-1)).toBe('🌤️')
  })

  it('边界码 100 返回默认 🌤️', () => {
    expect(getWeatherIcon(100)).toBe('🌤️')
  })
})
