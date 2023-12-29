"use strict";
// api
// browser api
// third-party api
// ajax
// fetch api

/* function fetchData() {
  renderLoading(true);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) throw new Error("Sorry!! enter your valid link😣!!");

      // console.log(res);
      return res.json();
    })
    .then((data) => {
      renderData(data);
      // console.log(data);
    })
    .catch((err) => {
      renderError(err.message);
    })
    .finally(() => {
      renderLoading(false);
    });
}

function renderData(posts) {
  posts.forEach((post) => {
    const template = `
    <div>
      <h2>${post.id} - ${post.title}</h2>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", template);
  });
}

function renderError(message) {
  const template = `<h1>${message}</h1>`;
  document.body.insertAdjacentHTML("beforeend", template);
}

function renderLoading(loadingState) {
  const template = `<h1 class='loading'>Loading...🏃‍♀️</h1>`;
  if (loadingState) {
    document.body.insertAdjacentHTML("beforeend", template);
  } else {
    document.querySelector(".loading").style.display = "none";
  }
}

fetchData(); */

async function fetchData() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  try {
    renderLoading(true);
    if (!res.ok) throw new Error("Please enter the correct API link");
    const data = await res.json();
    // console.log(res);
    console.log(data);
    renderData(data);
  } catch (err) {
    // console.log(err.message);
    renderError(err.message);
  } finally {
    renderLoading(false);
  }
}

function renderData(countries) {
  countries.forEach((country) => {
    const template = `
      <div>
        <h1>Country Name: ${country?.name?.common}</h1>
          <h3>Population: ${
            country?.population > 1000000
              ? (country?.population / 1000000).toFixed(2)
              : country?.population
          }${country?.population > 1000000 ? "M" : ""}</h3>
          <h3>Capital: ${country?.capital.at(0)}</h3>
          <h3>Area: ${country?.area} km<sup>2</sup></h3>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", template);
  });
}

function renderError(msg) {
  const template = `<h2>"${msg} ⚠️"</h2>`;
  document.body.insertAdjacentHTML("beforeend", template);
}

function renderLoading(loadingState) {
  const template = `<h1 class="loading">Loading...🏃‍♀️</h1>`;
  if (loadingState) {
    document.body.insertAdjacentHTML("beforeend", template);
  } else {
    document.querySelector(".loading").style.display = "none";
  }
}

fetchData();
