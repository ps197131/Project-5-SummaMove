
    // Fictieve lijsten van entiteiten
    let oefeningen = [];
    let prestaties = [];
    let users = [];

    const oefeningForm = document.getElementById('oefeningForm');
    const oefeningTable = document.getElementById('oefeningTable').getElementsByTagName('tbody')[0];
    const prestatieForm = document.getElementById('prestatieForm');
    const prestatieTable = document.getElementById('prestatieTable').getElementsByTagName('tbody')[0];
    const userForm = document.getElementById('userForm');
    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

    // Functie om de oefeningentabel bij te werken
    function updateOefeningTable() {
      oefeningTable.innerHTML = '';
      oefeningen.forEach((oefening, index) => {
        const row = oefeningTable.insertRow();
        const naamNlCell = row.insertCell(0);
        const naamEnCell = row.insertCell(1);
        const omschrijvingNlCell = row.insertCell(2);
        const omschrijvingEnCell = row.insertCell(3);
        const actionsCell = row.insertCell(4);

        naamNlCell.innerHTML = oefening.naam_NL;
        naamEnCell.innerHTML = oefening.naam_EN;
        omschrijvingNlCell.innerHTML = oefening.omschrijving_NL;
        omschrijvingEnCell.innerHTML = oefening.omschrijving_EN;
        actionsCell.innerHTML = `<button onclick="editOefening(${index})">Bewerken</button>
                                 <button onclick="deleteOefening(${index})">Verwijderen</button>`;
      });
    }

    // Functie om een nieuwe oefening toe te voegen
    function addOefening(event) {
      event.preventDefault();
      const naamNlInput = document.getElementById('naamNL');
      const naamEnInput = document.getElementById('naamEN');
      const omschrijvingNlInput = document.getElementById('omschrijvingNL');
      const omschrijvingEnInput = document.getElementById('omschrijvingEN');
      const newOefening = {
        naam_NL: naamNlInput.value,
        naam_EN: naamEnInput.value,
        omschrijving_NL: omschrijvingNlInput.value,
        omschrijving_EN: omschrijvingEnInput.value
      };
      oefeningen.push(newOefening);
      updateOefeningTable();
      naamNlInput.value = '';
      naamEnInput.value = '';
      omschrijvingNlInput.value = '';
      omschrijvingEnInput.value = '';
    }

    // Functie om een oefening te bewerken
    function editOefening(index) {
      const oefening = oefeningen[index];
      const naamNlInput = document.getElementById('naamNL');
      const naamEnInput = document.getElementById('naamEN');
      const omschrijvingNlInput = document.getElementById('omschrijvingNL');
      const omschrijvingEnInput = document.getElementById('omschrijvingEN');
      naamNlInput.value = oefening.naam_NL;
      naamEnInput.value = oefening.naam_EN;
      omschrijvingNlInput.value = oefening.omschrijving_NL;
      omschrijvingEnInput.value = oefening.omschrijving_EN;
      oefeningen.splice(index, 1);
      updateOefeningTable();
    }

    // Functie om een oefening te verwijderen
    function deleteOefening(index) {
      oefeningen.splice(index, 1);
      updateOefeningTable();
    }

    oefeningForm.addEventListener('submit', addOefening);
    updateOefeningTable();

    // Functie om de prestatietabel bij te werken
    function updatePrestatieTable() {
      prestatieTable.innerHTML = '';
      prestaties.forEach((prestatie, index) => {
        const row = prestatieTable.insertRow();
        const aantalCell = row.insertCell(0);
        const datumCell = row.insertCell(1);
        const userIdCell = row.insertCell(2);
        const oefeningenIdCell = row.insertCell(3);
        const actionsCell = row.insertCell(4);

        aantalCell.innerHTML = prestatie.aantal;
        datumCell.innerHTML = prestatie.datum;
        userIdCell.innerHTML = prestatie.user_id;
        oefeningenIdCell.innerHTML = prestatie.oefeningen_id;
        actionsCell.innerHTML = `<button onclick="editPrestatie(${index})">Bewerken</button>
                                 <button onclick="deletePrestatie(${index})">Verwijderen</button>`;
      });
    }

    // Functie om een nieuwe prestatie toe te voegen
    function addPrestatie(event) {
      event.preventDefault();
      const aantalInput = document.getElementById('aantal');
      const datumInput = document.getElementById('datum');
      const userIdInput = document.getElementById('userId');
      const oefeningenIdInput = document.getElementById('oefeningenId');
      const newPrestatie = {
        aantal: aantalInput.value,
        datum: datumInput.value,
        user_id: userIdInput.value,
        oefeningen_id: oefeningenIdInput.value
      };
      prestaties.push(newPrestatie);
      updatePrestatieTable();
      aantalInput.value = '';
      datumInput.value = '';
      userIdInput.value = '';
      oefeningenIdInput.value = '';
    }

    // Functie om een prestatie te bewerken
    function editPrestatie(index) {
      const prestatie = prestaties[index];
      const aantalInput = document.getElementById('aantal');
      const datumInput = document.getElementById('datum');
      const userIdInput = document.getElementById('userId');
      const oefeningenIdInput = document.getElementById('oefeningenId');
      aantalInput.value = prestatie.aantal;
      datumInput.value = prestatie.datum;
      userIdInput.value = prestatie.user_id;
      oefeningenIdInput.value = prestatie.oefeningen_id;
      prestaties.splice(index, 1);
      updatePrestatieTable();
    }

    // Functie om een prestatie te verwijderen
    function deletePrestatie(index) {
      prestaties.splice(index, 1);
      updatePrestatieTable();
    }

    prestatieForm.addEventListener('submit', addPrestatie);
    updatePrestatieTable();

    // Functie om de gebruikerstabel bij te werken
    function updateUserTable() {
      userTable.innerHTML = '';
      users.forEach((user, index) => {
        const row = userTable.insertRow();
        const nameCell = row.insertCell(0);
        const usernameCell = row.insertCell(1);
        const emailCell = row.insertCell(2);
        const passwordCell = row.insertCell(3);
        const actionsCell = row.insertCell(4);

        nameCell.innerHTML = user.name;
        usernameCell.innerHTML = user.gebruikersnaam;
        emailCell.innerHTML = user.email;
        passwordCell.innerHTML = user.password;
        actionsCell.innerHTML = `<button onclick="editUser(${index})">Bewerken</button>
                                 <button onclick="deleteUser(${index})">Verwijderen</button>`;
      });
    }

    // Functie om een nieuwe gebruiker toe te voegen
    function addUser(event) {
      event.preventDefault();
      const nameInput = document.getElementById('userName');
      const usernameInput = document.getElementById('userUsername');
      const emailInput = document.getElementById('userEmail');
      const passwordInput = document.getElementById('userPassword');
      const newUser = {
        name: nameInput.value,
        gebruikersnaam: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      };
      users.push(newUser);
      updateUserTable();
      nameInput.value = '';
      usernameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
    }

    // Functie om een gebruiker te bewerken
    function editUser(index) {
      const user = users[index];
      const nameInput = document.getElementById('userName');
      const usernameInput = document.getElementById('userUsername');
      const emailInput = document.getElementById('userEmail');
      const passwordInput = document.getElementById('userPassword');
      nameInput.value = user.name;
      usernameInput.value = user.gebruikersnaam;
      emailInput.value = user.email;
      passwordInput.value = user.password;
      users.splice(index, 1);
      updateUserTable();
    }

    // Functie om een gebruiker te verwijderen
    function deleteUser(index) {
      users.splice(index, 1);
      updateUserTable();
    }

    userForm.addEventListener('submit', addUser);
    updateUserTable();
  