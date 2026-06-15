import { renderHook, act } from '@testing-library/react'
import { expect, test } from 'vitest'
import useCommunityFilter from './useCommunityFilter'
import type { Post } from '../../../types'

test('공지 필터 적용', () => {
  const posts = [
    createMockPost({
      id: '1',
      category: '공지',
    }),
    createMockPost({
      id: '2',
      category: '자유',
    }),
  ]

  const { result } = renderHook(() =>
    useCommunityFilter(posts)
  )

  act(() => {
    result.current.setMenu('공지')
  })

  expect(
    result.current.filteredPosts
  ).toHaveLength(1)
})

function createMockPost(
  overrides: Partial<Post> = {}
): Post {
  return {
    id: '1',
    category: '자유',
    title: '제목',
    content: '내용',
    author: '작성자',
    profileImage: '👤',
    createAt: new Date().toISOString(),
    isSecret: false,
    userId: '1',
    stats: {
      likeCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
    likeUserIds: [],
    ...overrides,
  }
}