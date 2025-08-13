'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2,
  BookOpen,
  ArrowLeft,
  ExternalLink,
  Code,
  Zap,
  Layers,
  Target,
  Lightbulb,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export default function ReactPatternsArticle() {
  const article = {
    title: "Modern React Patterns: Hooks, Context, and Performance",
    subtitle: "Advanced patterns for building maintainable and performant React applications",
    author: "Ahmed Attafi",
    publishDate: "January 10, 2025",
    readingTime: 12,
    category: "Frontend",
    tags: ["React", "JavaScript", "Performance", "Hooks", "Patterns"],
    views: 2156,
    likes: 134
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50/30 via-teal-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:via-teal-950/20 dark:to-cyan-950/20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/blog">
            <Button variant="ghost" className="text-blue-600 dark:text-blue-400 hover:bg-blue-500/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
              {article.category}
            </Badge>
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-blue-300 dark:border-blue-700">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {article.subtitle}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-blue-200/30 dark:border-blue-700/30">
            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readingTime} min read
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-blue-300 dark:border-blue-700">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-blue-200/30 dark:border-blue-700/30">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg prose-blue dark:prose-invert max-w-none">
                
                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    React has evolved significantly since its introduction, and with it, the patterns and practices for building scalable applications have matured. Modern React development leverages hooks, context, and advanced patterns to create maintainable, performant applications that scale with your team and user base.
                  </p>
                </div>

                {/* React Architecture Visualization */}
                <div className="relative mb-12 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center relative">
                    {/* Component Hierarchy Visualization */}
                    <div className="text-center text-white relative z-10">
                      {/* App Level */}
                      <div className="mb-8">
                        <div className="w-20 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-sm font-bold">App</span>
                        </div>
                        <div className="w-0.5 h-6 bg-white/40 mx-auto"></div>
                      </div>
                      
                      {/* Context Providers Level */}
                      <div className="grid grid-cols-3 gap-6 items-center max-w-4xl mx-auto mb-6">
                        <div className="text-center">
                          <div className="w-16 h-10 bg-white/15 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <span className="text-xs">Auth Context</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-10 bg-white/15 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <span className="text-xs">Theme Context</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-10 bg-white/15 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <span className="text-xs">Data Context</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Components Level */}
                      <div className="grid grid-cols-4 gap-3 max-w-5xl mx-auto">
                        <div className="text-center">
                          <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center mx-auto mb-1">
                            <Zap className="w-4 h-4" />
                          </div>
                          <p className="text-xs">Custom Hooks</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center mx-auto mb-1">
                            <Layers className="w-4 h-4" />
                          </div>
                          <p className="text-xs">Components</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center mx-auto mb-1">
                            <Target className="w-4 h-4" />
                          </div>
                          <p className="text-xs">Memoization</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center mx-auto mb-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-xs">Error Boundaries</p>
                        </div>
                      </div>
                      
                      {/* Performance Indicators */}
                      <div className="mt-6 flex justify-center space-x-6 text-xs">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Optimized</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span>Memoized</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>Reusable</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full"></div>
                      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-white rounded-full"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/20 text-white text-xs px-3 py-1 rounded">
                    Modern React Architecture
                  </div>
                </div>

                {/* Table of Contents */}
                <Card className="mb-8 bg-blue-50/50 dark:bg-blue-950/30 border-blue-200/50 dark:border-blue-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-300">
                      <BookOpen className="w-5 h-5" />
                      What You'll Learn
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#custom-hooks" className="text-blue-600 dark:text-blue-400 hover:underline">1. Custom Hooks for Reusable Logic</a></li>
                      <li><a href="#context-patterns" className="text-blue-600 dark:text-blue-400 hover:underline">2. Advanced Context Patterns</a></li>
                      <li><a href="#performance-optimization" className="text-blue-600 dark:text-blue-400 hover:underline">3. Performance Optimization Techniques</a></li>
                      <li><a href="#error-boundaries" className="text-blue-600 dark:text-blue-400 hover:underline">4. Error Handling and Boundaries</a></li>
                      <li><a href="#testing-patterns" className="text-blue-600 dark:text-blue-400 hover:underline">5. Testing Modern React Components</a></li>
                      <li><a href="#production-tips" className="text-blue-600 dark:text-blue-400 hover:underline">6. Production-Ready Best Practices</a></li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Section 1: Custom Hooks */}
                <section id="custom-hooks" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Code className="w-6 h-6" />
                    1. Custom Hooks for Reusable Logic
                  </h2>
                  
                  <p className="mb-6">
                    Custom hooks are the foundation of modern React patterns. They allow you to extract component logic into reusable functions, making your codebase more maintainable and testable.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">useApi Hook Pattern</h3>
                  
                  <Card className="mb-6 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30 border-blue-200/50 dark:border-blue-700/50">
                    <CardContent className="p-6">
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`// useApi.ts - Reusable API hook
import { useState, useEffect, useCallback } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useApi<T>(url: string, options?: RequestInit) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null
  });

  const fetchData = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const data = await response.json();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error : new Error('Unknown error')
      });
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refetch: fetchData };
}

// Usage in component
function UserProfile({ userId }: { userId: string }) {
  const { data: user, loading, error, refetch } = useApi<User>(\`/api/users/\${userId}\`);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} />;
  if (!user) return <NotFound />;

  return <UserCard user={user} />;
}`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">useLocalStorage Hook</h3>
                  
                  <Card className="mb-6 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border-teal-200/50 dark:border-teal-700/50">
                    <CardContent className="p-6">
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`// useLocalStorage.ts - Persistent state hook
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get from local storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(\`Error setting localStorage key "\${key}":\`, error);
    }
  };

  return [storedValue, setValue] as const;
}

// Usage
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </section>

                {/* Section 2: Context Patterns */}
                <section id="context-patterns" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Layers className="w-6 h-6" />
                    2. Advanced Context Patterns
                  </h2>
                  
                  <p className="mb-6">
                    Context is powerful for sharing state across your component tree, but it needs to be used wisely to avoid performance issues and maintain clean architecture.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Split Context Pattern</h3>
                  
                  <Card className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200/50 dark:border-purple-700/50">
                    <CardContent className="p-6">
                      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        Split your context into separate contexts for state and actions to optimize re-renders.
                      </p>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`// Split context pattern for better performance
interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

interface UserActions {
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

// Separate contexts
const UserStateContext = createContext<UserState | undefined>(undefined);
const UserActionsContext = createContext<UserActions | undefined>(undefined);

// Provider component
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<UserState>({
    user: null,
    loading: false,
    error: null
  });

  const actions: UserActions = useMemo(() => ({
    login: async (credentials) => {
      setState(prev => ({ ...prev, loading: true, error: null }));
      try {
        const user = await authService.login(credentials);
        setState({ user, loading: false, error: null });
      } catch (error) {
        setState(prev => ({ 
          ...prev, 
          loading: false, 
          error: error.message 
        }));
      }
    },
    logout: () => {
      authService.logout();
      setState({ user: null, loading: false, error: null });
    },
    updateProfile: async (data) => {
      // Implementation
    }
  }), []);

  return (
    <UserStateContext.Provider value={state}>
      <UserActionsContext.Provider value={actions}>
        {children}
      </UserActionsContext.Provider>
    </UserStateContext.Provider>
  );
}

// Custom hooks for consuming context
export function useUserState() {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error('useUserState must be used within UserProvider');
  }
  return context;
}

export function useUserActions() {
  const context = useContext(UserActionsContext);
  if (!context) {
    throw new Error('useUserActions must be used within UserProvider');
  }
  return context;
}`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </section>

                {/* Section 3: Performance Optimization */}
                <section id="performance-optimization" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    3. Performance Optimization Techniques
                  </h2>
                  
                  <p className="mb-6">
                    Performance optimization in React involves preventing unnecessary re-renders, optimizing expensive computations, and managing component lifecycle efficiently.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 border-green-200/50 dark:border-green-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          React.memo
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          Prevent re-renders when props haven't changed
                        </p>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs overflow-x-auto">
                          <code>
{`const ExpensiveComponent = React.memo(
  ({ data, onUpdate }) => {
    return <ComplexVisualization data={data} />;
  },
  (prevProps, nextProps) => {
    // Custom comparison
    return prevProps.data.id === nextProps.data.id;
  }
);`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-blue-200/50 dark:border-blue-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                          <Target className="w-5 h-5" />
                          useMemo & useCallback
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          Memoize expensive calculations and functions
                        </p>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs overflow-x-auto">
                          <code>
{`const processedData = useMemo(() => {
  return expensiveDataProcessing(rawData);
}, [rawData]);

const handleClick = useCallback((id: string) => {
  onItemClick(id);
}, [onItemClick]);`}
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Virtual Scrolling Pattern</h3>
                  
                  <Card className="mb-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-orange-200/50 dark:border-orange-700/50">
                    <CardContent className="p-6">
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`// useVirtualScrolling.ts - Custom hook for large lists
import { useState, useEffect, useMemo } from 'react';

interface VirtualScrollOptions {
  itemHeight: number;
  containerHeight: number;
  overscan?: number;
}

export function useVirtualScrolling<T>(
  items: T[],
  options: VirtualScrollOptions
) {
  const [scrollTop, setScrollTop] = useState(0);
  const { itemHeight, containerHeight, overscan = 5 } = options;

  const visibleRange = useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      items.length - 1,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );
    return { startIndex, endIndex };
  }, [scrollTop, itemHeight, containerHeight, overscan, items.length]);

  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.startIndex, visibleRange.endIndex + 1)
      .map((item, index) => ({
        item,
        index: visibleRange.startIndex + index
      }));
  }, [items, visibleRange]);

  const totalHeight = items.length * itemHeight;
  const offsetY = visibleRange.startIndex * itemHeight;

  return {
    visibleItems,
    totalHeight,
    offsetY,
    onScroll: (e: React.UIEvent<HTMLElement>) => {
      setScrollTop(e.currentTarget.scrollTop);
    }
  };
}

// Usage in component
function LargeList({ items }: { items: Item[] }) {
  const { visibleItems, totalHeight, offsetY, onScroll } = useVirtualScrolling(
    items,
    { itemHeight: 50, containerHeight: 400 }
  );

  return (
    <div className="h-96 overflow-auto" onScroll={onScroll}>
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: \`translateY(\${offsetY}px)\` }}>
          {visibleItems.map(({ item, index }) => (
            <div key={index} className="h-12 border-b">
              <ItemComponent item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </section>

                {/* Section 4: Error Boundaries */}
                <section id="error-boundaries" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6" />
                    4. Error Handling and Boundaries
                  </h2>
                  
                  <p className="mb-6">
                    Robust error handling is crucial for production applications. React Error Boundaries provide a way to catch JavaScript errors anywhere in the component tree.
                  </p>

                  <Card className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-200/50 dark:border-red-700/50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3 text-red-700 dark:text-red-300">
                        Enhanced Error Boundary with Hooks
                      </h4>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`// ErrorBoundary.tsx - Modern error boundary implementation
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
    
    // Log to error reporting service
    if (process.env.NODE_ENV === 'production') {
      // errorReportingService.logError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-lg font-semibold text-red-800 mb-2">
            Something went wrong
          </h2>
          <p className="text-red-600 mb-4">
            We're sorry, but something unexpected happened.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for error boundary in functional components
export function useErrorHandler() {
  const [error, setError] = useState<Error | null>(null);

  const resetError = () => setError(null);
  
  const captureError = (error: Error) => {
    setError(error);
  };

  if (error) {
    throw error; // This will be caught by the nearest Error Boundary
  }

  return { captureError, resetError };
}`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </section>

                {/* Section 5: Testing Patterns */}
                <section id="testing-patterns" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">5. Testing Modern React Components</h2>
                  
                  <p className="mb-6">
                    Testing React components with hooks and context requires specific patterns and tools. Here's how to test modern React applications effectively.
                  </p>

                  <Card className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border-green-200/50 dark:border-green-700/50">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">
                        Testing Custom Hooks
                      </h4>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>
{`// useApi.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { useApi } from './useApi';

// Mock fetch
global.fetch = jest.fn();

describe('useApi', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('should fetch data successfully', async () => {
    const mockData = { id: 1, name: 'Test User' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    const { result } = renderHook(() => useApi('/api/users/1'));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  it('should handle errors properly', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => useApi('/api/users/1'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBeTruthy();
    expect(result.current.data).toBe(null);
  });
});`}
                        </code>
                      </pre>
                    </CardContent>
                  </Card>
                </section>

                {/* Section 6: Production Tips */}
                <section id="production-tips" className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">6. Production-Ready Best Practices</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200/50 dark:border-blue-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Code Splitting</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Use React.lazy() for route-level splitting</li>
                          <li>• Implement component-level lazy loading</li>
                          <li>• Optimize bundle sizes with webpack analysis</li>
                          <li>• Use dynamic imports for large libraries</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950/30 dark:to-green-950/30 border-teal-200/50 dark:border-teal-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-teal-700 dark:text-teal-300">State Management</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Keep state as close to where it's used</li>
                          <li>• Use context sparingly for global state</li>
                          <li>• Consider state machines for complex flows</li>
                          <li>• Implement optimistic updates</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200/50 dark:border-purple-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">Accessibility</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Use semantic HTML elements</li>
                          <li>• Implement keyboard navigation</li>
                          <li>• Add ARIA labels and roles</li>
                          <li>• Test with screen readers</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-orange-200/50 dark:border-orange-700/50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">Monitoring</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Implement error tracking</li>
                          <li>• Monitor Core Web Vitals</li>
                          <li>• Track user interactions</li>
                          <li>• Set up performance budgets</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Conclusion */}
                <section className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">Conclusion</h2>
                  
                  <p className="mb-4 text-lg">
                    Modern React development is about more than just writing components. It's about creating maintainable, performant, and accessible applications that scale with your team and user base.
                  </p>
                  
                  <p className="mb-6">
                    By implementing these patterns and best practices, you'll build React applications that are not only functional but also robust, testable, and ready for production. Remember that these patterns should be applied judiciously – not every component needs to be memoized, and not every piece of state needs to be in context.
                  </p>

                  <Card className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 border-blue-300/30 dark:border-blue-700/30">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">
                        Ready to level up your React skills?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Start implementing these patterns in your next React project.
                      </p>
                      <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View React Documentation
                      </Button>
                    </CardContent>
                  </Card>
                </section>

              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Article Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 mb-8"
        >
          <Card className="bg-gradient-to-r from-blue-50/80 to-teal-50/80 dark:from-blue-950/30 dark:to-teal-950/30 border-blue-200/50 dark:border-blue-700/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Enjoyed this deep dive into React patterns?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Share it with your development team and help spread modern React knowledge.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-blue-300 dark:border-blue-700">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                    Follow for More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
