import toastr from "toastr";

let emailRegx = /\S+@\S+\.\S+/;

let mobileRegx = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;

class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }
  IsMobile(value) {
    return !mobileRegx.test(value);
  }
  IsEmail(value) {
    return !emailRegx.test(value);
  }
 
  ErrorTost(msg) {
    toastr.error(msg, { position: "bottom-center" });
  }
  SuccessTost(msg) {
    toastr.success(msg, { position: "bottom-center" });
  }
  getBase64(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  }
}
export const { IsEmpty, IsMobile, IsEmail, ErrorTost, SuccessTost, getBase64 } =
  new FormHelper();
