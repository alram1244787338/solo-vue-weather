<script setup>
import CurrentWeather from './components/CurrentWeather.vue'
import ForecastCard from './components/ForecastCard.vue'

const cityName = '北京'

const currentWeather = {
  temperature: 26,
  description: '晴',
  humidity: 45,
  windSpeed: 12,
  feelsLike: 28
}

const forecastList = [
  {
    date: '6/22',
    dayName: '周日',
    weatherCode: 0,
    description: '晴',
    tempMax: 30,
    tempMin: 20
  },
  {
    date: '6/23',
    dayName: '周一',
    weatherCode: 2,
    description: '局部多云',
    tempMax: 29,
    tempMin: 19
  },
  {
    date: '6/24',
    dayName: '周二',
    weatherCode: 3,
    description: '阴天',
    tempMax: 27,
    tempMin: 18
  },
  {
    date: '6/25',
    dayName: '周三',
    weatherCode: 61,
    description: '小雨',
    tempMax: 25,
    tempMin: 17
  },
  {
    date: '6/26',
    dayName: '周四',
    weatherCode: 63,
    description: '中雨',
    tempMax: 23,
    tempMin: 16
  },
  {
    date: '6/27',
    dayName: '周五',
    weatherCode: 1,
    description: '大部晴朗',
    tempMax: 28,
    tempMin: 18
  },
  {
    date: '6/28',
    dayName: '周六',
    weatherCode: 0,
    description: '晴',
    tempMax: 31,
    tempMin: 21
  }
]
</script>

<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1 class="city-title">{{ cityName }}</h1>
      <p class="dashboard-subtitle">天气仪表盘</p>
    </header>

    <main class="dashboard-main">
      <section class="current-section">
        <CurrentWeather
          :temperature="currentWeather.temperature"
          :description="currentWeather.description"
          :humidity="currentWeather.humidity"
          :wind-speed="currentWeather.windSpeed"
          :feels-like="currentWeather.feelsLike"
        />
      </section>

      <section class="forecast-section">
        <h2 class="section-title">未来 7 天预报</h2>
        <div class="forecast-list">
          <ForecastCard
            v-for="(item, index) in forecastList"
            :key="index"
            :date="item.date"
            :day-name="item.dayName"
            :weather-code="item.weatherCode"
            :description="item.description"
            :temp-max="item.tempMax"
            :temp-min="item.tempMin"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.dashboard {
  min-height: 100vh;
  width: 100%;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 48px;
}

.city-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: -1px;
}

.dashboard-subtitle {
  font-size: 16px;
  color: var(--text-muted);
  margin-top: 8px;
  font-weight: 500;
}

.dashboard-main {
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.current-section {
  display: flex;
  justify-content: center;
}

.current-section > :deep(div) {
  width: 100%;
  max-width: 560px;
}

.forecast-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-title {
  font-size: 22px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  padding-left: 4px;
}

.forecast-list {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 4px;
}

.forecast-list::-webkit-scrollbar {
  height: 6px;
}

.forecast-list::-webkit-scrollbar-track {
  background: transparent;
}

.forecast-list::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}
</style>
