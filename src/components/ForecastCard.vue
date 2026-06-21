<script setup>
defineProps({
  date: {
    type: String,
    required: true
  },
  dayName: {
    type: String,
    required: true
  },
  weatherCode: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: true
  },
  tempMax: {
    type: Number,
    required: true
  },
  tempMin: {
    type: Number,
    required: true
  }
})

function getWeatherIcon(code) {
  if (code === 0 || code === 1) return '☀️'
  if (code === 2) return '⛅'
  if (code === 3) return '☁️'
  if (code >= 45 && code <= 48) return '🌫️'
  if (code >= 51 && code <= 55) return '🌧️'
  if (code >= 61 && code <= 65) return '🌧️'
  if (code >= 71 && code <= 75) return '❄️'
  if (code >= 80 && code <= 82) return '🌦️'
  if (code >= 95 && code <= 99) return '⛈️'
  return '🌤️'
}
</script>

<template>
  <div class="forecast-card">
    <div class="forecast-date">
      <div class="day-name">{{ dayName }}</div>
      <div class="date-text">{{ date }}</div>
    </div>
    <div class="forecast-weather">
      <div class="weather-icon">{{ getWeatherIcon(weatherCode) }}</div>
      <div class="weather-desc">{{ description }}</div>
    </div>
    <div class="forecast-temp">
      <span class="temp-max">{{ tempMax }}°</span>
      <span class="temp-divider">/</span>
      <span class="temp-min">{{ tempMin }}°</span>
    </div>
  </div>
</template>

<style scoped>
.forecast-card {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  flex: 1;
  min-width: 0;
}

.forecast-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.forecast-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.day-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.date-text {
  font-size: 13px;
  color: var(--text-muted);
}

.forecast-weather {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.weather-icon {
  font-size: 40px;
  line-height: 1;
}

.weather-desc {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 500;
  text-align: center;
}

.forecast-temp {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 600;
}

.temp-max {
  color: var(--text-primary);
}

.temp-divider {
  color: var(--text-muted);
  font-weight: 400;
}

.temp-min {
  color: var(--text-muted);
}
</style>
