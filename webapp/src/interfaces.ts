import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

export interface DataSection {
  sectionTitle: string,
  graphsBySubsection: Subsection[]
  graphs?: Graph[]
}

export interface Graph{
  graphTitle: string,
  graph: GraphData,
  options: ChartOptions,
  type: ChartType,
  selectorId: number,
  dataIds: string[],
  source: string
}

export interface GraphData {
  graphData: ChartDataset[],
  graphLabels: string[]
}

export interface AnnotationLabel {
  annotationValue?: string,
  annotationContent?: string
}

export interface Subsection {
  subsectionTitle: string,
  selectorValue: number,
  graphs: Graph[]
}
