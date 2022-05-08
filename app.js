const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());

//Passing the true value here, creates a deep copy along with child nodes
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner.childNodes);