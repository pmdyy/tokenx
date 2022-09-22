import React, { useMemo, useCallback } from 'react'
import Box from '@mui/material/Box'
import appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock'
import { AreaClosed, Line, Bar } from '@visx/shape'
import { localPoint } from '@visx/event'
import { AxisLeft } from '@visx/axis'
import { GridRows, GridColumns } from '@visx/grid'
import { Group } from '@visx/group'
import { LegendThreshold, LegendOrdinal, LegendItem, LegendLabel } from '@visx/legend'
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip'
import { max, min, extent, bisector } from 'd3-array'
import { scaleTime, scaleThreshold, scaleLinear, scaleOrdinal } from '@visx/scale'
import { timeFormat } from 'd3-time-format'
import { withTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip'
import withWidthProvider, { IWithWidthProviderProps } from 'components/withWidthProvider'

type TooltipData = AppleStock

// util
const formatDate = timeFormat('%b %d, %Y')

// accessors
const getDate = (d: AppleStock) => new Date(d.date)
const getStockValue = (d: AppleStock) => d.close
const bisectDate = bisector<AppleStock, Date>((d) => new Date(d.date)).left

export type Datum = {
  date: Date
  close: number
}

export type DataProps = {
  data: Datum[]
}

export type AreaProps = {
  margin?: { top: number; right: number; bottom: number; left: number }
}

const stockList: any[] = [appleStock, appleStock.slice(800)]

const ordinalColorScale = scaleOrdinal({
  domain: ['CryptoPunks', 'Bored Ape Yatch Club', 'Pokemon'],
  range: ['#4899f1', '#66d981', '#71f5ef', '#7d81f6'],
})

export default withWidthProvider(
  withTooltip<AreaProps, TooltipData>(
    ({
      width,
      height,
      margin = { top: 0, right: 0, bottom: -1, left: -1 },
      showTooltip,
      hideTooltip,
      tooltipData,
      tooltipTop = 0,
      tooltipLeft = 0,
    }: IWithWidthProviderProps & AreaProps & WithTooltipProvidedProps<TooltipData>) => {
      const [hovered, setHovered] = React.useState(null)
      // bounds
      const innerWidth = width - margin.left - margin.right
      const innerHeight = height - margin.top - margin.bottom
      // data combined
      const dataConcat = [].concat.apply([], stockList)
      // scales
      const xScale = useMemo(
        () =>
          scaleTime({
            range: [margin.left, innerWidth],
            domain: extent(dataConcat, getDate) as [Date, Date],
          }),
        [innerWidth, margin.left]
      )
      const yScale = useMemo(
        () =>
          scaleLinear({
            range: [innerHeight + margin.top, margin.top],
            domain: [min(dataConcat, getStockValue), max(dataConcat, getStockValue) || 0],
            nice: true,
          }),
        [margin.top, innerHeight]
      )
      const handleTooltip = useCallback(
        (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
          const { x } = localPoint(event) || { x: 0 }
          const x0 = xScale.invert(x)
          console.log(x0)
          const index = bisectDate(stockList[0], x0, 1)
          const d0 = stockList[0][index - 1]
          // const d1 = stock[index];
          let d = d0
          // if (d1 && getDate(d1)) {
          //   d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;
          // }
          showTooltip({
            tooltipData: d,
            tooltipLeft: x,
            tooltipTop: yScale(getStockValue(d)),
          })
        },
        [showTooltip, yScale, xScale]
      )
      return (
        <>
          <Box sx={{ display: 'flex', position: 'absolute', gap: '1rem', top: 60, left: 15 }}>
            <LegendOrdinal
              scale={ordinalColorScale}
              labelFormat={(label) => `${label.charAt(0).toUpperCase() + label.slice(1)}`}
            >
              {(labels) => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {labels.map((label, i) => (
                    <LegendItem
                      key={`legend-quantile-${i}`}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <svg width={14} height={14}>
                        <circle fill={label.value} cx={7} cy={7} r={7} />
                      </svg>
                      <LegendLabel align="left" style={{ fontSize: '12px', margin: '0 0 0 0.5rem' }}>
                        {label.text}
                      </LegendLabel>
                    </LegendItem>
                  ))}
                </div>
              )}
            </LegendOrdinal>
          </Box>
          <svg width={width} height={height}>
            <rect x={0} y={0} width={width} height={height} fill={'transparent'} rx={14} />
            {/* <AxisLeft 
            scale={yScale}
            left={0}
            numTicks={5}
            orientation={'right'} 
            tickStroke='lightslategray'
            strokeWidth={1}
            hideAxisLine
          /> */}
            <GridColumns
              scale={xScale}
              width={width}
              height={height}
              numTicks={20}
              stroke="rgb(119 136 153 / 20%)"
              strokeDasharray="1,5"
            />
            <GridRows
              scale={yScale}
              width={width}
              height={height}
              numTicks={10}
              stroke="rgb(119 136 153 / 20%)"
              strokeDasharray="1,5"
            />
            {stockList.map((stock, i) => (
              <AreaClosed
                key={i}
                data={stock}
                x={(d: AppleStock) => xScale(getDate(d)) ?? 0}
                y={(d: AppleStock) => yScale(getStockValue(d)) ?? 0}
                yScale={yScale}
                strokeWidth={hovered != null ? (hovered === i ? 2 : 0) : 2}
                stroke={ordinalColorScale.range()[i]}
                fill={ordinalColorScale.range()[i]}
                fillOpacity={hovered != null ? (hovered === i ? 0.5 : 0.1) : 0.25}
              />
            ))}
            <Bar
              x={margin.left}
              y={margin.top}
              width={innerWidth}
              height={innerHeight}
              fill="transparent"
              rx={14}
              onTouchStart={handleTooltip}
              onTouchMove={handleTooltip}
              onMouseMove={handleTooltip}
              onMouseLeave={() => hideTooltip()}
            />
            {tooltipData && (
              <g>
                <Line
                  from={{ x: tooltipLeft, y: margin.top }}
                  to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                  stroke={'lightslategray'}
                  strokeWidth={1}
                  pointerEvents="none"
                  strokeDasharray="1,3"
                />
                <circle
                  cx={tooltipLeft}
                  cy={tooltipTop + 1}
                  r={4}
                  fill="black"
                  fillOpacity={0.1}
                  stroke="black"
                  strokeOpacity={0.1}
                  strokeWidth={2}
                  pointerEvents="none"
                />
                <circle
                  cx={tooltipLeft}
                  cy={tooltipTop}
                  r={5}
                  fill={'#4899f1'}
                  stroke="white"
                  strokeWidth={2}
                  pointerEvents="none"
                />
              </g>
            )}
          </svg>
          {tooltipData && (
            <div>
              <TooltipWithBounds
                key={Math.random()}
                top={tooltipTop - 24}
                left={tooltipLeft + 0}
                offsetLeft={20}
                offsetTop={-20}
                style={{
                  ...defaultStyles,
                  backgroundColor: 'rgb(11 29 50 / 85%)',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid lightslategray',
                  fontSize: 12,
                  color: 'white',
                  gap: '0.5rem',
                  padding: '0.5rem',
                  zIndex: 20,
                }}
              >
                <div>{`${formatDate(getDate(tooltipData))}`}</div>
                <div style={{ color: 'gray' }}>
                  <span style={{ marginRight: '10px' }}>CryptoPunks</span>
                  <span style={{ color: '#4899f1', fontWeight: 'bold' }}>{`${getStockValue(tooltipData)}`}</span>
                </div>
                <div style={{ color: 'gray' }}>
                  <span style={{ marginRight: '10px' }}>Bored Ape Yatch Club</span>
                  <span style={{ color: '#66d981', fontWeight: 'bold' }}>{`${getStockValue(tooltipData)}`}</span>
                </div>
              </TooltipWithBounds>
            </div>
          )}
        </>
      )
    }
  )
)
