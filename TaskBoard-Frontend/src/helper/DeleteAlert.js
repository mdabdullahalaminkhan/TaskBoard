import Swal from "sweetalert2";
import { Delete__API } from "../API/API__REQUEST";

export const DeleteToDo = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return Delete__API(id).then((Result) => {
        return Result; 
      });
    }
  })
};
