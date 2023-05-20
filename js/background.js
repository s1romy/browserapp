const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 아래의 두 코드는 js에서 img라는 element를 생성한 것
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`; 

//위에서 생성한 코드를 body에서 실제로 보이게 한 것
document.body.appendChild(bgImage); // append: 가장 마지막에 둬라라는 뜻(난 body에 넣었으니 body의 제일 아래), prepend: 가장 위에 오게 하는것(body의 제일 위)

