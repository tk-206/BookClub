import { describe, it, expect } from 'vitest'
import { formatTimeAgo } from './date'

describe('formatTimeAgo', () => {

  it('1분 전 표시', () => {

    const now = new Date()

    const oneMinuteAgo = new Date(
      now.getTime() - 60 * 1000
    ).toISOString()

    expect(
      formatTimeAgo(oneMinuteAgo)
    ).toContain('분')
  })

})