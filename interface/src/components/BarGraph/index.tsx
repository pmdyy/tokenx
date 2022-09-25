import React from 'react'
import { Bar } from '@visx/shape'
import { Group } from '@visx/group'
import { GradientTealBlue } from '@visx/gradient'
import { scaleBand, scaleLinear } from '@visx/scale'

function generateRandomData(n) {
  const data = []
  for (let i = 0; i < n; i++) {
    data.push({
      letter: i,
      frequency: Math.random(),
    })
  }
  return data
}

const data = generateRandomData(50)
const verticalMargin = 120

// accessors
const getLetter = (d) => d.letter
const getLetterFrequency = (d) => Number(d.frequency) * 100

export type BarsProps = {
  width: number
  height: number
  events?: boolean
}

export default function Example({ width, height, events = false }: BarsProps) {
  // bounds
  const xMax = width
  const yMax = height - verticalMargin

  // scales, memoize for performance
  const xScale = React.useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getLetter),
        padding: 0.4,
      }),
    [xMax]
  )
  const yScale = React.useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getLetterFrequency))],
      }),
    [yMax]
  )

  return (
    <svg width={width} height={height}>
      <Group top={verticalMargin / 2}>
        {data.map((d) => {
          const letter = getLetter(d)
          const barWidth = xScale.bandwidth()
          const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0)
          const barX = xScale(letter)
          const barY = yMax - barHeight
          return <Bar key={`bar-${letter}`} x={barX} y={barY} width={barWidth} height={barHeight} fill="blue" />
        })}
      </Group>
    </svg>
  )
}
