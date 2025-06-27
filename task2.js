document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
        alert("Please enter your name.");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!message.value.trim()) {
        alert("Please enter your message.");
        return;
    }

    alert("Form submitted successfully!");
});

//Code for to do list

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}