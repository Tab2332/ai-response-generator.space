"use server"

import { API_CONFIG, API_KEY } from "@/lib/env"

type ApiResponse = {
  id: string
  object: string
  created: number
  model: string
  choices: {
    index: number
    message: {
      role: string
      content: string
    }
    finish_reason: string
  }[]
}

export async function generateResponse(input: string, tone: string, length: number, problem = ""): Promise<string> {
  try {
    // Check if API key is available
    if (!API_KEY) {
      throw new Error("API key is not configured. Please check your environment variables.")
    }

    // Create a prompt based on the input parameters
    const userPrompt = `
      ${problem ? `The problem I'm trying to solve is: ${problem}.` : "Generate a general response."}
      
      Generate a response to the following statement:
      "${input}"
      
      Use a ${tone} tone.
      The response should be approximately ${length} words long.
      
      Make the response natural, well-structured, and appropriate for the context.
      Address the specific problem mentioned if one was provided.
    `

    const requestBody = {
      model: API_CONFIG.MODEL,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
      stream: false,
      max_tokens: API_CONFIG.MAX_TOKENS,
      temperature: API_CONFIG.TEMPERATURE,
      top_p: API_CONFIG.TOP_P,
      top_k: API_CONFIG.TOP_K,
      frequency_penalty: API_CONFIG.FREQUENCY_PENALTY,
      n: 1,
      response_format: {
        type: "text",
      },
    }

    console.log("Making API request to:", API_CONFIG.ENDPOINT)
    console.log("Request body:", JSON.stringify(requestBody, null, 2))

    const response = await fetch(API_CONFIG.ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })

    // Get the response content type
    const contentType = response.headers.get("content-type") || ""
    console.log("Response status:", response.status)
    console.log("Response content type:", contentType)

    // Clone the response so we can read it multiple times
    const responseClone = response.clone()

    // Log the raw response text for debugging
    const rawResponseText = await responseClone.text()
    console.log("Raw API Response:", rawResponseText)

    // Try to parse as JSON if possible
    let jsonResponse = null
    try {
      jsonResponse = JSON.parse(rawResponseText)
      console.log("Parsed JSON Response:", JSON.stringify(jsonResponse, null, 2))
    } catch (e) {
      console.log("Response is not valid JSON")
    }

    if (!response.ok) {
      // Try to get the error message from the raw response
      let errorMessage = `API request failed with status ${response.status}`

      if (rawResponseText) {
        errorMessage = `${errorMessage}: ${rawResponseText}`
      }

      throw new Error(errorMessage)
    }

    // If we already parsed the JSON successfully, use it
    if (jsonResponse) {
      if (jsonResponse.choices && jsonResponse.choices.length > 0) {
        return jsonResponse.choices[0].message.content
      } else {
        throw new Error("No response content received from API")
      }
    } else {
      // If we couldn't parse as JSON but the request was successful, return the raw text
      if (rawResponseText) {
        return `Note: The API returned a non-standard response. Here's the content:\n\n${rawResponseText}`
      } else {
        throw new Error("API returned an empty response")
      }
    }
  } catch (error) {
    console.error("Error generating response:", error)
    if (error instanceof Error) {
      throw new Error(`API Error: ${error.message}`)
    }
    throw new Error("Failed to generate response. Please try again later.")
  }
}
