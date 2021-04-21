const Storage = {
  data() {
    return {
      name: "",
      experience: {
        educations: [
          {
            name: "SMAN 1 Mataram",
            category: "Sains",
            date: "Juli 2017 - April 2020",
          },
          {
            name: "ITEC",
            category: "Django Web Programming",
            date: "December 2020 - February 2021",
          },
          {
            name: "Computer Course Center",
            category: "PHP Framework",
            date: "April 2021 - now",
          },
        ],
        workExperiences: [
          {
            name: "TOKO TRI R",
            position: "Store Employee",
            date: "12 - 18 y.o.",
            description: "I work here since i was child",
          },
          {
            name: "Freelancer",
            position: "Math & English Private Teacher",
            date: "15 - 19 y.o.",
            description: "at Superprof",
          },
          {
            name: "Freelancer",
            position: "Copywriter",
            date: "18 - 19 y.o.",
            description: "at projects.co.id",
          },
          {
            name: "Hanz Web",
            position: "Programmer",
            date: "19 - now",
            description: "as my own business",
          },
        ],
      },
      images: [
        "d1.jpg",
        "d2.jpg",
        "d3.jpg",
        "d4.jpg",
        "d5.jpg",
        "d6.jpg",
        "d7.jpg",
        "d8.jpg",
      ],
    };
  },
  methods: {
    updateName(value) {
      console.log("succes");
    },
  },
};

const app = Vue.createApp(Storage);

app.component("welcome", {
  props: ["name"],
  emits: ["update:name"],
  template: `
    <div id="welcome">
      <div class="wcm-content">
        <div class="input-page wcm-section">
        <h1>Welcome to Hanz Page</h1>
      <form id="wcm-form">
        <h4>May I know your name? {{name}}</h4>
        <input type="text" name="name" id="name" placeholder="Name" :value="name" @input="$emit('update:name', $event.target.value)" autofocus>
        <button class="wcm-button" id="next-button">Next</button>
      </form>
      </div>
      <div class="info-page wcm-section">
        <h1>Welcome to my portfolio</h1>
        <p>This build by Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum minus dolore sequi! Fuga eum itaque magnam vitae reiciendis repellat illum architecto alias deleniti fugit officiis qui, quo perferendis libero soluta numquam laudantium laboriosam. Eos rerum cum laborum. Qui voluptate ad ea nostrum explicabo. Dolorum tenetur corrupti ipsa. Doloremque quos autem dolorem recusandae numquam laborum consectetur necessitatibus assumenda, rem consequuntur. Reprehenderit sint quibusdam eius sed veritatis dicta dolorem tempora porro ut, molestiae dolor, et ullam hic debitis quos beatae fugit voluptates quia esse vero expedita! Dolorem mollitia minus quos unde, nam, qui earum aspernatur voluptates consectetur veniam iure optio consequuntur provident veritatis distinctio accusamus, inventore laudantium quaerat rerum adipisci molestias eaque exercitationem dicta illum! Similique, praesentium! Molestias minus quidem est placeat nesciunt mollitia exercitationem, repellendus in dignissimos unde sint rem sed libero nemo culpa inventore accusantium velit. <br><br> Voluptatibus exercitationem repudiandae nihil ipsum reprehenderit, maxime officiis modi architecto corrupti iure quo dicta consectetur hic consequatur aperiam? Tempora voluptatem quo nobis qui cupiditate, eos explicabo at ab a velit, unde quae vitae nam recusandae optio doloribus vel. Optio voluptatum ex debitis, soluta sint reprehenderit. Dolor molestiae accusamus id praesentium vitae at. Beatae perspiciatis excepturi dicta officiis porro, quasi atque cumque ad minus fuga ex voluptatem optio culpa autem repellendus possimus, ipsa voluptatibus obcaecati quidem blanditiis impedit natus. </p>
        <button class="wcm-button" id="done-btn">Done</button>
      </div>
    </div>
    </div>
  `,
});

app.component("heading", {
  template: `
    <div class="head">
    <nav>
      <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
      </ul>
    </nav>
    <div class="sub-head">
      <h1>Reyhan</h1>
      <!-- hr giving -->
      <hr id="top" />
      <hr id="down" />
      <!-- h3 edit -->
      <h3>junior programmer</h3>
      <!-- animate reparation -->
      <div class="animate-box">
        <div class="animate">
          <b></b>
        </div>
      </div>
    </div>
  </div>
      `,
});

app.component("about", {
  template: `
    <div class="about">
    <h2>About Me</h2>
    <p>
      Reyhan, 20 Years Old. Iam a Fullstack Junior Programmer. 
      Using Bootstrap for CSS framework. Vue or React for Javascript Library. I can code Jquery well too. Usually play with Laravel for the backend framework, but i have learned CodeIgniter and Django(Python Framework) too. Familiar with MySql for the database. Git and github for teamwork management. I can speak English enough fluently and Japanese.<br>
      One good things for me is I am still young, so I am a fast learner. Good looking and a friendly boy. Strong at Math, Algorithm, Logicial Reasoning. I always love to learn something new, love code,love challange and love to know more about people's personality. I hope that I can know more about you too, see ya

      ' Just do it, take it easy. ' 
      -Hanz
    </p>
    <div class="animate-box">
      <div class="animate">
        <b></b>
        <b class="second"></b>
      </div>
    </div>
  </div>
      `,
});

// Setting Experience here
app.component("experience", {
  props: {
    experience: Object,
  },
  template: `
    <div class="experience">
    <div class="education">
      <h3>Education</h3>
      <div class="ex-items">
        <div class="ed-item" v-for= 'education in experience.educations'>
          <div class="ex-item" >
            <h4>{{education.name}}</h4>
            <p>category: {{education.category}}</p>
            <p>From: {{education.date}}</p>
          </div>
          <div class="tail"></div>
        </div>
      </div>
    </div>
    <hr />
    <div class="work-experience">
      <h3>Work Experience</h3>
      <div class="ex-items">
        <div class="we-item" v-for= 'we in experience.workExperiences'>
          <div class="ex-item">
            <h4>{{we.name}}</h4>
            <p> as {{we.position}}</p>
            <p>From: {{we.date}}</p>
            <p>{{we.description}}</p>
          </div>
          <div class="tail"></div>
        </div>
      </div>
    </div>
  </div>
      `,
});

// Setting Images here
app.component("created", {
  props: {
    images: Array,
  },
  methods: {
    imagePath(image) {
      return (image = "img/creation/" + image);
    },
  },
  template: `
    <div class="created">
    <h2>Created()</h2>
    <div class="slider">
      <!-- Flickity HTML init -->
      <div
        class="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true }'
      >
        <div class="gallery-cell" v-for="image in images">  
        <img :src='imagePath(image)'/>
        </div>
      </div>
    </div>
    
    <div class="git">
      <img src="img/creation/git.gif" class="git-gif" />
      <div class="note">
        <p>See more</p>
        <a href="https://github.com/reyhanrrs" target="_blank"
          >github.com/reyhanrrs</a
        >
      </div>
    </div>
  </div>
      `,
});

app.component("contact", {
  template: `
    <div class="contact">
    <h2>Contact</h2>
    <div class="contact-container">
      <div class="contact-item">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          target="_blank"
        >
          <i class="fa fa-envelope email"> </i>
          <p>Email || reyhanrrs@gmail.com</p>
        </a>
      </div>
      <div class="contact-item">
        <!-- API -->
        <a>
          <i class="fa fa-whatsapp"></i>
          <p>Contact Number || +62 85-338-625-277</p>
        </a>
      </div>
      <div class="contact-item">
        <!-- API -->
        <a href="https://myhanz.site" target="_blank">
          <i class="fa fa-laptop"></i>
          <p>Site || Myhanz.site</p></a
        >
      </div>
      <div class="contact-item">
        <a href="https://github.com/reyhanrrs" target="_blank">
          <i class="fa fa-github"></i>
          <p>GitHub || github.com/reyhanrrs</p>
        </a>
      </div>
    </div>
  </div>
      `,
});

app.component("footing", {
  template: `
    <div class="foot">
    <p>
      Made by H <span><i class="fa fa-heart"></i></span> N Z || 2021
    </p>
    <div class="animate-box">
      <div class="animate">
        <b></b>
        <b class="second"></b>
        <b class="thirth"></b>
      </div>
    </div>
  </div>
      `,
});

app.component("lifts", {
  template: ` 
  <div class="lifts">
  <div class="lift">
    <a href="#" class="hash"><i class="fa fa-hashtag"></i></a>
  </div>
  <div class="lift">
    <a href="#"><i class="fa fa-angle-double-up"></i></a>
  </div>
  <div class="lift">
    <a href="#"><i class="fa fa-angle-double-down"></i></a>
  </div>
</div>  
  `,
});

const vm = app.mount("#universe");
