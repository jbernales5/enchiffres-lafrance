import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

export interface DataSection {
  sectionTitle: string,
  graphsBySubsection: Subsection[]
}

export interface Graph{
  graphTitle: string,
  graph: GraphData,
  options: ChartOptions,
  type: ChartType,
  selectorId: number,
  source: string,
  dataIds?: string[]
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
