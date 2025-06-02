document
  .getElementById("siteForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const loader_site = document.getElementById("loader_site");
    const btnText = document.getElementById("btnText");
    const submitBtn = document.querySelector("#siteForm button[type='submit']");

    submitBtn.disabled = true;

    loader_site.classList.remove("hidden");
    loader_site.classList.add("fade-in");

    btnText.textContent = "Processing...";

    const checkedInputs = Array.from(
      document.querySelectorAll(".profession:checked")
    ).filter((input) => input !== otherCheckbox);

    const selectedRoles = checkedInputs
      .map((input) => {
        const label =
          input.nextElementSibling?.innerText ||
          input.parentElement?.innerText ||
          "";
        return label.trim();
      })
      .filter(Boolean)
      .join(" · ");

    const selectedCount = checkedInputs.length;

    if (selectedCount < 2 || selectedCount > 4) {
      loader_site.classList.remove("fade-in");
      loader_site.classList.add("fade-out");

      setTimeout(() => {
        loader_site.classList.add("hidden");
        btnText.textContent = "Selection Error";

        setTimeout(() => {
          btnText.textContent = "Regenerate Site";
          submitBtn.disabled = false;
        }, 2000);
      }, 500);
    } else {
      loader_site.classList.remove("fade-in");
      loader_site.classList.add("fade-out");

      setTimeout(() => {
        loader_site.classList.add("hidden");
        btnText.textContent = "Site Generated";
        submitBtn.disabled = false;
      }, 500);
    }
  });

let selectedTitleFont = "Bethasia";

document.getElementById("titleFont").addEventListener("change", (e) => {
  selectedTitleFont = e.target.value.replace(/^['"]+|['"]+$/g, "").trim();
  console.log("Selected Title Font →", selectedTitleFont);
});

let useLoader = true;

document.querySelectorAll('input[name="loaderOption"]').forEach((input) => {
  input.addEventListener("change", () => {
    useLoader = input.value === "with";
    console.log(
      "Loader setting →",
      useLoader ? "With Loader" : "Without Loader"
    );
  });
});

// Global variables with default values
let selectedImageSrc = "./Media/Background.webp";
let selectedBgColor = "";

// Apply default ring to the default image if it exists
const defaultImg = Array.from(document.querySelectorAll(".bg-thumb")).find(
  (img) => img.src.includes("Background.webp")
);
if (defaultImg) {
  defaultImg.classList.add("ring-2", "ring-blue-500");
  selectedBgColor = defaultImg.dataset.bgColor || "";
}

// Set up click listener
document.querySelectorAll(".bg-thumb").forEach((img) => {
  img.addEventListener("click", () => {
    // Remove ring from all
    document.querySelectorAll(".bg-thumb").forEach((el) => {
      el.classList.remove("ring-2", "ring-blue-500");
    });

    // Add ring to clicked one
    img.classList.add("ring-2", "ring-blue-500");

    // Update global values
    selectedImageSrc = img.src;
    selectedBgColor = img.dataset.bgColor || "";

    console.log("Selected Image Source:", selectedImageSrc);
    console.log("Selected Background Color:", selectedBgColor);
  });
});

function setuploader() {
  return useLoader
    ? `<div id="loading-circle" class="loading-circle">
        <div class="spinner"></div>
        <div id="loading-circle">
          <div class="spinner"></div>
          <div id="quote" class="quote-text"></div>
        </div>
      </div>  <div class="container_universal_hidden">`
    : `<!-- <div id="loading-circle" class="loading-circle">
        <div class="spinner"></div>
        <div id="loading-circle">
          <div class="spinner"></div>
          <div id="quote" class="quote-text"></div>
        </div>
      </div>  <div class="container_universal_hidden"> --> `;
}

function afterFooterDiv() {
  return useLoader ? `</div>` : `<!-- </div> -->`;
}

const glimpse_message = [
  `
<p class="dim_text mb-8 text-base">
  A quick glimpse into who I am and what I love doing.
</p>
`,
  `
<p class="dim_text mb-8 text-base">
  A little window into my world and passions.
</p>
`,
  `
<p class="dim_text mb-8 text-base">
  Here's a peek at what drives me and lights me up.
</p>
`,
  `
<p class="dim_text mb-8 text-base">
  Just a short story about me and the things I love.
</p>
`,
  `
<p class="dim_text mb-8 text-base">
  Who I am, what I do, and why I do it — all in one place.
</p>
`,
  `
<p class="dim_text mb-8 text-base">
  A soft spotlight on what makes me, me.
</p>
`,
  `
<p class="dim_text mb-8 text-base">
  A snapshot of my journey and creative spark.
</p>
`,
  `
<p class="dim_text mb-8 text-base">
  Get to know me — just the things that truly matter.
</p>
`,
  `
<p class="dim_text mb-8 text-base">
  A tiny introduction to the heart behind the work.
</p>
`,
  `
<p class="dim_text mb-8 text-base">
  A short scroll through who I am and what I cherish.
</p>
`,
];

function glimpse_messageabout() {
  const randomIndex = Math.floor(Math.random() * glimpse_message.length);
  return glimpse_message[randomIndex];
}

const friendly_message = [
  `
<p class="text-base sm:text-lg leading-relaxed">
  Everyone is friendly, but you have to go first.
</p>
<p class="italic mt-2">~Let's have a conversation</p>
`,
  `
<p class="text-base sm:text-lg leading-relaxed">
  Kindness is everywhere — it just needs a hello to begin.
</p>
<p class="italic mt-2">~Say something first</p>
`,
  `
<p class="text-base sm:text-lg leading-relaxed">
  The world smiles back when you start the smile.
</p>
<p class="italic mt-2">~Let’s talk</p>
`,
  `
<p class="text-base sm:text-lg leading-relaxed">
  Warmth is waiting — just take the first step.
</p>
<p class="italic mt-2">~Start the chat</p>
`,
  `
<p class="text-base sm:text-lg leading-relaxed">
  Friendship begins with a word.
</p>
<p class="italic mt-2">~Why not yours?</p>
`,
  `
<p class="text-base sm:text-lg leading-relaxed">
  The first word is the key.
</p>
<p class="italic mt-2">~Let’s open the door</p>
`,
  `
<p class="text-base sm:text-lg leading-relaxed">
  Conversations bloom from a simple hi.
</p>
<p class="italic mt-2">~Be the first petal</p>
`,
  `
<p class="text-base sm:text-lg leading-relaxed">
  Hearts connect when one reaches out.
</p>
<p class="italic mt-2">~Go ahead</p>
`,
  `
<p class="text-base sm:text-lg leading-relaxed">
  It all begins with you.
</p>
<p class="italic mt-2">~Say hi first</p>
`,
  `
<p class="text-base sm:text-lg leading-relaxed">
  Magic starts when you say something.
</p>
<p class="italic mt-2">~Let’s begin</p>
`,
];

function friendly_message_conversation() {
  const randomIndex = Math.floor(Math.random() * friendly_message.length);
  return friendly_message[randomIndex];
}

const Sweetmessage = [
  "A Little Hello Just for You",
  "Sending You a Gentle Note",
  "A Sweet Thought for Your Day",
  "This One’s Meant for You",
  "A Warm Message from the Heart",
  "Just a Kind Word, for You",
  "Something Soft, Just for You",
  "A Note to Brighten Your Day",
  "Whispers of Care for You",
  "A Lovely Message, For You",
];

function Sweetmessagerandom() {
  const randomIndex = Math.floor(Math.random() * Sweetmessage.length);
  return Sweetmessage[randomIndex];
}

const messagestitle = [
  "For the days your soul needs a gentle hug.",
  "Because kindness begins with you.",
  "A whisper of hope for your tired heart.",
  "Let today be soft on your spirit.",
  "Because even quiet hearts deserve to shine.",
  "For the moments you forget how loved you are.",
  "Because your smile can light the sky.",
  "A reminder: you’re doing better than you think.",
  "Because peace begins in the small things.",
  "For the love you keep giving, even when you’re tired.",
];

function getRandomMessagetitle() {
  const randomIndex = Math.floor(Math.random() * messagestitle.length);
  return messagestitle[randomIndex];
}

// For random contact message
const messagestitlecontact = [
  "Have a thought to share? I’d love to hear from you!",
  "Your words are welcome here — let’s connect.",
  "Feel free to say hello or share what’s on your heart.",
  "I’m here to listen — drop me a message anytime.",
  "Let’s start a conversation — your voice matters.",
  "Reach out with kindness — I’m all ears for you.",
  "Got something to share? I’m here for it.",
  "Your thoughts are precious — feel free to share them.",
  "Let’s connect and make something beautiful together.",
  "Hi there! I’d love to hear what’s on your mind.",
];

// Function to return a random message
function getRandomMessagetitlecontact() {
  const randomIndex = Math.floor(Math.random() * messagestitlecontact.length);
  return messagestitlecontact[randomIndex];
}

const messages = [
  ` <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose"
        >
          Hello, lovely soul —
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          I’m so glad you’re here. Maybe it was a little curiosity, a happy
          accident, or a quiet calling—but however you arrived, I’m grateful.
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          If your heart ever feels heavy or uncertain, please remember this: you
          shine in ways the world truly needs, and your journey is a gift.
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          With all my love and the softest smile,
        </p>`,
  ` <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose"
        >
          Hey, my friend—
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          I’m genuinely glad you’ve landed here. Whether it was a random click,
          a curious moment, or something deeper—I’m thankful you’re sharing this
          space with me.
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          If you ever find yourself feeling a little adrift, remember this: your
          light is important, your path has meaning, and this world is better
          because you’re in it.
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          With warmth and a smile,
        </p>`,
  `  <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose"
        >
          Dearest wanderer of light,
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          How wonderful that you’ve drifted here—perhaps on a breeze of wonder,
          or the whisper of something unseen. However fate guided you, I’m
          thankful.
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          And if ever the world feels a little too quiet, or your steps feel
          unsure, let this truth wrap around you gently: you are a spark in the
          dark, a note in the song, and the world sighs in gratitude for your
          being.
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          With love that lingers like starlight,
        </p> 
`,
  `  <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose"
        >
          Dear seeker of dreams,
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          How delightful it is that you’ve found your way here—perhaps carried
          by curiosity, or the gentle nudge of destiny. Whatever brought you,
          I’m truly grateful.
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          Whenever the world feels a little too quiet or your steps feel
          uncertain, remember this: you are a light in the shadows, a melody in
          the silence, and the world is better simply because you are here.
        </p>

        <p
          class="text-zinc-400 text-base md:text-lg leading-relaxed md:leading-loose mt-2 md:mt-3"
        >
          With love that sparkles like moonlight and warms like a gentle hug,
        </p>`,
];

function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

const messages_about = [
  `<p class="text-zinc-400 text-base md:text-lg leading-snug mt-4">
              Curious to know who I am, what I do, and what makes me tick? I’ve
              got a little story to share — from the things I love to the work
              I’m passionate about -
              <a href="#about" class="underline">click</a> to explore!
    </p>`,
  `<p class="text-zinc-400 text-base md:text-lg leading-snug mt-4">
                Want to learn more about me, my passions, and what drives me? I’ve
                got a story to tell — from my favorite pursuits to the work I truly enjoy -
              <a href="#about" class="underline">click</a> to explore!
    </p>`,
  `            <p class="text-zinc-400 text-base md:text-lg leading-snug mt-4">
              Curious to dive deeper into my journey, passions, and
              inspirations? Discover the story behind my favorite pursuits and
              the work that fuels my creativity —
              <a href="#about" class="underline">click</a> to explore!
            </p>`,
  ` <p class="text-zinc-400 text-base md:text-lg leading-snug mt-4">
              Curious to know more about me, what I love, and what inspires me?
              Here’s my story — from my hobbies to the work I enjoy -
              <a href="#about" class="underline">click</a> to explore!
            </p>`,
];

function getRandomMessageabout() {
  const randomIndex = Math.floor(Math.random() * messages_about.length);
  return messages_about[randomIndex];
}

const messages_contact = [
  `     <p class="text-zinc-400 text-base md:text-lg leading-snug mt-4">
              Let’s connect and create something amazing together. Feel free to
              reach out to me here. I’m open to new ideas and collaborations.
              Let’s create! -
              <a href="#contact" class="underline">Contact</a>.
            </p>`,
  ` <p class="text-zinc-400 text-base md:text-lg leading-snug mt-4">
              Let’s connect and bring ideas to life. I’m always excited to hear
              from you. Whether it’s a new project, collaboration, or just a
              friendly chat, let’s make it happen! -
              <a href="#contact" class="underline">Contact</a>.
            </p>`,
  `        <p class="text-zinc-400 text-base md:text-lg leading-snug mt-4">
              Let’s connect and turn ideas into reality. I’m always thrilled to
              hear from you. Whether it’s about a new project, or just a casual
              conversation, let’s make it happen! -
              <a href="#contact" class="underline">Contact</a>.
        </p>`,
  ` <p class="text-zinc-400 text-base md:text-lg leading-snug mt-4">
              Let’s collaborate and bring visions to life. I’m excited to hear
              from you—whether it’s about a creative idea, a potential project,
              or just a friendly chat. Let’s make something amazing together! -
              <a href="#contact" class="underline">Contact</a>.
            </p>`,
];

function getRandomMessageContact() {
  const randomIndex = Math.floor(Math.random() * messages_contact.length);
  return messages_contact[randomIndex];
}
const iconMap = {
  twitter: "fa-brands fa-x-twitter",
  email: "fa-solid fa-envelope",
  stackoverflow: "fa-brands fa-stack-overflow",
  dev: "fa-brands fa-dev",
  notion: "fa-solid fa-book-open",
  default: "fa-solid fa-globe",
  monkeytype: "fa-solid fa-keyboard",
};

const socialFields = document.getElementById("socialFields");
const addBtn = document.getElementById("addSocialBtn");
const platformSelect = document.getElementById("socialPlatform");
const urlInput = document.getElementById("socialURL");

addBtn.addEventListener("click", () => {
  const manualPlatform = platformSelect.value;
  const url = urlInput.value.trim();

  if (!url) {
    alert("Please enter a valid URL.");
    return;
  }
  if (manualPlatform === "icon_none") {
    alert("Please select a social media platform.");
    return;
  }

  const detectedPlatform = detectPlatformFromURL(url) || manualPlatform;
  if (detectedPlatform === "icon_none") return;

  const title =
    detectedPlatform.charAt(0).toUpperCase() + detectedPlatform.slice(1);

  const iconClass =
    iconMap[detectedPlatform] ||
    (detectedPlatform !== "email"
      ? `fa-brands fa-${detectedPlatform}`
      : iconMap.default);

  createSocialLinkCard(url, detectedPlatform, iconClass, title);

  urlInput.value = "";
  platformSelect.value = "icon_none";
});

function createSocialLinkCard(url, platform, iconClass, title) {
  // Hidden input to store value in form or state
  const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.className = "social-input";
  hiddenInput.dataset.icon = iconClass;
  hiddenInput.dataset.title = platform;
  hiddenInput.value = url;

  // Card container
  const card = document.createElement("div");
  card.className =
    "relative flex items-center space-x-3 bg-zinc-900 rounded-full px-5 py-2 border border-zinc-700 shadow-md cursor-pointer transition-all duration-300 hover:bg-zinc-800";

  // Social link
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.title = title;
  link.className = "flex items-center gap-3 text-white no-underline";

  const icon = document.createElement("i");
  icon.className = `${iconClass} text-2xl`;
  icon.setAttribute("aria-hidden", "true");

  const textSpan = document.createElement("span");
  textSpan.textContent = title;
  textSpan.className = "font-semibold text-sm md:text-base";

  link.appendChild(icon);
  link.appendChild(textSpan);

  // Remove button (hidden by default)
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className =
    "absolute top-1 -right-2 bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400";
  removeBtn.title = `Remove ${title} link`;
  removeBtn.setAttribute("aria-label", `Remove ${title} link`);
  removeBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>`;

  removeBtn.addEventListener("click", () => {
    hiddenInput.remove();
    card.remove();
  });

  // Show remove button on card hover
  card.addEventListener("mouseenter", () => {
    removeBtn.style.opacity = "1";
  });
  card.addEventListener("mouseleave", () => {
    removeBtn.style.opacity = "0";
  });

  card.appendChild(link);
  card.appendChild(removeBtn);

  socialFields.appendChild(hiddenInput);
  socialFields.appendChild(card);

  // Animate fade-in and slide-up
  card.style.opacity = 0;
  card.style.transform = "translateY(10px)";
  card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  requestAnimationFrame(() => {
    card.style.opacity = 1;
    card.style.transform = "translateY(0)";
  });
}

function detectPlatformFromURL(url) {
  try {
    const hostname = new URL(url).hostname.toLowerCase();

    const platformPatterns = {
      github: ["github.com"],
      monkeytype: ["monkeytype.com"],
      linkedin: ["linkedin.com"],
      youtube: ["youtube.com"],
      facebook: ["facebook.com"],
      twitter: ["twitter.com", "x.com"],
      tiktok: ["tiktok.com"],
      instagram: ["instagram.com"],
      snapchat: ["snapchat.com"],
      threads: ["threads.net"],
      pinterest: ["pinterest.com"],
      spotify: ["spotify.com"],
      twitch: ["twitch.tv"],
      telegram: ["t.me", "telegram.org", "telegram.me"],
      vimeo: ["vimeo.com"],
      dribbble: ["dribbble.com"],
      behance: ["behance.net"],
      artstation: ["artstation.com"],
      deviantart: ["deviantart.com"],
      pixiv: ["pixiv.net"],
      bandcamp: ["bandcamp.com"],
      goodreads: ["goodreads.com"],
      medium: ["medium.com"],
      soundcloud: ["soundcloud.com"],
      upwork: ["upwork.com"],
    };

    for (const [platform, domains] of Object.entries(platformPatterns)) {
      if (domains.some((domain) => hostname.includes(domain))) {
        return platform;
      }
    }

    return null;
  } catch (e) {
    return null;
  }
}

function generateSocialLinksHTML() {
  const socialInputs = document.querySelectorAll(".social-input");
  let socialIconsHTML = "";

  const email = document.getElementById("email")?.value?.trim();
  if (email) {
    socialIconsHTML += `
      <a
        href="mailto:${email}"
        target="_blank"
        title="Email me"
        class="group relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/20 backdrop-blur-md shadow hover:shadow-lg transition-all duration-300 hover:scale-110 hover:border-white/30"
      >
        <div class="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <i class="fa-solid fa-envelope text-white text-lg md:text-xl z-10 transition-transform duration-300 group-hover:scale-110"></i>
      </a>`;
  }

  socialInputs.forEach((input) => {
    const url = input.value.trim();
    const platform = input.dataset.title?.toLowerCase();
    const title = input.dataset.title || "Social";
    if (!url || !platform) return;

    const iconClass =
      iconMap[platform] ||
      (platform !== "email" ? `fa-brands fa-${platform}` : iconMap.default);

    socialIconsHTML += `
      <a
        href="${url}"
        target="_blank"
        title="${title}"
        class="group relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/20 backdrop-blur-md shadow hover:shadow-lg transition-all duration-300 hover:scale-110 hover:border-white/30"
      >
        <div class="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <i class="${iconClass} text-white text-lg md:text-xl z-10 transition-transform duration-300 group-hover:scale-110"></i>
      </a>`;
  });

  return socialIconsHTML
    ? `<div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 p-4">${socialIconsHTML}</div>`
    : "";
}

function generateNavLinksHTML() {
  const socialInputs = document.querySelectorAll(".social-input");
  let navLinksHTML = "";

  socialInputs.forEach((input) => {
    const url = input.value.trim();
    const platform = input.dataset.title || "Social";

    if (!url) return;

    const displayName =
      platform.charAt(0).toUpperCase() + platform.slice(1).replace("-", " ");

    navLinksHTML += `
      <li>
        <a href="${url}" target="_blank">${displayName}</a>
      </li>`;
  });

  return navLinksHTML ? `\n${navLinksHTML}\n` : "";
}
const form = document.getElementById("siteForm");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const loader = document.getElementById("loader");
const tagline = document.getElementById("tagline");

const tagline_value = tagline.value;

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  submitBtn.disabled = true;

  const checkedInputs = Array.from(
    document.querySelectorAll(".profession:checked")
  ).filter((input) => input !== otherCheckbox);

  const selectedRoles = checkedInputs
    .map((input) => {
      const label =
        input.nextElementSibling?.innerText ||
        input.parentElement?.innerText ||
        "";
      return label.trim();
    })
    .filter(Boolean)
    .join(" · ");

  const selectedCount = checkedInputs.length;

  if (selectedCount < 2 || selectedCount > 4) {
    roleError.classList.remove("hidden");
    return;
  } else {
    roleError.classList.add("hidden");
  }

  const about = document.getElementById("aboutSection").value;
  const first_name_raw = document.getElementById("first_name").value;
  const first_name =
    first_name_raw.replace(/\s+/g, "").charAt(0).toUpperCase() +
    first_name_raw.replace(/\s+/g, "").slice(1).toLowerCase();
  const last_name_raw = document.getElementById("last_name").value;
  const last_name =
    last_name_raw.charAt(0).toUpperCase() +
    last_name_raw.slice(1).toLowerCase();
  const fullName = `${first_name} ${last_name}`;
  const email = document.getElementById("email").value;
  const website_title = document.getElementById("title_website").value;

  const fontFiles = [
    "Font/Bethasia.otf",
    "Font/TheSomething.otf",
    "Font/Apricot.otf",
    "Font/Dream Avenue.ttf",
    "Font/TanBuster.otf",
    "Font/Harry Potter.otf",
  ];

  const [templateRes, templateRes1, cssRes, ...fontResArray] =
    await Promise.all([
      fetch("template.html"),
      fetch("Thank you.html"),
      fetch("Styles/style.css"),
      ...fontFiles.map((font) => fetch(font)),
    ]);

  const [htmlTemplate, thankyou, cssContent, ...fontBuffers] =
    await Promise.all([
      templateRes.text(),
      templateRes1.text(),
      cssRes.text(),
      ...fontResArray.map((res) => res.arrayBuffer()),
    ]);

  let html = htmlTemplate
    .replace(/{{TITLE}}/g, first_name)
    .replace(/{{Email}}/g, email)
    .replace(/{{ABOUT}}/g, about)
    .replace(/{{ABOUTFOOTER}}/g, about)
    .replace(/{{CONTACTFOOTER}}/g, getRandomMessageContact())
    .replace(/{{Sign}}/g, first_name)
    .replace(/{{ROLES}}/g, selectedRoles)
    .replace(/{{TAGLINE}}/g, tagline_value)
    .replace(/{{SOCIAL_LINKS}}/g, generateSocialLinksHTML())
    .replace(/{{Message_contact}}/g, getRandomMessagetitlecontact())
    .replace(/{{Nav_Roles}}/g, generateNavLinksHTML())
    .replace(/{{Random_title}}/g, getRandomMessagetitle())
    .replace(/{{Sweet_Message}}/g, Sweetmessagerandom())
    .replace(/{{About_Footer}}/g, getRandomMessageabout())
    .replace(/{{Contact_Footer}}/g, getRandomMessageContact())
    .replace(/{{friendly_message}}/g, friendly_message_conversation())
    .replace(/{{glimpse_message}}/g, glimpse_messageabout())
    .replace(/{{Random}}/g, getRandomMessage())
    .replace(/{{loader_code}}/g, setuploader())
    .replace(/{{TITLE_FONT}}/g, selectedTitleFont)
    .replace(/{{bg_color}}/g, selectedBgColor)
    .replace(/{{bg_file}}/g, selectedImageSrc)
    .replace(/{{after_footer}}/g, afterFooterDiv())
    .replace(/{{website_title}}/g, website_title);

  let thanks = thankyou
    .replace(/{{TITLE}}/g, first_name)
    .replace(/{{TITLE_FONT}}/g, selectedTitleFont);

  const zip = new JSZip();
  zip.file("index.html", html);
  zip.file("style.css", cssContent);
  zip.file("Thank you.html", thanks);

  const fonts = zip.folder("fonts");
  fontFiles.forEach((file, i) => {
    const fileName = file.split("/").pop();
    fonts.file(fileName, fontBuffers[i]);
  });
  const mediaFolder = zip.folder("Media");
  const mediaFiles = [
    "Media/1.webp",
    "Media/2.webp",
    "Media/3.webp",
    "Media/4.webp",
    "Media/5.webp",
    "Media/6.webp",
    "Media/7.webp",
    "Media/8.webp",
    "Media/9.webp",
    "Media/Background-Dark.webp",
    "Media/Background.webp",
    "Media/Black-Background.webp",
  ];

  const selectedImg = document.querySelector(".bg-thumb.ring-2");
  const selectedMediaPath = selectedImg?.getAttribute("src");

  if (selectedMediaPath) {
    const mediaFolder = zip.folder("Media");

    const response = await fetch(selectedMediaPath);
    const buffer = await response.arrayBuffer();
    const filename = selectedMediaPath.split("/").pop();
    mediaFolder.file(filename, buffer);

    console.log(`Added ${filename} to the ZIP.`);
  }

  if (faviconBlob) {
    zip.folder("Favicon").file("favicon.png", faviconBlob);
  }

  zip.generateAsync({ type: "blob" }).then((content) => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "Crafted for " + first_name + ".zip";
    a.click();
  });
});

function updateFullNameAndURL() {
  const first_name_raw = document.getElementById("first_name").value;
  const last_name_raw = document.getElementById("last_name").value;

  const first_name =
    first_name_raw.replace(/\s+/g, "").charAt(0).toUpperCase() +
    first_name_raw.replace(/\s+/g, "").slice(1).toLowerCase();
  const last_name =
    last_name_raw.replace(/\s+/g, "").charAt(0).toUpperCase() +
    last_name_raw.replace(/\s+/g, "").slice(1).toLowerCase();

  const fullName = `${first_name} ${last_name}`;

  const text_url = document.getElementById("text_url_bar");
  text_url.innerHTML = fullName;

  const url = `https://${first_name.toLowerCase()}${last_name.toLowerCase()}.com`;

  const url_bar = document.getElementById("url_bar");
  url_bar.value = url;
}

document
  .getElementById("first_name")
  .addEventListener("input", updateFullNameAndURL);
document
  .getElementById("last_name")
  .addEventListener("input", updateFullNameAndURL);
