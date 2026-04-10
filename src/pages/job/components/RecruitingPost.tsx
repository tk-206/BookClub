import { useState, useEffect } from 'react'
import '../Recruiting.css'
import clsx from 'clsx'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function RecruitingPost({ isOpen, onClose }: Props) {

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
        
        <div className='jm-header'>
            <button className='jm-close' onClick={onClose}>✕</button>
            <div className='jm-pub'>
                <div className='jm-logo' style={{background:"linear-gradient(135deg,#1A2744,#243461)"}}>📚</div>
                <div className='jm-pub-name'>민음사</div>
            </div>
            <div className='jm-title'>문학 편집자 (소설·에세이 분야)</div>
            <div className='jm-meta'>
                <div className='jm-meta-item'>💼 정규직</div>
                <div className='jm-meta-item'>📍 서울 강남구</div>
                <div className='jm-meta-item'>⏰ 경력 2년 이상</div>
                <div className='jm-meta-item' style={{color:'var(--rose)'}}>🗓 D-12 (4월 1일 마감)</div>
            </div>
        </div>
        <div className='jm-body'>
            업무 내용 <br/>
            - 소설·에세이 원고 기획 및 편집 전반 <br/>
            - 작가 원고 검토, 피드백 및 소통 <br/>
            - 교정·교열 진행 및 관리 <br/>
            - 신인 작가 발굴 및 관계 구축 <br/>
            - 출간 일정 관리 및 관련 부서 협업 <br/><br/>
            자격 요건 <br/>
            - 출판사 편집 경력 2년 이상 <br/>
            - 문학(소설·에세이)에 대한 깊은 이해와 열정 <br/>
            - 원활한 커뮤니케이션 능력 및 꼼꼼한 성격 <br/>
            - 한글 맞춤법 및 표준어 규정 숙지 <br/><br/>
            우대 사항 <br/>
            - 문예창작·국문학 관련 전공자 <br/>
            - 외국어(영어·일본어·중국어) 능통자 <br/>
            - 독립출판 또는 문학잡지 편집 경험자 <br/><br/>
            근무 조건 <br/>
            - 고용형태 : 정규직 <br/>
            - 근무지 : 서울 강남구 (재택 혼합 가능) <br/>
            - 급여 : 면접 후 결정 (경력 반영) <br/>
            - 복리후생 : 4대보험, 도서구입비 지원, 유연근무제 <br/>
        </div>
        <div className='jm-footer'>
            <button className="btn-save-job">🔖 저장</button>
            <button className="btn-apply">지원하기</button>
        </div>
      </div>
    </div>
  )
}