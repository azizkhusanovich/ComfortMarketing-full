window.addEventListener("load", (e) => {


  const form = document.querySelector(".form");
  const username = document.querySelector("#user-name");
  const phoneNumber = document.querySelector("#user-phone");
  const complate = document.querySelector('#complate');

  const token = "5179731436:AAH7j0CRSmx3D33rGdbZk57iikaUnWV-_Xo";
  const chat_id = -579606165;

  username.addEventListener('input', () => {
    if (username.value.length === 0) {
      username.classList.remove('valid')
      username.classList.add('invalid')
    } else {
      username.classList.remove('invalid')
      username.classList.add('valid')
    }
  })


  phoneNumber.addEventListener('input', () => {
    if (phoneNumber.value.length === 0) {
      phoneNumber.classList.remove('valid')
      phoneNumber.classList.add('invalid')
    } else {
      phoneNumber.classList.remove('invalid')
      phoneNumber.classList.add('valid')
    }
  })
  let count = null

  function complateFunc() {
    complate.classList.add('show')
    count = setTimeout(() => {
      complate.classList.remove('show');
    }, 1500);
  }


  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (username.value.length === 0) {
      username.classList.remove('valid')
      username.classList.add('invalid')
      return
    }
    if (phoneNumber.value.length === 0) {
      phoneNumber.classList.remove('valid')
      phoneNumber.classList.add('invalid')
      return
    }


    username.classList.remove('invalid', 'valid')
    phoneNumber.classList.remove('invalid', 'valid')


    const textMessage = `Отправитель заявки:%0A <b>Имя: </b>${username.value} %0A <b>Телефон: </b> ${phoneNumber.value}`;
    const URL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${textMessage}&parse_mode=html`;


    try {
      const res = await fetch(URL);
      const data = await res.json();
      // console.log(data)

      username.value = null;
      phoneNumber.value = null;
    } catch (error) {
      console.log(error);
    }
    complateFunc()


  })
});
