import { cacheTag, cacheLife } from 'next/cache'

export async function getDemoData() {
    'use cache'
    cacheLife('max')
    cacheTag('demo')
    // Simulate slow data
    await new Promise((resolve) => setTimeout(resolve, 10000))
    return {
        value: Math.random(),
        timestamp: Date.now()
    }
}
