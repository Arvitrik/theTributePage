//
const ddlEl = document.querySelector("#lang-article");
let langEl = document.querySelectorAll("[data-lang]");

// SET DEFAULT LANGUAGE (en)
// SET DISPLAY NULL FOR ALL VALUES AND DISPLAY DEFAULT VALUE ONLY
function defaultLanguage() {
  for (const value of langEl.values()) {
    value.style.display = "none";
    if (value.getAttribute("data-lang") === "en") {
      value.style.display = "block";
    }
  }
}

// SWITCH LANGUAGE ON DROPDOWNLIST CHANGE
// SET DISPLAY NULL FOR ALL VALUES AND DISPLAY SELECTED VALUE ONLY
function changeLanguage() {
  console.log(ddlEl.value);
  if (ddlEl.value === "en") {
    for (const value of langEl.values()) {
      value.style.display = "none";
      if (value.getAttribute("data-lang") === "en") {
        value.style.display = "block";
      }
    }
  } else if (ddlEl.value === "es") {
    for (const value of langEl.values()) {
      value.style.display = "none";
      if (value.getAttribute("data-lang") === "es") {
        value.style.display = "block";
      }
    }
  } else if (ddlEl.value === "fr") {
    for (const value of langEl.values()) {
      value.style.display = "none";
      if (value.getAttribute("data-lang") === "fr") {
        value.style.display = "block";
      }
    }
  } else if (ddlEl.value === "ru") {
    for (const value of langEl.values()) {
      value.style.display = "none";
      if (value.getAttribute("data-lang") === "ru") {
        value.style.display = "block";
      }
    }
  } else if (ddlEl.value === "ua") {
    for (const value of langEl.values()) {
      value.style.display = "none";
      if (value.getAttribute("data-lang") === "ua") {
        value.style.display = "block";
      }
    }
  }
}

// DOM STILL LOADING, WAIT FOR THE EVENT
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", defaultLanguage);
} else {
  defaultLanguage(); // DOM ready
}

// LIGHT / DARK THEME SWITCHER
const inputEl = document.querySelector(".switch-mode-input");
const body = document.querySelector("body");

const imgsEl = document.querySelectorAll("img");

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
