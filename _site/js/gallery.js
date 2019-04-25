function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      console.log("Clicked!");
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      // Change which image is current.
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Update image info.
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let location    = galleryInfo.querySelector(".location");
      let website     = galleryInfo.querySelector(".website");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML       = thumbnail.dataset.title;
      location.innerHTML    = thumbnail.dataset.location;
      website.innerHTML     = thumbnail.dataset.website;
      website.setAttribute("href", website.innerHTML);
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}

function setNone() {
  var list = document.querySelectorAll(".to-hide");
  var i;
  for (i = 0; i < list.length; i++) {
    list[i].style.display = "none";
  }
}

function consultingFunc() {
  var f = document.getElementById("consulting");
  var g = document.getElementById("enterprise");
  var h = document.getElementById("ecosystem");
  if (f.style.display === "none") {
    f.style.display = "block";
    g.style.display = "none";
    h.style.display = "none";
  } else {
    f.style.display = "none";
  }
}

function enterpriseFunc() {
  var f = document.getElementById("consulting");
  var g = document.getElementById("enterprise");
  var h = document.getElementById("ecosystem");
  if (g.style.display === "none") {
    g.style.display = "block";
    f.style.display = "none";
    h.style.display = "none";
  } else {
    g.style.display = "none";
  }
}

function ecosystemFunc() {
  var f = document.getElementById("consulting");
  var g = document.getElementById("enterprise");
  var h = document.getElementById("ecosystem");
  if (h.style.display === "none") {
    h.style.display = "block";
    g.style.display = "none";
    f.style.display = "none";
  } else {
    h.style.display = "none";
  }
}

function nonprofitFunc() {
  var c = document.getElementById("nonprofit");
  var d = document.getElementById("socialimpact");
  var e = document.getElementById("forprofit");
  if (c.style.display === "none") {
    c.style.display = "block";
    d.style.display = "none";
    e.style.display = "none";
  } else {
    c.style.display = "none";
  }
}

function socialimpactFunc() {
  var c = document.getElementById("nonprofit");
  var d = document.getElementById("socialimpact");
  var e = document.getElementById("forprofit");
  if (d.style.display === "none") {
    d.style.display = "block";
    c.style.display = "none";
    e.style.display = "none";
  } else {
    d.style.display = "none";
  }
}

function forprofitFunc() {
  var c = document.getElementById("nonprofit");
  var d = document.getElementById("socialimpact");
  var e = document.getElementById("forprofit");
  if (e.style.display === "none") {
    e.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";
  } else {
    e.style.display = "none";
  }
}

function impactFunc() {
  var x = document.getElementById("Impact-Invest");
  var y = document.getElementById("Community-Builders");
  var z = document.getElementById("Incubator");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function commFunc() {
  var x = document.getElementById("Impact-Invest");
  var y = document.getElementById("Community-Builders");
  var z = document.getElementById("Incubator");
  if (y.style.display === "none") {
    y.style.display = "flex";
    x.style.display = "none";
    z.style.display = "none";
  } else {
    y.style.display = "none";
  }
}

function incubFunc() {
  var x = document.getElementById("Impact-Invest");
  var y = document.getElementById("Community-Builders");
  var z = document.getElementById("Incubator");
  if (z.style.display === "none") {
    z.style.display = "flex";
    x.style.display = "none";
    y.style.display = "none";
  } else {
    z.style.display = "none";
  }
}

function techFunc() {
  var a = document.getElementById("Tech");
  var b = document.getElementById("Finance");
  var c = document.getElementById("Education");
  if (a.style.display === "none") {
    a.style.display = "flex";
    b.style.display = "none";
    c.style.display = "none";
  } else {
    a.style.display = "none";
  }
}

function financeFunc() {
  var a = document.getElementById("Tech");
  var b = document.getElementById("Finance");
  var c = document.getElementById("Education");
  if (b.style.display === "none") {
    b.style.display = "flex";
    a.style.display = "none";
    c.style.display = "none";
  } else {
    b.style.display = "none";
  }
}

function eduFunc() {
  var a = document.getElementById("Tech");
  var b = document.getElementById("Finance");
  var c = document.getElementById("Education");
  if (c.style.display === "none") {
    c.style.display = "flex";
    a.style.display = "none";
    b.style.display = "none";
  } else {
    c.style.display = "none";
  }
}
