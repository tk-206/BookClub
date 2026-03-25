import { useState, useEffect } from 'react'
import './css/DetailPostModal.css'
import clsx from 'clsx'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function DetailPostModal({ isOpen, onClose }: Props) {

    const tags = ['채식주의자', '한강', '한국소설', '독서토론']

    useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose()
        }
    }

    if (isOpen) {
        window.addEventListener('keydown', handleEsc)
    }

    return () => {
        window.removeEventListener('keydown', handleEsc)
    }
    }, [isOpen, onClose])

  return (
    <div className={clsx('modal-overlay', {open: isOpen})} onClick={onClose}>
      <div className={clsx('detail-modal', {open: isOpen})} onClick={(e) => e.stopPropagation()}>
        
        <section className='detail-header'>
            <button className='detail-close' onClick={() => onClose()}>✕</button>
            <div className='detail-cats'>
                <div className='post-category 독서'>독서 토론</div>
            </div>
            <div className='detail-title'>『채식주의자』를 다시 읽으며 — 폭력의 언어와 침묵의 몸</div>
            <div className='detail-stats'>
                <div className='detail-poster'>
                    <div className='detail-avatar'>박</div>
                    <span className='detail-author'>박소담</span>
                </div>
                <span>·</span>
                <span>2025.03.17 · 1시간 전</span>
                <span>·</span>
                <span>👁 241</span>
            </div>
        </section>

        <section className='detail-body'>
            <div className='detail-content'>
                처음 이 소설을 읽은 건 대학교 1학년 때였습니다. 그때는 영혜의 선택이 그저 기이하고 불가해한 것으로 느껴졌어요.
                <br/>
                <br/>
                그런데 노벨상 수상 이후 다시 펼쳤을 때는 전혀 다른 책이었습니다. 이제는 영혜의 침묵이 얼마나 정확하게 언어화된 저항인지가 보였어요. 말로 하면 무시당하고, 울면 히스테리라 불리고, 떠나면 가정을 버렸다 비난받는 세계에서, 몸으로 말하는 것만이 유일하게 가능한 발화였던 것은 아니었을까요.
                <br/>
                <br/>
                특히 2부 '몽고반점'에서 형부의 시선이 얼마나 폭력적인 예술적 착취인지를 이번에야 제대로 읽었습니다. 그는 영혜를 사랑한 것이 아니라, 영혜의 특이함을 소비한 것이었죠.
            </div>
            <div className='detail-tags'>
                {tags.map((t) => (
                    <div className='detail-tag'>#{t}</div>
                ))}
            </div>
            <div className='detail-reactions'>
                <button className='reaction-btn liked'>❤️ 좋아요 38</button>
                <button className='reaction-btn'>🔖 저장 12</button>
                <button className='reaction-btn'>↗️ 공유</button>
            </div>
            <div className='comments-label'>댓글 12개</div>
            <div className='comment-item'>
                <div className='comment-av a'>김</div>
                <div className='comment-bubble'>
                    <div className='comment-author'>김하늘</div>
                    <div className='comment-text'>2부에서 형부의 시선에 대한 분석이 정말 인상적이에요. 저도 이번에 다시 읽으면서 '예술'이라는 이름 아래 이뤄지는 착취의 구조가 선명하게 보였어요.</div>
                    <div className='comment-footer'>
                        <span className='comment-date'>30분 전</span>
                        <button className='comment-action'>❤️ 5</button>
                        <button className='comment-action'>↩ 답글</button>
                    </div>
                </div>
            </div>
            <div className='comment-item mine'>
                <div className='comment-av b'>박</div>
                <div className='comment-bubble'>
                    <div className='comment-author'>박소담 <span>작성자</span></div>
                    <div className='comment-text'>맞아요. 그래서 3부에서 인혜의 시선이 더 아프게 읽혀요. 영혜를 구하려 하지만, '정상적인 삶'의 논리를 놓지 못하는 모순 속에 있잖아요.</div>
                    <div className='comment-footer'>
                        <span className='comment-date'>22분 전</span>
                        <button className='comment-action'>❤️ 3</button>
                        <button className='comment-action'>↩ 답글</button>
                    </div>
                </div>
            </div>
            <div className='comment-item'>
                <div className='comment-av s'>?</div>
                <div className='secret-bubble'>🔒 비밀 댓글입니다. 작성자만 볼 수 있어요.</div>
            </div>
            <div className='comment-input-area'>
                <textarea className='comment-textarea' placeholder='댓글을 남겨보세요...'></textarea>
            </div>
            <div className='comment-options'>
                <label className='secret-check'><input type='checkbox'/> 🔒 비밀 댓글 </label>
                <button className='btn-comment'>등록</button>
            </div>
        </section>
      </div>
    </div>
  )
}