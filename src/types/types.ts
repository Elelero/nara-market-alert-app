/********************************************
 * @description: TypeScript 타입 일괄 정리
 ********************************************/

export type BadgeType = '입찰공고' | '사전규격' | '발주계획' | '개찰결과'

export interface PipelineStage {
  id: string
  label: string
  active?: boolean
  value: number
}

export interface StatCards {
  id: string
  label: string
  value: number
  total: number
}

export interface AlertItem {
  id: string
  badge: BadgeType
  title: string
  timeAgo: string
  dday: string
}

export interface ProjectItem {
  id: string
  title: string
  org?: string
  meta?: string
}

export interface DDayItem {
  id: string
  ddayLabel: string
  title: string
}

export interface DonutSlice {
  id: string
  label: string
  value: number
  color: string
}
