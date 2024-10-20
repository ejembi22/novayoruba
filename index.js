function loginDetails(event) {
  event.preventDefault();

  let getLoginEmail = document.querySelector("#email").value;
  let getLoginPassword = document.querySelector("#password").value;
  console.log(getLoginEmail);
  console.log(getLoginPassword);

  if (getLoginEmail === "" || getLoginPassword === "") {
    Swal.fire({
      icon: "error",
      text: "Required to fill this field",
      confirmButtonColor: "#2d85de",
    });
  } else {
    let formData = new FormData();
    formData.append("email", getLoginEmail),
      formData.append("password", getLoginPassword);

    let requestOptions = {
      method: "post",
      body: formData,
    };

    fetch(
      "https://accosmart.com.ng/yorubalearning/api/admin_login",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.hasOwnProperty("token")) {
          swal.fire({
            icon: "success",
            text: `Successful`,
            confirmButtonColor: "#2D85DE",
          });
        } else {
          swal.fire({
            icon: "error",
            text: result.message,
            confirmButtonColor: "#2D85DE",
          });
        }
      })
      .catch((error) => console.log("error", error));
  }
}

function Signup(event) {
  event.preventDefault();

  let getName = document.querySelector("#fullname").value;
  console.log(getName);
  let getEmail = document.querySelector("#emailaddress").value;
  console.log(getEmail);
  let getPassword = document.querySelector("#createpassword").value;
  console.log(getPassword);
  let getConfirmPassword = document.querySelector(
    "#createconfirmpassword"
  ).value;
  console.log(getConfirmPassword);

  if (
    getName === "" ||
    getEmail === "" ||
    getPassword === "" ||
    getConfirmPassword === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Required to fill out all fields!",
    });
  } else if (getPassword.length < 6) {
    Swal.fire("Password is too short");
  } else if (getConfirmPassword == !getPassword) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password dose not match",
    });
  } else {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let formData = new FormData();
    formData.append("name", getName);
    formData.append("email", getEmail);
    formData.append("password", getPassword);
    formData.append("password_confirmation", getConfirmPassword);

    let requestOptions = {
      method: "post",
      body: formData,
    };

    fetch(
      "https://accosmart.com.ng/yorubalearning/api/register_admin",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.status === "success") {
          swal.fire({
            icon: "success",
            text: "User Created Successfully",
            confirmButtonColor: "#2D85DE",
          });
        } else {
          swal.fire({
            icon: "error",
            text: "There was a problem with your sign-up",
            confirmButtonColor: "#2D85DE",
          });
        }
      })

      .catch((error) => console.log("error", error));
  }
}

fetch("dashboardheader.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("menuheader").innerHTML = data;
  });

fetch("dashboardheader.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("homemenu").innerHTML = data;
  });

fetch("dashboardcontent.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("dashboardlist").innerHTML = data;
  });
