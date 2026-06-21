import { describe, it, expect } from './runner.js'
import { getWeatherDescription } from '../src/api/weather.js'

describe('getWeatherDescription', () => {
  it('0 返回晴', () => {
    expect(getWeatherDescription(0)).toBe('晴')
  })

  it('1 返回大部晴朗', () => {
    expect(getWeatherDescription(1)).toBe('大部晴朗')
  })

  it('2 返回局部多云', () => {
    expect(getWeatherDescription(2)).toBe('局部多云')
  })

  it('3 返回阴天', () => {
    expect(getWeatherDescription(3)).toBe('阴天')
  })

  it('45 返回有雾', () => {
    expect(getWeatherDescription(45)).toBe('有雾')
  })

  it('48 返回雾凇', () => {
    expect(getWeatherDescription(48)).toBe('雾凇')
  })

  it('61 返回小雨', () => {
    expect(getWeatherDescription(61)).toBe('小雨')
  })

  it('63 返回中雨', () => {
    expect(getWeatherDescription(63)).toBe('中雨')
  })

  it('65 返回大雨', () => {
    expect(getWeatherDescription(65)).toBe('大雨')
  })

  it('71 返回小雪', () => {
    expect(getWeatherDescription(71)).toBe('小雪')
  })

  it('73 返回中雪', () => {
    expect(getWeatherDescription(73)).toBe('中雪')
  })

  it('75 返回大雪', () => {
    expect(getWeatherDescription(75)).toBe('大雪')
  })

  it('95 返回雷暴', () => {
    expect(getWeatherDescription(95)).toBe('雷暴')
  })

  it('96 返回雷暴伴小冰雹', () => {
    expect(getWeatherDescription(96)).toBe('雷暴伴小冰雹')
  })

  it('99 返回雷暴伴大冰雹', () => {
    expect(getWeatherDescription(99)).toBe('雷暴伴大冰雹')
  })

  it('未知天气码返回未知', () => {
    expect(getWeatherDescription(-1)).toBe('未知')
  })

  it('边界码 100 返回未知', () => {
    expect(getWeatherDescription(100)).toBe('未知')
  })

  it('不传参数返回未知', () => {
    expect(getWeatherDescription()).toBe('未知')
  })
})
