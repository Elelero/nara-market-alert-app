/**********************************************
 * @description: Home 디렉터리에서 사용하는 Data
 * <cf. 수치(Number) 데이터는 제거할 예정>
 **********************************************/

import type { AlertItem, DDayItem, DonutSlice, PipelineStage, ProjectItem, StatCardData } from '../types/types'

export const pipelineStages: PipelineStage[] = [
  { id: 'plan', label: '발주계획', active: true },
  { id: 'preview', label: '사전규격', active: true },
  { id: 'notice', label: '입찰공고', active: true },
  { id: 'proposal', label: '제안/평가', active: false },
  { id: 'result', label: '개찰공고', active: false },
]

export const statCards: StatCardData[] = [
  { id: 'interest', label: '관심 사업', value: 12, total: 20 },
  { id: 'unread', label: '읽지 않은 알림', value: 12, total: 20 },
  { id: 'deadline', label: '마감 임박', value: 3, total: 20},
  { id: 'today', label: '오늘 등록 키워드', value: 8, total: 20},
]

export const recentAlerts: AlertItem[] = [
  { id: '1', badge: '입찰공고', title: '"청년 고용 올케어 플랫폼 사업"이 입찰공고로 전환됨', timeAgo: '3분전', dday: 'D-7' },
  { id: '2', badge: '사전규격', title: '"청년 고용 올케어 플랫폼 사업" 마감임박!', timeAgo: '30분전', dday: 'D-0' },
  { id: '3', badge: '발주계획', title: '"중장년내일센터 사업" 내용이 정정됨', timeAgo: '40분전', dday: 'D-7' },
  { id: '4', badge: '발주계획', title: '"중장년내일센터 사업"이 발주계획에 등록됨', timeAgo: '1시간전', dday: 'D-7' },
  { id: '5', badge: '개찰결과', title: '"일모아시스템 사업" 개찰 결과가 등록됨', timeAgo: '2시간전', dday: '' },
]

export const hotProjects: ProjectItem[] = [
  { id: '1', title: '청년 고용 올케어 플랫폼 사업' },
  { id: '2', title: '공공 AI 인사시스템 고도화' },
  { id: '3', title: '일모아시스템 사업' },
  { id: '4', title: '중장년내일센터 사업' },
]

export const recentViewed: ProjectItem[] = [
  { id: '1', title: '청년 고용 올케어 플랫폼 사업', org: '한국고용정보원', meta: '오늘 09:25' },
  { id: '2', title: '직업훈련 AI 시스템 사업', org: '한국기술대학교', meta: '어제' },
  { id: '3', title: '일모아시스템 사업', org: '한국고용정보원', meta: '1주일전' },
  { id: '4', title: '중장년내일센터 사업', org: '한국고용정보원', meta: '방금' },
]

export const ddayList: DDayItem[] = [
  { id: '1', ddayLabel: 'D-2', title: '직업훈련 AI 시스템 사업' },
  { id: '2', ddayLabel: 'D-7', title: '청년 고용 올케어 플랫폼 사업' },
]

export const donutSlices: DonutSlice[] = [
  { id: '1', label: '입찰공고', value: 40, color: '#22d3ee' },
  { id: '2', label: '사전규격', value: 20, color: '#facc15' },
  { id: '3', label: '발주계획', value: 20, color: '#c084fc' },
  { id: '4', label: '개찰결과', value: 20, color: '#f472b6' },
]
