const btnTheme = document.getElementById("btn-theme");
const iconTheme = document.getElementById("icon-theme");
const btnPrint = document.getElementById("btn-print");
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem("theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && systemDark)) {
  enableDark();
} else {
  disableDark();
}

function enableDark() {
  htmlElement.classList.add("dark");
  iconTheme.textContent = "light_mode";
  localStorage.setItem("theme", "dark");
}

function disableDark() {
  htmlElement.classList.remove("dark");
  iconTheme.textContent = "dark_mode";
  localStorage.setItem("theme", "light");
}

btnTheme.addEventListener("click", () => {
  if (htmlElement.classList.contains("dark")) {
    disableDark();
  } else {
    enableDark();
  }
});

btnPrint.addEventListener("click", () => {
  window.print();
});
