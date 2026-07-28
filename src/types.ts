export type BadgeType = '임찰공고' | '사전규격' | '발주계획' | '개찰결과'

export interface StatCardData {
  id: string
  label: string
  value: string
  total?: string
}

export interface PipelineStage {
  id: string
  label: string
  active: boolean
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
