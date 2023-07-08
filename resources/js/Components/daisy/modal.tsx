import React from 'react'

const Modal = ({id, children, title} : {id: string, children : any, title: string}) => {
  return (
    <dialog id={id} className="modal">
        <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">{title}</h3>
            <div>
                {children}
            </div>
        </form>
    </dialog>
  )
}

export default Modal