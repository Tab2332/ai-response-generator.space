// API configuration
export const API_CONFIG = {
  ENDPOINT: "https://api.siliconflow.cn/v1/chat/completions",
  MODEL: "Qwen/Qwen3-8B",
  MAX_TOKENS: 512,
  TEMPERATURE: 0.7,
  TOP_P: 0.7,
  TOP_K: 50,
  FREQUENCY_PENALTY: 0.5,
}

// Use the environment variable for the API key
export const API_KEY = process.env.API_KEY

// Log configuration status (but not the actual key)
if (API_KEY) {
  console.log("API_KEY is configured")
} else {
  console.warn("API_KEY environment variable is not defined. API calls will fail.")
}

console.log("API Configuration:", {
  ENDPOINT: API_CONFIG.ENDPOINT,
  MODEL: API_CONFIG.MODEL,
  // Don't log the API key for security reasons
})
