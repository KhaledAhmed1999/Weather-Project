window.addEventListener("load", () => {
  let long;
  let lat;
  let Tempdescription = document.querySelector(".Temp-description");
  let Tempdegree = document.querySelector(".Temp-degree");
  let Locationtimezone = document.querySelector(".Location-timezone");
  let temperatureSection = document.querySelector(".temperature");
  let temperatureSectionSpan = document.querySelector(".temperature span");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ac5358eb8a62e929e560aeb861744130&units=metric`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp, feels_like, icon } = data.main;
          const { main } = data.weather[0];
          const { country } = data.sys;
          //set the DOM Elements from the API
          Tempdegree.textContent = temp;
          Tempdescription.textContent = main;
          Locationtimezone.textContent = country;
          //ferenheit formula
          let farenheit = Tempdegree.textContent * 1.8 + 32;
          let celsius = (farenheit - 32) * (5 / 9);

          //change temperature to farenheit
          temperatureSection.addEventListener("click", () => {
            if (temperatureSectionSpan.textContent === "C") {
              temperatureSectionSpan.textContent = "F";
              Tempdegree.textContent = Math.floor(farenheit);
            } else {
              temperatureSectionSpan.textContent = "C";
              Tempdegree.textContent = celsius.toFixed(2);
            }
          });

          //set photo

          let how = document.getElementById("how").innerText;

          let describe = document.getElementById("describe");


          if (how === `Clouds`) {
            describe.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16">
            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
          </svg>`;
          } else if (how === `Clear`) {
            describe.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
          </svg>`;
          } else {
            describe.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-rain" viewBox="0 0 16 16">
            <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"/>
          </svg>`;
          }
            
          //   describe.innerHTML = `<p>&#127783</p>`;
          // } else if (how === `Clear`) {
          //   describe.innerHTML = `<p>&#127774;</p>`;
          // } else {
          //   describe.innerHTML = `<p>&#127782;</p>`;
          // }
        });
    });
  }
});
