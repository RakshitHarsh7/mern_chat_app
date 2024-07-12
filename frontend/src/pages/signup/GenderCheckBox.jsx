import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex mt-2'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Male</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Female</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox