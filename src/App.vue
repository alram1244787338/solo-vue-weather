<script setup>
import { ref, onMounted } from 'vue'
import CurrentWeather from './components/CurrentWeather.vue'
import ForecastCard from './components/ForecastCard.vue'
import { getCurrentWeather, getForecast, getWeatherDescription } from './api/weather.js'
import { formatDate, getDayName } from './utils/date.js'

const BEIJING = { latitude: 39.9042, longitude: 116.4074, name: '北京' }

const cityName = BEIJING.name
const loading = ref(true)
const error = ref(null)
const currentWeather = ref(null)
const forecastList = ref([])

async function loadWeatherData() {
  loading.value = true
  error.value = null
  try {
    const [currentData, forecastData] = await Promise.all([
      getCurrentWeather(BEIJING.latitude, BEIJING.longitude),
      getForecast(BEIJING.latitude, BEIJING.longitude, 7)
    ])

    currentWeather.value = {
      temperature: Math.round(currentData.current.temperature_2m),
      description: getWeatherDescription(currentData.current.weather_code),
      humidity: currentData.current.relative_humidity_2m,
      windSpeed: Math.round(currentData.current.wind_speed_10m),
      feelsLike: Math.round(currentData.current.apparent_temperature)
    }

    const daily = forecastData.daily
    forecastList.value = daily.time.map((dateStr, index) => ({
      date: formatDate(dateStr),
      dayName: getDayName(dateStr),
      weatherCode: daily.weather_code[index],
      description: getWeatherDescription(daily.weather_code[index]),
      tempMax: Math.round(daily.temperature_2m_max[index]),
      tempMin: Math.round(daily.temperature_2m_min[index])
    }))
  } catch (err) {
    error.value = '获取天气数据失败，请稍后重试'
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadWeatherData()
})
</script>

<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1 class="city-title">{{ cityName }}</h1>
      <p class="dashboard-subtitle">天气仪表盘</p>
    </header>

    <main class="dashboard-main">
      <div v-if="loading" class="state-message">
        <p>加载中...</p>
      </div>

      <div v-else-if="error" class="state-message error">
        <p>{{ error }}</p>
      </div>

      <template v-else>
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
      </template>
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

.state-message {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 24px;
  font-size: 20px;
  color: var(--text-secondary);
  font-weight: 500;
}

.state-message.error {
  color: var(--accent-warm);
}

.current-section {
  display: flex;
  justify-content: center;
}

.current-section > :deep(.current-weather-card) {
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
