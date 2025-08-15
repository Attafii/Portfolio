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
    totalRepos: 47,
    totalStars: 283,
    totalForks: 89,
    followers: 156,
    following: 67,
    accountAge: 1847
  },
  repositories: [
    {
      name: 'Portfolio-Website',
      description: 'Modern portfolio built with Next.js 15, TypeScript, and Tailwind CSS featuring real-time GitHub integration',
      language: 'TypeScript',
      stars: 24,
      forks: 8,
      updated: '2 days ago',
      url: 'https://github.com/Attafii/Portfolio',
      createdAt: '2024-01-15T00:00:00Z'
    },
    {
      name: 'IoT-Smart-Agriculture',
      description: 'Award-winning IoT monitoring system using ESP32, sensors, and Azure IoT Hub for precision farming',
      language: 'C++',
      stars: 42,
      forks: 15,
      updated: '1 week ago',
      url: '#',
      createdAt: '2023-11-20T00:00:00Z'
    },
    {
      name: 'AI-Powered-Chatbot',
      description: 'Intelligent customer service chatbot with NLP, Groq API integration, and multi-language support',
      language: 'Python',
      stars: 38,
      forks: 12,
      updated: '3 days ago',
      url: '#',
      createdAt: '2023-12-10T00:00:00Z'
    },
    {
      name: 'E-Commerce-Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, PostgreSQL, and Stripe payment integration',
      language: 'JavaScript',
      stars: 31,
      forks: 9,
      updated: '5 days ago',
      url: '#',
      createdAt: '2024-02-05T00:00:00Z'
    },
    {
      name: 'Mobile-Fitness-Tracker',
      description: 'Cross-platform mobile app built with React Native, featuring workout tracking and social features',
      language: 'TypeScript',
      stars: 28,
      forks: 7,
      updated: '1 week ago',
      url: '#',
      createdAt: '2024-03-12T00:00:00Z'
    },
    {
      name: 'Automotive-Diagnostic-Tool',
      description: 'Professional OBD-II diagnostic software for automotive technicians with real-time data analysis',
      language: 'C#',
      stars: 35,
      forks: 11,
      updated: '2 weeks ago',
      url: '#',
      createdAt: '2023-09-18T00:00:00Z'
    }
  ],
  languageStats: [
    { name: 'TypeScript', percentage: 32, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', percentage: 28, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Python', percentage: 19, color: 'from-green-500 to-green-600' },
    { name: 'C++', percentage: 12, color: 'from-blue-400 to-blue-500' },
    { name: 'C#', percentage: 9, color: 'from-purple-500 to-purple-600' }
  ],
  contributionData: [
    { day: 'Mon', contributions: 5 },
    { day: 'Tue', contributions: 8 },
    { day: 'Wed', contributions: 6 },
    { day: 'Thu', contributions: 11 },
    { day: 'Fri', contributions: 14 },
    { day: 'Sat', contributions: 4 },
    { day: 'Sun', contributions: 7 }
  ],
  recentActivity: [
    { type: 'PushEvent', date: '2025-08-15', repo: 'Portfolio' },
    { type: 'CreateEvent', date: '2025-08-14', repo: 'AI-Assistant' },
    { type: 'PullRequestEvent', date: '2025-08-13', repo: 'IoT-Project' }
  ]
}
