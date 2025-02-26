import Swal from "sweetalert2";
import { UpdateStatus__API } from "../API/API__REQUEST";

export const UpdateToDO = (id, status) => {
  return Swal.fire({
    title: "Change Status",
    input: "select",
    inputOptions: {
      New: "New",
      Completed: "Completed",
      Progress: "Progress",
      Canceled: "Canceled",
    },
    inputValue: status,
    customClass: { width: "300px" },
  }).then((result) => {
    return UpdateStatus__API(id, result.value).then(
      (UpdateStatus__API__Result) => {
        return UpdateStatus__API__Result;
      }
    );
  });
};
