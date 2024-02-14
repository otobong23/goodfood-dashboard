import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


export default function Grid1() {
  const data = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12],
    datasets: [{
      label: 'Last 6 days',
      data: [80, 65, 75, 50, 85, 95, 80, 65, 75, 50, 85, 95],
      backgroundColor: '#5A6ACF',
      borderWidth: 0,
      barPercentage: 0.5,
      categoryPercentage: 0.6
    },
    {
      label: 'Last week',
      data: [40, 80, 25, 75, 65, 45, 45, 80, 25, 75, 65, 40],
      backgroundColor: '#E6E8EC',
      borderWidth: 0,
      barPercentage: 0.5,
      categoryPercentage: 0.6
    }],
    
  }
  const options = {
  // maintainAspectRatio: true,
  responsive: true,
  aspectRatio: () => {
    let screenWidth = window.innerWidth
    return screenWidth >= 768 ? 2.5 : 1.7
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
    <div className='grid1 md:col-span-2'>
      <div className="flex items-start justify-between pb-5 row">
        <div className="div">
          <h5 className='text-[15px] font-normal pb-2'>Revenue</h5>
          <p className='font-medium text-xl pb-[10px]'>IDR 7.852.000</p>
          <p className='text-xs text-[#737B8B] pb-6'><FontAwesomeIcon icon={'fas fa-arrow-up'} className='text-[#149D52] font-semibold' /><span className='text-[#149D52] font-semibold'>2.1%</span> vs last week</p>
          <p className='text-[13px] text-[#737B8B]'>Sales from 1-12 Dec, 2020</p>
        </div>
        <button className='text-[12px] text-[#5A6ACF] p px-4 py-[6px] rounded-[5px] border border-[#DDE4F0] bg-[#FBFCFE]'>Veiw post</button>
      </div>
      <div className="Grid1-chart">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}
