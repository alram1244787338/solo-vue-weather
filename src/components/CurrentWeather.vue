<script setup>
defineProps({
  temperature: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  windSpeed: {
    type: Number,
    required: true
  },
  feelsLike: {
    type: Number,
    default: null
  }
})
</script>

<template>
  <div class="current-weather-card">
    <div class="weather-main">
      <div class="temperature">
        <span class="temp-value">{{ temperature }}</span>
        <span class="temp-unit">°C</span>
      </div>
      <div class="weather-desc">{{ description }}</div>
    </div>
    <div class="weather-details">
      <div class="detail-item">
        <div class="detail-label">湿度</div>
        <div class="detail-value">{{ humidity }}%</div>
      </div>
      <div class="detail-item">
        <div class="detail-label">风速</div>
        <div class="detail-value">{{ windSpeed }} km/h</div>
      </div>
      <div class="detail-item" v-if="feelsLike !== null">
        <div class="detail-label">体感温度</div>
        <div class="detail-value">{{ feelsLike }}°C</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.current-weather-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px 48px;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.weather-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.temperature {
  display: flex;
  align-items: flex-start;
  line-height: 1;
}

.temp-value {
  font-size: 96px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -2px;
}

.temp-unit {
  font-size: 32px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-top: 12px;
}

.weather-desc {
  font-size: 24px;
  font-weight: 500;
  color: var(--accent-sky);
}

.weather-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
}

.detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.detail-label {
  font-size: 14px;
  color: var(--text-muted);
  font-weight: 500;
}

.detail-value {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
}
</style>
