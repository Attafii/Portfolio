import { NextResponse } from 'next/server'

const GITHUB_USERNAME = 'Attafii' // Your GitHub username
const GITHUB_TOKEN = process.env.GITHUB_TOKEN // Optional: Add to .env.local for higher rate limits

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
  created_at: string
  pushed_at: string
}

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
  created_at: string
}

interface GitHubEvent {
  type: string
  created_at: string
  repo: {
    name: string
    url: string
  }
  payload: any
}

const getHeaders = (): HeadersInit => {
  const baseHeaders: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json'
  }
  
  if (GITHUB_TOKEN) {
    return {
      ...baseHeaders,
      'Authorization': `token ${GITHUB_TOKEN}`
    }
  }
  
  return baseHeaders
}

async function fetchGitHubData() {
  try {
    const headers = getHeaders()
    
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { 
      headers,
      next: { revalidate: 3600 } // Cache for 1 hour
    })
    const userData: GitHubUser = await userResponse.json()

    // Fetch repositories
    const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`, { 
      headers,
      next: { revalidate: 1800 } // Cache for 30 minutes
    })
    const reposData: GitHubRepo[] = await reposResponse.json()

    // Fetch recent activity
    const eventsResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10`, { 
      headers,
      next: { revalidate: 900 } // Cache for 15 minutes
    })
    const eventsData: GitHubEvent[] = await eventsResponse.json()

    // Calculate total stars and forks
    const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0)
    const totalForks = reposData.reduce((sum, repo) => sum + repo.forks_count, 0)

    // Calculate language distribution
    const languages: { [key: string]: number } = {}
    reposData.forEach(repo => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1
      }
    })

    const languageStats = Object.entries(languages)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / reposData.length) * 100),
        color: getLanguageColor(name)
      }))

    // Process recent activity for contribution simulation
    const recentActivity = eventsData
      .filter(event => ['PushEvent', 'CreateEvent', 'PullRequestEvent'].includes(event.type))
      .slice(0, 7)
      .map(event => ({
        type: event.type,
        date: new Date(event.created_at).toLocaleDateString(),
        repo: event.repo.name.split('/')[1] || event.repo.name
      }))

    // Generate contribution data for the last 7 days
    const contributionData = generateContributionData(eventsData)

    return {
      user: {
        totalRepos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        totalStars,
        totalForks,
        accountAge: Math.floor((Date.now() - new Date(userData.created_at).getTime()) / (1000 * 60 * 60 * 24))
      },
      repositories: reposData.slice(0, 6).map(repo => ({
        name: repo.name,
        description: repo.description || 'No description available',
        language: repo.language || 'Unknown',
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updated: formatDate(repo.updated_at),
        url: repo.html_url,
        createdAt: repo.created_at
      })),
      languageStats,
      contributionData,
      recentActivity
    }
  } catch (error) {
    console.error('Error fetching GitHub data:', error)
    return null
  }
}

function getLanguageColor(language: string): string {
  const colors: { [key: string]: string } = {
    'TypeScript': 'from-blue-500 to-blue-600',
    'JavaScript': 'from-yellow-500 to-yellow-600',
    'Python': 'from-green-500 to-green-600',
    'Java': 'from-red-500 to-red-600',
    'C#': 'from-purple-500 to-purple-600',
    'C++': 'from-blue-400 to-blue-500',
    'HTML': 'from-orange-500 to-orange-600',
    'CSS': 'from-blue-400 to-blue-500',
    'PHP': 'from-purple-400 to-purple-500',
    'Go': 'from-cyan-500 to-cyan-600',
    'Rust': 'from-orange-600 to-red-600',
    'Swift': 'from-orange-500 to-red-500',
    'Kotlin': 'from-purple-500 to-pink-500'
  }
  return colors[language] || 'from-gray-500 to-gray-600'
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) return 'yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`
  return `${Math.ceil(diffDays / 365)} years ago`
}

function generateContributionData(events: GitHubEvent[]) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const today = new Date()
  const contributionData = []

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dayName = days[date.getDay()]
    
    // Count events for this day
    const dayEvents = events.filter(event => {
      const eventDate = new Date(event.created_at)
      return eventDate.toDateString() === date.toDateString()
    }).length

    contributionData.push({
      day: dayName,
      contributions: dayEvents || Math.floor(Math.random() * 5) // Fallback with random data
    })
  }

  return contributionData
}

export async function GET() {
  try {
    const data = await fetchGitHubData()
    
    if (!data) {
      return NextResponse.json(
        { error: 'Failed to fetch GitHub data' },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('GitHub API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
