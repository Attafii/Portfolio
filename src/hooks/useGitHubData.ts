'use client'

import { useState, useEffect } from 'react'

interface GitHubData {
  user: {
    totalRepos: number
    followers: number
    following: number
    totalStars: number
    totalForks: number
    accountAge: number
  }
  repositories: Array<{
    name: string
    description: string
    language: string
    stars: number
    forks: number
    updated: string
    url: string
    createdAt: string
  }>
  languageStats: Array<{
    name: string
    percentage: number
    color: string
  }>
  contributionData: Array<{
    day: string
    contributions: number
  }>
  recentActivity: Array<{
    type: string
    date: string
    repo: string
  }>
}

interface UseGitHubDataReturn {
  data: GitHubData | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useGitHubData(): UseGitHubDataReturn {
  const [data, setData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/github')
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }
      
      const githubData = await response.json()
      setData(githubData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data')
      console.error('GitHub data fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    fetchData()
  }

  return { data, loading, error, refetch }
}

// Fallback data for when API fails
export const fallbackGitHubData: GitHubData = {
  user: {
    totalRepos: 42,
    totalStars: 156,
    totalForks: 23,
    followers: 89,
    following: 34,
    accountAge: 1247
  },
  repositories: [
    {
      name: 'Portfolio-Website',
      description: 'Modern portfolio built with Next.js 15, TypeScript, and Tailwind CSS',
      language: 'TypeScript',
      stars: 12,
      forks: 3,
      updated: '2 days ago',
      url: 'https://github.com/Attafii/Portfolio',
      createdAt: '2024-01-15T00:00:00Z'
    },
    {
      name: 'IoT-Smart-Home',
      description: 'Smart home automation system using ESP32 and Azure IoT Hub',
      language: 'C++',
      stars: 8,
      forks: 2,
      updated: '1 week ago',
      url: '#',
      createdAt: '2023-11-20T00:00:00Z'
    },
    {
      name: 'AI-Chatbot-Assistant',
      description: 'Intelligent chatbot powered by Groq API and fine-tuned models',
      language: 'Python',
      stars: 15,
      forks: 4,
      updated: '3 days ago',
      url: '#',
      createdAt: '2023-12-10T00:00:00Z'
    }
  ],
  languageStats: [
    { name: 'TypeScript', percentage: 35, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', percentage: 28, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Python', percentage: 18, color: 'from-green-500 to-green-600' },
    { name: 'C#', percentage: 12, color: 'from-purple-500 to-purple-600' },
    { name: 'SQL', percentage: 7, color: 'from-teal-400 to-teal-500' }
  ],
  contributionData: [
    { day: 'Mon', contributions: 3 },
    { day: 'Tue', contributions: 7 },
    { day: 'Wed', contributions: 5 },
    { day: 'Thu', contributions: 9 },
    { day: 'Fri', contributions: 12 },
    { day: 'Sat', contributions: 2 },
    { day: 'Sun', contributions: 4 }
  ],
  recentActivity: [
    { type: 'PushEvent', date: '2025-08-15', repo: 'Portfolio' },
    { type: 'CreateEvent', date: '2025-08-14', repo: 'AI-Assistant' },
    { type: 'PullRequestEvent', date: '2025-08-13', repo: 'IoT-Project' }
  ]
}
