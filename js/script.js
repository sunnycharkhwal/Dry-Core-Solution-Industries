/* Dry Core Solution Industries: product data + detail page logic. */
/* All contact buttons dial this number. */
const CONTACT = { phone: "+919354843211" };
const PRODUCTS =
[
  {
    "id": 1,
    "name": "2gm Silica gel",
    "also": [
      "100 G White Silica Gel Sachet",
      "Blue Silica Gel"
    ],
    "img": "silica-gel-2gm.png",
    "fit": "cover",
    "price": "120",
    "unit": "Kg",
    "moq": null,
    "alt": "2gm silica gel crystals beside a printed DCSI desiccant pouch",
    "specs": [
      [
        "Color",
        "White"
      ],
      [
        "Form",
        "Crystals"
      ],
      [
        "Mesh Size",
        "16-32 Mesh"
      ],
      [
        "Packaging size",
        "25 kg"
      ],
      [
        "Bead size",
        "1-2mm"
      ],
      [
        "Type",
        "Non-indicating"
      ],
      [
        "Application",
        "Desiccant"
      ],
      [
        "Moisture capacity",
        "10"
      ],
      [
        "Purity",
        "90 %"
      ],
      [
        "Packaging type",
        "Pouch"
      ]
    ],
    "desc": "Silica gel is a porous, solid form of silicon dioxide derived from sand, widely used as a desiccant to absorb moisture and control humidity in packaged goods."
  },
  {
    "id": 2,
    "name": "silica gel packets",
    "also": [
      "Bentonite clay Desiccant",
      "Container Desiccant Bag"
    ],
    "img": "silica-gel-packets.png",
    "fit": "cover",
    "price": "10",
    "unit": "Piece",
    "moq": null,
    "alt": "Pile of 1gm to 10gm non-woven silica gel desiccant packets",
    "specs": [
      [
        "Desiccant Type",
        "Silica gel packets"
      ],
      [
        "Pack Size",
        "1gm 2gm 3gm 5gm 10gm etc"
      ],
      [
        "Outer Material",
        "Non woven"
      ],
      [
        "Indicator Type",
        "Non-indicating"
      ],
      [
        "Application",
        "Shoes, Food packaging, Electronics, Metal parts, Automotive parts, Leather goods, Pharma, Garments"
      ],
      [
        "Packaging Type",
        "500 pc packing"
      ],
      [
        "Reusability",
        "Non reusable"
      ],
      [
        "Shape",
        "Square"
      ],
      [
        "Print on Pouch",
        "Printed"
      ],
      [
        "Country of Origin",
        "India"
      ]
    ],
    "desc": "These 1gm, 2gm, 5gm silica gel desiccant packets, also known as moisture absorbers, provide effective humidity control for pharma, food, shoes, electronic, leather garments, and industrial packaging. DMF-free and odor-free for safe storage."
  },
  {
    "id": 3,
    "name": "Super Absorbent Polymer Water Locks",
    "also": [
      "Sap Super Absorbent Polymer",
      "Super Absorbent Polymer For Diapers"
    ],
    "img": "super-absorbent-polymer.png",
    "fit": "cover",
    "price": "200",
    "unit": "Kg",
    "moq": null,
    "alt": "Beaker showing super absorbent polymer powder turning into gel",
    "specs": [
      [
        "Absorption Capacity",
        "200–300 g/g"
      ],
      [
        "Grade Standard",
        "Industrial Grade"
      ],
      [
        "Physical Form",
        "Powder"
      ],
      [
        "Ionic Type",
        "Non Ionic"
      ],
      [
        "Degradation Time",
        "1–3 Years"
      ],
      [
        "Packaging Size",
        "25 kg"
      ],
      [
        "Application",
        "Medical"
      ],
      [
        "Color",
        "White"
      ]
    ],
    "desc": "Powder to gel"
  },
  {
    "id": 4,
    "name": "Granular Activated Carbon",
    "also": [
      "Activated Carbon Granules",
      "1gm Activated Carbon"
    ],
    "img": "granular-activated-carbon.png",
    "fit": "contain",
    "price": "100",
    "unit": "Kg",
    "moq": "25 Kg",
    "alt": "Heap of black granular activated carbon",
    "specs": [
      [
        "Form",
        "Granular"
      ],
      [
        "Source Material",
        "Wood"
      ],
      [
        "Application",
        "Water Treatment"
      ],
      [
        "Iodine Value",
        "900 mg/g"
      ],
      [
        "Particle Size",
        "1×2"
      ],
      [
        "Grade",
        "Water wash"
      ],
      [
        "Purity",
        "99%"
      ],
      [
        "CTC Value",
        "80 min"
      ],
      [
        "Ash Content",
        "<3%"
      ],
      [
        "Moisture Content",
        "<3%"
      ]
    ],
    "desc": "Activated Carbon"
  },
  {
    "id": 5,
    "name": "Clay Desiccant Silica Gel",
    "also": [
      "Natural Clay Desiccant"
    ],
    "img": "clay-desiccant-silica-gel.png",
    "fit": "contain",
    "price": "120",
    "unit": "Kg",
    "moq": "25 Kg",
    "alt": "Two white 250gm to 1000gm silica gel container desiccant bags",
    "specs": [
      [
        "Desiccant Type",
        "Silica gel"
      ],
      [
        "Form",
        "Beads"
      ],
      [
        "Pack Size",
        "1gm to 1000 gm"
      ],
      [
        "Moisture Adsorption",
        "10–20%"
      ],
      [
        "Packaging Type",
        "Pouch"
      ],
      [
        "Application",
        "Garments, Automotive parts, Container cargo, Electronics"
      ],
      [
        "Indicator Type",
        "Non-indicating"
      ],
      [
        "Reusability",
        "Non reusable"
      ],
      [
        "Industry Grade",
        "Industrial grade"
      ],
      [
        "Country of Origin",
        "India"
      ]
    ],
    "desc": "Natural desiccant, moisture absorption capacity 20 %"
  },
  {
    "id": 6,
    "name": "1Gm Silica Gel",
    "also": [],
    "img": "silica-gel-1gm.png",
    "fit": "cover",
    "price": "170",
    "unit": "Kg",
    "moq": "25 Kg",
    "alt": "1gm silica gel crystals beside a printed desiccant pouch",
    "specs": [
      [
        "Color",
        "White"
      ],
      [
        "Form",
        "Crystals"
      ],
      [
        "Packaging size",
        "25 kg"
      ],
      [
        "Type",
        "Non-indicating"
      ],
      [
        "Bead size",
        "0.5-1 mm"
      ],
      [
        "Application",
        "Electronics, Desiccant"
      ],
      [
        "Grade",
        "Electronics grade"
      ],
      [
        "Moisture capacity",
        "25 %"
      ],
      [
        "Purity",
        "99 %"
      ],
      [
        "Packaging type",
        "Pouch"
      ],
      [
        "22×40",
        "1×1 Inch"
      ]
    ],
    "desc": "Silica Gel Desiccant Pouch 1GM"
  },
  {
    "id": 7,
    "name": "1gm super absorbent",
    "also": [],
    "img": "super-absorbent-1gm.png",
    "fit": "cover",
    "price": "380",
    "unit": "Kg",
    "moq": "25 Kg",
    "alt": "1gm blue-printed DCSI super absorbent desiccant pouch",
    "specs": [
      [
        "Absorption Capacity",
        "200 to 300%"
      ],
      [
        "Desiccant Type",
        "Silica gel"
      ],
      [
        "Grade Standard",
        "Industrial Grade"
      ],
      [
        "Form",
        "Powder"
      ],
      [
        "Physical Form",
        "Powder"
      ],
      [
        "Pack Size",
        "1 g"
      ],
      [
        "Ionic Type",
        "Non Ionic"
      ],
      [
        "Packaging Type",
        "Pouch"
      ],
      [
        "Type",
        "Non-indicating"
      ],
      [
        "Degradation Time",
        "1–3 Years"
      ],
      [
        "Bead size",
        ".5mm"
      ],
      [
        "Packaging Size",
        "1 kg"
      ],
      [
        "Moisture Adsorption",
        "20–30%"
      ],
      [
        "Color",
        "White"
      ],
      [
        "Application",
        "Container cargo, Metal parts, Food packaging, Pharma, Leather goods, Garments, Lab chemicals, Electronics, Automotive parts, Machinery storage"
      ],
      [
        "Grade",
        "Technical"
      ],
      [
        "Purity",
        "99 %"
      ]
    ],
    "desc": "Shoes material"
  },
  {
    "id": 8,
    "name": "White Silica Sand",
    "also": [],
    "img": "white-silica-sand.png",
    "fit": "cover",
    "price": "20",
    "unit": "Kg",
    "moq": "25 Kg",
    "alt": "Pile of white silica sand grains on a red surface",
    "specs": [
      [
        "Particle Size",
        "1–2 mm"
      ],
      [
        "SiO₂ Content",
        "≥ 99%"
      ],
      [
        "Grade",
        "Glass Grade"
      ],
      [
        "Color",
        "White"
      ],
      [
        "Packaging Type",
        "Jumbo Bag"
      ],
      [
        "Pack Size",
        "50 kg"
      ],
      [
        "Application",
        "Glass Industry"
      ],
      [
        "Moisture Content",
        "2–3%"
      ],
      [
        "Form",
        "Granular"
      ]
    ],
    "desc": "White silica sand use for Badminton cork"
  }
];
(function () {
  "use strict";
  const root = document.getElementById("product");
  if (!root) return; // listing page: static HTML, nothing to do

  const id = Number(new URLSearchParams(location.search).get("id"));
  const p = PRODUCTS.find((x) => x.id === id);
  const $ = (s) => document.getElementById(s);

  if (!p) {
    root.innerHTML = '<div class="col-12"><p class="alert alert-warning">Product not found. <a href="index.html">Back to Products</a></p></div>';
    document.title = "Product not found | Dry Core Solution Industries";
    return;
  }

  document.title = p.name + " | Dry Core Solution Industries";
  const img = $("p-img");
  img.src = "images/" + p.img;
  img.alt = p.alt;
  $("p-name").textContent = p.name;
  $("p-price").textContent = p.price;
  $("p-unit").textContent = "/" + p.unit;
  if (p.moq) { $("p-moq").hidden = false; $("p-moq-val").textContent = p.moq; }
  $("p-desc").textContent = p.desc;

  // Specification rows (built with textContent: no HTML injection)
  const tbody = $("p-specs");
  p.specs.forEach(([k, v]) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th"); th.scope = "row"; th.textContent = k;
    const td = document.createElement("td"); td.textContent = v;
    tr.append(th, td); tbody.appendChild(tr);
  });

  // Contact buttons: every one dials the phone number (no email links)
  const tel = "tel:" + CONTACT.phone;
  ["p-quote", "p-latest", "p-call"].forEach((k) => { $(k).href = tel; });
  $("p-photos").href = "images/" + p.img; // opens full-size photo
})();
