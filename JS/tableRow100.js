const tableBody = document.getElementById("table-body");
for (let i = 2; i <= 20; i++) {
	const row = document.createElement("tr");
	row.classList.add("align-middle");
	row.innerHTML = `
                        <td>
                            <select class="form-select">
                                <option value="">Entry/Ticket</option>
                                <option value="">Food and Beverage</option>
                                <option value="">Uber</option>
                                <option value="">Shopping</option>
                                <option value="">Mod/Gaja</option>
                                <option value="">Others</option>
                            </select>
                        </td>
                        <td><input type="text" class="form-control" /></td>

                        <td><input id="amount_row_${i}" type="text" class="form-control onlyNumbers amountRow" /></td>
                        <td>
                            <select id="dropdown_row_${i}" class="form-select">
                                <option value="" id="dropdown_friend_1_row_${i}">Abrar</option>
                                <option value="" id="dropdown_friend_2_row_${i}">Adnan</option>
                                <option value="" id="dropdown_friend_3_row_${i}">Afia</option>
                                <option value="" id="dropdown_friend_4_row_${i}">Kazi</option>
                                <option value="" id="dropdown_friend_5_row_${i}">Naim</option>
                                <option value="" id="dropdown_friend_6_row_${i}">Nifar</option>
                                <option value="" id="dropdown_friend_7_row_${i}">Promi</option>
                                <option value="" id="dropdown_friend_8_row_${i}">Sijil</option>
                            </select>
                        </td>
                        <td>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="checkbox1_row_${i}" checked />
                                <label class="form-check-label" for="checkbox1_row_${i}">Bill Evevyone</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="checkbox2_row_${i}" checked />
                                <label class="form-check-label" for="checkbox2_row_${i}">Bill Equally</label>
                            </div>
                        </td>
                        <td>
                            <!-- +++ Button -->
                            <button id="button_row_${i}" class="btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#ppTable_row_${i}" aria-expanded="false" aria-controls="ppTable_row_${i}"
                                disabled>
                                <i class="fa-solid fa-square-plus fa-2x"></i>
                            </button>
                            <!-- ppTable -->
                            <div class="collapse" id="ppTable_row_${i}">
                                <div class="card card-body">
                                    <h3 class="text-secondary" id="pp_heading_row_${i}">Put individual share amount</h3>
                                    <div class="container">
                                        <table class="table table-bordered">
                                            <thead id="table_head_row_${i}">
                                                <tr>
                                                    <th id="tableHead_friend_1_row_${i}">Abrar</th>
                                                    <th id="tableHead_friend_2_row_${i}">Adnan</th>
                                                    <th id="tableHead_friend_3_row_${i}">Afia</th>
                                                    <th id="tableHead_friend_4_row_${i}">Kazi</th>
                                                    <th id="tableHead_friend_5_row_${i}">Naim</th>
                                                    <th id="tableHead_friend_6_row_${i}">Nifar</th>
                                                    <th id="tableHead_friend_7_row_${i}">Promi</th>
                                                    <th id="tableHead_friend_8_row_${i}">Sijil</th>
                                                </tr>
                                            </thead>
                                            <tbody id="table_body_row_${i}">
                                                <td id="tableBody_friend_1_row_${i}" ><input type="text" id="friend_1_input_row_${i}"
                                                        class="form-control form-control-sm onlyNumbers" style="font-size: 0.7rem" /></td>
                                                <td id="tableBody_friend_2_row_${i}" ><input type="text" id="friend_2_input_row_${i}"
                                                        class="form-control form-control-sm onlyNumbers" style="font-size: 0.7rem" /></td>
                                                <td id="tableBody_friend_3_row_${i}" ><input type="text" id="friend_3_input_row_${i}"
                                                        class="form-control form-control-sm onlyNumbers" style="font-size: 0.7rem" /></td>
                                                <td id="tableBody_friend_4_row_${i}" ><input type="text" id="friend_4_input_row_${i}"
                                                        class="form-control form-control-sm onlyNumbers" style="font-size: 0.7rem" /></td>
                                                <td id="tableBody_friend_5_row_${i}" ><input type="text" id="friend_5_input_row_${i}"
                                                        class="form-control form-control-sm onlyNumbers" style="font-size: 0.7rem" /></td>
                                                <td id="tableBody_friend_6_row_${i}" ><input type="text" id="friend_6_input_row_${i}"
                                                        class="form-control form-control-sm onlyNumbers" style="font-size: 0.7rem" /></td>
                                                <td id="tableBody_friend_7_row_${i}" ><input type="text" id="friend_7_input_row_${i}"
                                                        class="form-control form-control-sm onlyNumbers" style="font-size: 0.7rem" /></td>
                                                <td id="tableBody_friend_8_row_${i}" ><input type="text" id="friend_8_input_row_${i}"
                                                        class="form-control form-control-sm onlyNumbers" style="font-size: 0.7rem" /></td>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </td>`;

	tableBody.appendChild(row);
}
