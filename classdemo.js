$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass("active");
    $("nav").toggleClass("active");
  });
});

const demoList = document.getElementById("demo-list");
const demo = document.getElementById("demo");

class ClassDemo {
  constructor(id, title, imageUrl, description, handlerCode) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.handlerCode = handlerCode;
  }
}

class ClassDemoItem {
  constructor(classDemo) {
    this.classDemo = classDemo;
  }

  render() {
    const card = document.createElement("div");
    card.classList = "col-sm-6 col-md-4 col-lg-3";
    card.innerHTML = `
        <div class="card">
        <img
          src="${this.classDemo.imageUrl}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${this.classDemo.title}</h5>
          <p class="card-text">
          ${this.classDemo.description}
          </p>
          <div class="d-flex justify-content-around align-items-center">
            <a
              href="#"
              onclick="showDemo('${this.classDemo.handlerCode}')"
              class="btn btn-outline-primary"
            >
              Go
            </a>
            <div class="btn btn-outline-info">
              <i class="far fa-edit"></i>
            </div>
            <div class="btn btn-outline-danger">
              <i class="far fa-trash-alt" onclick="deleteDemo(${this.classDemo.id})"></i>
            </div>
          </div>
        </div>
      </div>  
    `;
    return card;
  }
}

class ClassDemoList {
  demos = [
    new ClassDemo(
      1,
      "Unconventional Calculator",
      "./img/w2-calculator.JPG ",
      "Using calculator to teach JavaScript basic concepts",
      "./w2-calculator/index.html"
    ),
    new ClassDemo(
      2,
      "Monster Killer",
      "./img/w4-monster.JPG",
      "Using monster killer to demonstrate how to use JavaScript if and loops",
      "./w4-monster/index.html"
    ),
    new ClassDemo(
      3,
      "DOM Movie",
      "./img/w6-dom-movie.JPG",
      "Use DOM Movie to show how to interact with DOM objects",
      "./w7-dom-movie/index.html"
    ),
    new ClassDemo(
      4,
      "Music Player",
      "./img/w3-music-player.JPG",
      "A project demo for an elegant music player",
      "./20200407-s-music-player/index.html"
    ),
    new ClassDemo(
      5,
      "Video Player",
      "./img/w6-video-player.JPG",
      "A project demo for an customized video player",
      "./20200317-s-custom-video-player/index.html"
    ),
  ];

  constructor() {}

  render() {
    const header = document.createElement("h1");
    header.id = "mid-heading";
    // header.textContent = '108-2 JavaScript Final Project';
    header.innerHTML = `
        108-2 JavaScript Final Project &nbsp &nbsp &nbsp
        <a class="btn btn-outline-warning"
         `;
    demoList.append(header);
    const cardList = document.createElement("div");
    cardList.classList = "row";
    cardList.id = "mid-card-list";
    for (const item of this.demos) {
      const demoItem = new ClassDemoItem(item);
      console.log("demoItem", demoItem);
      const demoEl = demoItem.render();
      console.log("demoEl", demoEl);
      cardList.append(demoEl);
    }
    demoList.append(cardList);
  }
}

const classDemoList = new ClassDemoList();
classDemoList.render();

const showDemoList = () => {
  demoList.classList = "visible";
  demo.classList = "invisible";
};

const showDemo = (srcUrl) => {
  demoList.classList = "invisible";
  demo.classList = "visible";
  demo.style.marginTop = "100px";
  demo.innerHTML = `
  <iframe src="${srcUrl}" height="900px" width=100% ></iframe>
  `;
};

const deleteDemo = (id) => {
  // console.log('classDemoList.demos 1', classDemoList.demos);
  classDemoList.demos.forEach((item, i) => {
    if (item.id == id) classDemoList.demos.splice(i, 1);
  });
  // console.log('classDemoList.demos 2', classDemoList.demos);
  demoList.innerHTML = "";
  classDemoList.render();
};
