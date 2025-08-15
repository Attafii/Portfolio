'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

interface ContributionGraphProps {
  data?: Array<{
    date: string
    count: number
  }>
}

export function ContributionGraph({ data = [] }: ContributionGraphProps) {
  // Generate mock contribution data for the last 26 weeks if no data provided
  const generateContributionData = () => {
    const weeks = []
    const today = new Date()
    
    for (let weekIndex = 25; weekIndex >= 0; weekIndex--) {
      const weekStart = new Date(today)
      weekStart.setDate(today.getDate() - (weekIndex * 7) - today.getDay())
      
      const week = []
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const date = new Date(weekStart)
        date.setDate(weekStart.getDate() + dayIndex)
        
        // Generate realistic contribution pattern
        const isWeekend = dayIndex === 0 || dayIndex === 6
        const baseContributions = isWeekend ? Math.random() * 3 : Math.random() * 8
        const contributions = Math.floor(baseContributions)
        
        week.push({
          date: date.toISOString().split('T')[0],
          count: contributions,
          day: dayIndex
        })
      }
      weeks.push(week)
    }
    
    return weeks
  }

  const contributionWeeks = generateContributionData()
  
  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-gray-100 dark:bg-gray-800'
    if (count <= 2) return 'bg-blue-200 dark:bg-blue-900/40'
    if (count <= 4) return 'bg-blue-300 dark:bg-blue-700/60'
    if (count <= 6) return 'bg-blue-400 dark:bg-blue-600/80'
    return 'bg-blue-500 dark:bg-blue-500'
  }

  const getContributionIntensity = (count: number) => {
    if (count === 0) return 'No contributions'
    if (count <= 2) return 'Low activity'
    if (count <= 4) return 'Moderate activity'
    if (count <= 6) return 'High activity'
    return 'Very high activity'
  }

  const totalContributions = contributionWeeks
    .flat()
    .reduce((sum, day) => sum + day.count, 0)

  const streakData = contributionWeeks
    .flat()
    .reverse()
    .reduce((acc, day) => {
      if (day.count > 0) {
        acc.current++
      } else if (acc.current > 0) {
        acc.longest = Math.max(acc.longest, acc.current)
        acc.current = 0
      }
      return acc
    }, { current: 0, longest: 0 })

  streakData.longest = Math.max(streakData.longest, streakData.current)

  return (
    <Card className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Contribution Activity
          </h3>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {totalContributions} contributions in the last 26 weeks
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500">
              Current streak: {streakData.current} days • Best: {streakData.longest} days
            </div>
          </div>
        </div>

        {/* Contribution Grid */}
        <div className="flex gap-1 mb-4 overflow-x-auto">
          {contributionWeeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <motion.div
                  key={`${weekIndex}-${dayIndex}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: weekIndex * 0.02 + dayIndex * 0.01 
                  }}
                  className={`w-3 h-3 rounded-sm cursor-help transition-all duration-200 hover:scale-110 ${getContributionColor(day.count)}`}
                  title={`${day.date}: ${day.count} contributions - ${getContributionIntensity(day.count)}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Less</span>
          <div className="flex items-center gap-1">
            {[0, 1, 3, 5, 7].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </CardContent>
    </Card>
  )
}
