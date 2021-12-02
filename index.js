window.addEventListener("load", () => {
  // Selector
  const form = document.querySelector(".todo-form");
  const input = document.querySelector("#todo-input");
  const list_el = document.querySelector(".todos");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    var todo = input.value;

    if (!todo) {
      alert("Please fill in the todo");
      return;
    }

    //  Creating Elements

    // date
    const date = document.createElement("p");
    let current_date = new Date();
    date.innerText = current_date.toLocaleString();

    const todo_el = document.createElement("div");
    todo_el.classList.add("todo");

    const todo_content_el = document.createElement("div");
    todo_content_el.classList.add("content");

    todo_el.appendChild(todo_content_el);

    // Todo Items

    const todo_input_el = document.createElement("input");
    todo_input_el.classList.add("text");
    todo_input_el.type = "text";
    todo_input_el.value = todo;
    todo_input_el.setAttribute("readonly", "readonly");

    const todo_action_el = document.createElement("div");
    todo_action_el.classList.add("actions");

    //  Edit Button

    const todo_edit_button_el = document.createElement("button");
    todo_edit_button_el.classList.add("edit");
    const icon = document.createElement("i");
    icon.classList.add("fas");
    icon.classList.add("fa-edit");

    todo_edit_button_el.appendChild(icon);

    todo_edit_button_el.addEventListener("click", () => {
      if (todo_edit_button_el.innerHTML == '<i class="fas fa-edit"></i>') {
        icon.classList.remove("fa-edit");
        icon.classList.add("fa-save");

        todo_input_el.removeAttribute("readonly");
        let current_date = new Date();
        date.innerText = current_date.toLocaleString();

        todo_content_el.children[1].remove();
      } else {
        icon.classList.remove("fa-save");
        icon.classList.add("fa-edit");
        todo_input_el.setAttribute("readonly", "readonly");
        todo_content_el.appendChild(date);
      }
    });

    // Delete Button

    const todo_delete_button_el = document.createElement("button");
    todo_delete_button_el.classList.add("delete");
    todo_delete_button_el.innerHTML = "<i class='fa fa-trash'></i>";

    todo_delete_button_el.addEventListener("click", () => {
      todo_el.remove();
    });

    // Appending all child

    todo_action_el.appendChild(todo_edit_button_el);
    todo_action_el.appendChild(todo_delete_button_el);

    todo_content_el.appendChild(todo_input_el);
    todo_content_el.appendChild(date);

    todo_el.appendChild(todo_action_el);

    list_el.appendChild(todo_el);

    input.value = "";
  });
});
