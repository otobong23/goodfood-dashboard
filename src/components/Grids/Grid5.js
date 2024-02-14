import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function Grid5() {
  const data = {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [{
      label: 'last 6 days',
      data: [30, 20, 60, 54, 30, 90],
      backgroundColor: '#5A6ACF',
      borderColor: '#5A6ACF'
    },
    {
      label: 'last week',
      data: [40, 77, 30, 73, 57, 63],
      backgroundColor: '#E6E8EC',
      borderColor: '#E6E8EC'
    }]
  }
  const options = {
    // maintainAspectRatio: true,
    responsive: true,
    aspectRatio: () => {
      let screenWidth = window.innerWidth
      return screenWidth >= 1280 ? 1.4 : 1.3
    },
      scales: {
        x: {
          grid: {
            drawOnChartArea: false
          }
        },
        y: {
          beginAtZero: true,
          afterTickToLabelConversion: (ctx) => {
            ctx.ticks = []
            ctx.ticks.push({value: 0, label: '0'})
            ctx.ticks.push({value: 25, label: '25'})
            ctx.ticks.push({value: 50, label: '50'})
            ctx.ticks.push({value: 75, label: '75'})
            ctx.ticks.push({value: 100, label: '100'})
          },
          ticks: {
            display: false,
          },
          grid: {
            drawTicks: false,
            drawBorder: false
          },
          border: {
            dash: [6, 6],
            color: '#E2E7E7'
          }
        }
      },
      plugins: {
        legend:{
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true,
            boxHeight: 7,
            padding: 24,
            font: {
              family: ['Poppins', 'sans-serif'],
              size: 12,
              color: '#121212',
              weight: 500
            }
          }
        }
      }
    }
  return (
    <div className='w-full'>
      <div className="flex items-start justify-between pb-5 row">
        <div className="div">
          <h5 className='text-[15px] font-normal pb-2'>Order</h5>
          <p className='font-medium text-xl pb-[10px]'>2.568</p>
          <p className='text-xs text-[#737B8B] pb-6'><FontAwesomeIcon icon={'fas fa-arrow-down'} className='text-[#F2383A] font-semibold' /><span className='text-[#F2383A] font-semibold'>2.1%</span> vs last week</p>
          <p className='text-[13px] text-[#737B8B]'>Sales from 1-6 Dec, 2020</p>
        </div>
        <button className='text-[12px] text-[#5A6ACF] p px-4 py-[6px] rounded-[5px] border border-[#DDE4F0] bg-[#FBFCFE]'>Veiw post</button>
      </div>
      <div className="Grid5-chart">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}
