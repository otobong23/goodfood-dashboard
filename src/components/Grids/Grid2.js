import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

export default function Grid2() {
  const data = {
    labels: ['Afternoon', 'Evening', 'Morning'],
    datasets: [{
      label: '',
      data: [40, 32, 28],
      backgroundColor: ['#5A6ACF', '#8593ED', '#C7CEFF'],
      borderWidth: 0,
      hoverOffset: 20
    }]
  }
  const period = ['1PM - 4PM', '4PM - 12AM', '12AM - 1PM']
  const totalOrders = 4.725
  const options = {
    // maintainAspectRatio: true,
    responsive: true,
    layout: {
      padding: {
        top: 10
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        
        labels: {
          usePointStyle: true,
          boxHeight: 7,
          padding: 20,
          font: {
            family: ['Poppins', 'sans-serif'],
            size: 12,
            color: '#121212',
            weight: 500
          }
        }
      },
      tooltip:{
        yAlign: 'bottom',
        displayColors: false,
        backgroundColor: '#37375C',
        padding: {
          left: 16,
          right: 22,
          top: 16,
          bottom: 16
        },
        titleColor: '#fff',
        titleSpacing: 10,
        bodySpacing: 16,
        titleFont: {
          size: 12,
          family: 'Poppins',
          weight: 400
        },
        bodyFont: {
          size: 16,
          family: 'Poppins',
          weight: 600
        },
        callbacks: {
          afterTitle: (toolTipItem) => {
            let data = period[toolTipItem[0].dataIndex]
            // data.color = 'rgba(255,255,255,.5)'
            return data
          },
          label: (toolTipItem) => {
            const data = (toolTipItem.raw/100) * totalOrders
            return `${data} Orders`
          }
        }
      }
    }
  }
  return (
    <div className='Grid2'>
      <div className="flex items-start justify-between pb-5 row">
        <div className="div">
          <h5 className='text-[15px] font-normal pb-2'>Order Time</h5>
          <p className='text-xs text-[#737B8B] pb-6'>From 1-6 Dec, 2020</p>
        </div>
        <button className='text-[12px] text-[#5A6ACF] p px-4 py-[6px] rounded-[5px] border border-[#DDE4F0] bg-[#FBFCFE]'>Veiw post</button>
      </div>
      <div className="Grid2-chart">
        <Doughnut data={data} options={options} />
      </div>
      <div className='flex justify-center text-[#121212] text-xs percentage max-w-[337px]'>
        <div className='flex-1 pl-[20%] percent1'>40%</div>
        <div className='flex-1 pl-[10%] percent2'>32%</div>
        <div className='flex-1 pl-[7%] percent3'>28%</div>
      </div>
    </div>
  )
}
