import React from 'react'

function ConfirmationModel({id,confirmStatus, setConfirm,confirm,type,CancelStatus,cancelId}) {

  console.log(type);
  const modalContent = () => {
  switch (type) {
    case "dlt":
      return {
        title: "Delete Menu Item",
        subtitle: "Please confirm before deleting this menu item.",
        message: "Are you sure you want to delete this menu item?",
        warning: "This action cannot be undone."
      };

    case "confirm":
      return {
        title: "Confirm Reservation",
        subtitle: "Please verify before proceeding.",
        message: "Are you sure you want to confirm this reservation?",
        warning: "This action cannot be undone."
      };

    case "cancel":
      return {
        title: "Cancel Reservation",
        subtitle: "Please verify before proceeding.",
        message: "Are you sure you want to cancel this reservation?",
        warning: "This action cannot be undone."
      };

    default:
      return {
        title: "",
        subtitle: "",
        message: "",
        warning: "",
        buttonText: "",
        buttonColor: ""
      };
  }
};

const content = modalContent();

  return (
    <>
    {/* Confirmation Modal */}
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

  <div className="w-[90%] max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

    {/* Header */}
    <div className="flex items-center gap-3 border-b px-6 py-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full">
        <span className="text-2xl">⚠️</span>
      </div>

      <div>
        <h2 className={`text-xl font-bold text-gray-800`}>
            {content.title}
        </h2>
        <p className="text-sm text-gray-500">
         {content.subtitle}
        </p>
      </div>
    </div>

    {/* Body */}
    <div className="px-6 py-6">
      <p className="text-gray-600 leading-7">
         {content.message}
        <span className={`font-semibold text-orange-600`}>
           {/* {content.warning} */}
        </span>
        ?
      </p>

      <p className="mt-3 text-sm text-red-500">
        {content.warning}
      </p>
    </div>

    {/* Footer */}
    <div className="flex justify-end gap-3 border-t bg-gray-50 px-6 py-4">

      <button
        className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100 cursor-pointer"
        onClick={()=> setConfirm(!confirm)}
      >
        Cancel
      </button>

      {type === "confirm" ?<button
        className="rounded-lg bg-orange-500 px-5 py-2.5 font-medium text-white transition hover:bg-orange-600 cursor-pointer"
      onClick={()=>{confirmStatus(id)
         setConfirm(!confirm)
      }}
     >
        Confirm
      </button>
        :
      <button
        className="rounded-lg bg-orange-500 px-5 py-2.5 font-medium text-white transition hover:bg-orange-600 cursor-pointer"
      onClick={()=>{CancelStatus(cancelId)
         setConfirm(!confirm)
      }}
     >
        Confirm
      </button>}

    </div>

  </div>

</div>
    </>
  )
}

export default ConfirmationModel