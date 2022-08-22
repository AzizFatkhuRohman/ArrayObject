function getData() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone_number = document.getElementById('phone_number').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  if (!name || !email || !phone_number || !subject || !message) {
    return alert('Formulir tidak boleh kosong');
  } else {
    alert('Data berhasil dilengkapi');
  }
  let Mail = 'ar834652@gmail.com';
  let a = document.createElement('a');

  a.href = `mailto:${Mail}?subject=${subject}&body=Hai, namaku ${name} ${message} , silahkan hubungi melalui ${phone_number}, atau ${email}`;
  a.click();
}
