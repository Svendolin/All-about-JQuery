function addTodo() {

  // += instead of = adds the innerHTML again and again after each click
  todolist.innerHTML += ` 
        <li class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <!-- icons found via: https://material.io/ (Added the name label instead of person)-->
            <i class="material-icons  mdl-list__item-avatar">label</i>
            ${todofield.value}
          </span>
          <span class="mdl-list__item-secondary-action">
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
              <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" checked />
            </label>
          </span>
        </li>
    `;

    todofield.value = ``; // Discharges the id=todofield input after the button click

};