const ddlEl = document.querySelector("#lang-article");
const langEl = document.querySelectorAll("[data-lang]");

const body = document.querySelector("body");
const inputEl = document.querySelector(".switch-mode-input");
const imgsEl = document.querySelectorAll("img");

// SET DEFAULT LANGUAGE (en)
// SET DISPLAY NULL FOR ALL VALUES AND DISPLAY DEFAULT VALUE ONLY
function defaultLanguage() {
  displayContent("en");
}

// SWITCH LANGUAGE ON DROPDOWNLIST CHANGE
// SET DISPLAY NULL FOR ALL VALUES AND DISPLAY SELECTED VALUE ONLY
function changeLanguage() {
  switch (ddlEl.value) {
    case "en":
      displayContent("en");
      break;
    case "es":
      displayContent("es");
      break;
    case "fr":
      displayContent("fr");
      break;
    case "ru":
      displayContent("ru");
      break;
    case "ua":
      displayContent("ua");
  }
}

// DOM STILL LOADING, WAIT FOR THE EVENT
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", defaultLanguage);
} else {
  defaultLanguage(); // DOM ready
}

// DISPLAY SELECTED LANGUAGE CONTENT ON SCREEN
function displayContent(lang) {
  for (const value of langEl.values()) {
    value.style.display = "none";
    if (value.getAttribute("data-lang") === lang) {
      value.style.display = "block";
    }
  }
}

// LIGHT / DARK THEME SWITCHER
inputEl.addEventListener("change", (e) => {
  if (e.target.checked) {
    // DARK MODE
    document.body.style.backgroundColor = "#2d2d2a";
    document.body.style.color = "#ccc5b9";
  } else {
    // LIGHT MODE
    document.body.style.backgroundColor = "#c1bfb5";
    document.body.style.color = "#714e38";
  }
});
