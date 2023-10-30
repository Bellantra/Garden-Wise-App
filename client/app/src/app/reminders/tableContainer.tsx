import React from 'react'

export default function TableContainer() {
  return (
    
    <table className="w-11/12 m-auto  border-primary border  divide-gray-200">
      <thead className="text-center text-xs   bg-secondary ">
        <tr className='h-12  '>
          <th className='font-light border  border-primary '>Cuidado</th>
          <th className='font-light border border-primary '>Planta</th>
          <th className='font-light border border-primary '>Fecha</th>
          <th className='font-light border border-primary '>Hora</th>
          <th className='font-light border border-primary '>Periodicidad</th>
          <th className='font-light border border-primary '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11 5.00004H6C5.46957 5.00004 4.96086 5.21075 4.58579 5.58583C4.21071 5.9609 4 6.46961 4 7.00004V18C4 18.5305 4.21071 19.0392 4.58579 19.4143C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4143C18.7893 19.0392 19 18.5305 19 18V13M17.586 3.58604C17.7705 3.39502 17.9912 3.24266 18.2352 3.13784C18.4792 3.03302 18.7416 2.97785 19.0072 2.97554C19.2728 2.97323 19.5361 3.02384 19.7819 3.1244C20.0277 3.22496 20.251 3.37346 20.4388 3.56125C20.6266 3.74904 20.7751 3.97234 20.8756 4.21813C20.9762 4.46392 21.0268 4.72728 21.0245 4.99284C21.0222 5.2584 20.967 5.52084 20.8622 5.76485C20.7574 6.00886 20.605 6.22955 20.414 6.41404L11.828 15H9V12.172L17.586 3.58604Z" stroke="#104938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white text-xs text-center border-primary border ">
          <tr >
            <td className='border border-primary p-3'>Carlos</td>
            <td className='border border-primary p-3'>Calero</td>
            <td className='border border-primary p-3'>Carlos</td>
            <td className='border border-primary p-3'>Calero</td>
            <td className='border border-primary p-3'>Calero</td>
            <th className='font-light border border-primary '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11 5.00004H6C5.46957 5.00004 4.96086 5.21075 4.58579 5.58583C4.21071 5.9609 4 6.46961 4 7.00004V18C4 18.5305 4.21071 19.0392 4.58579 19.4143C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4143C18.7893 19.0392 19 18.5305 19 18V13M17.586 3.58604C17.7705 3.39502 17.9912 3.24266 18.2352 3.13784C18.4792 3.03302 18.7416 2.97785 19.0072 2.97554C19.2728 2.97323 19.5361 3.02384 19.7819 3.1244C20.0277 3.22496 20.251 3.37346 20.4388 3.56125C20.6266 3.74904 20.7751 3.97234 20.8756 4.21813C20.9762 4.46392 21.0268 4.72728 21.0245 4.99284C21.0222 5.2584 20.967 5.52084 20.8622 5.76485C20.7574 6.00886 20.605 6.22955 20.414 6.41404L11.828 15H9V12.172L17.586 3.58604Z" stroke="#104938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </th>
          </tr>
      </tbody>
    </table>
  )
}
