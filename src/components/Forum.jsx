import React from 'react'
import ForumIcon from '/forum_icon.png'

function Forum() {
  return (
    <div className='bg-blue-400 h-60 m-auto w-5/6 flex flex-col'>
        <div className='top rounded-xl bg-[#FFA13B] py-3 px-5 w-full flex justify-between items-center'>
            <div className='h-14'><img className='h-full' src={ForumIcon}/></div>
            <div><input type="text" name="" id="" /></div>
            <div><button>Create Post</button></div>

        </div>




        <div></div>
    </div>
  )
}

export default Forum
