const propertyData = [
  {
    type: "Residential",
    id: "12345",
    owner: "Owner 1",
    location: "Delhi",
    encumbrances: 2,
    documents: 3,
    lastUpdated: "2024-12-21"
  },
  {
    type: "Commercial",
    id: "12346",
    owner: "Owner 2",
    location: "Delhi",
    encumbrances: 1,
    documents: 1,
    lastUpdated: "2024-11-02"
  },
  {
    type: "Agricultural",
    id: "45678",
    owner: "Farmer X",
    location: "Tamil Nadu, District A",
    encumbrances: 1,
    documents: 2,
    lastUpdated: "2025-01-15"
  },
  {
    type: "Industrial",
    id: "78910",
    owner: "Company B Ltd",
    location: "Haryana District B",
    encumbrances: 1,
    documents: 1,
    lastUpdated: "2025-03-04"
  }
];

function createPropertyCard(property) {
  return `
    <div class="property-card">
      <h4>${property.type} <span class="badge ${property.type}">${property.type}</span></h4>
      <p><strong>Survey ID:</strong> ${property.id}</p>
      <p><strong>Owner:</strong> ${property.owner}</p>
      <p><strong>Location:</strong> ${property.location}</p>
      <p><strong>Encumbrances:</strong> ${property.encumbrances}</p>
      <p><strong>Documents:</strong> ${property.documents}</p>
      <p><em>Last updated: ${property.lastUpdated}</em></p>
    </div>
  `;
}

window.onload = function () {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = propertyData.map(createPropertyCard).join("");
};