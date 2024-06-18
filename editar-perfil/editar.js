function saveDescription() {
  const description = document.getElementById("descricao").value;

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description: description }),
  };

  fetch("/api/users/description", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Update UI to indicate success
        console.log("Description saved successfully!");
      } else {
        // Update UI to indicate error
        console.error("Error saving description:", data.error);
      }
    })
    .catch((error) => {
      console.error("Error saving description:", error);
    });
}

function updateUserData() {
  const name = document.getElementById("nome").value;
  const currentPassword = document.getElementById("senha").value;
  const newPassword = document.getElementById("confirmar-senha").value;
  const birthDate = document.getElementById("data-nascimento").value;

  // Implement logic to validate user data (optional)
  // You can check if new password meets requirements, etc.

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      currentPassword: currentPassword,
      newPassword: newPassword,
      birthDate: birthDate,
    }),
  };

  fetch("/api/users/data", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Update UI to indicate success
        console.log("User data updated successfully!");
      } else {
        // Update UI to indicate error
        console.error("Error updating user data:", data.error);
      }
    })
    .catch((error) => {
      console.error("Error updating user data:", error);
    });
}

function updateAboutMe() {
  const aboutMeText = document.getElementById("sobremim").value;

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ aboutMe: aboutMeText }),
  };

  fetch("/api/users/aboutme", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Update UI to indicate success
        console.log("About me text updated successfully!");
      } else {
        // Update UI to indicate error
        console.error("Error updating about me text:", data.error);
      }
    })
    .catch((error) => {
      console.error("Error updating about me text:", error);
    });
}

function changeImage() {
  const fileInput = document.getElementById("file");
  const profileImage = document.getElementById("profileImage");

  fileInput.addEventListener("change", function() {
    const reader = new FileReader();
    reader.onload = function(e) {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
  });
}
